import moment from 'moment';
import React from 'react'
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/button';
import Form from '../components/form';
import { Header } from '../components/header';
import { Input } from '../components/input';
import { updateUser } from "../hooks/slice"

const EditPage = () => {
  const location = useLocation();
  const [container, setContainer] = React.useState(location.state)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setContainer({ ...container, [e.target.id]: e.target.value })
  }

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(updateUser(container))
    navigate("/home")
  }

  const inputText = [
    { placeholder: "First Name", id: "firstname", type: "text" },
    { placeholder: "Last Name", id: "lastname", type: "text" },
    { placeholder: "Username", id: "username", type: "text" },
    { placeholder: "Email", id: "email", type: "text" },
    { placeholder: "Password", id: "password", type: "password" },
    { placeholder: "Confirm Password", id: "currentpassword", type: "password" }
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <Header />
        <div className="mt-4 mx-8 flex flex-col align-center justify-center">
          <h3 className="mb-4 sm:align-center">Edit User</h3>
          <Form className="flex justify-center flex-col align-center"
            onSubmit={e => handleEdit(e)}
          >
            {inputText.map(item => (
              <Input className="mb-3" type={item.type} placeholder={item.placeholder} id={item.id} value={container[item.id]} onChange={e => handleChange(e)} />
            ))}
            {container.password !== container.currentpassword ? <span className="text-red-500 -mt-2 mb-2">Password must have the same value</span> : <></>}
            <DatePicker
              id="expireddate"
              className="w-full drop-shadow-lg p-2 rounded-md mb-4"
              selected={new Date(container.expireddate)}
              onChange={(date) => {
                handleChange({
                  target: {
                    id: "expireddate",
                    value: date
                  }
                });
              }}
              placeholderText="Date"
              minDate={moment().toDate()}
            />
            <select id="groupaccess" className="w-full drop-shadow-lg mb-1 p-2 rounded-md" onChange={e => handleChange(e)} value={container.groupaccess}>
              <option selected>Choose a group</option>
              <option value="Group 1">Group 1</option>
              <option value="Group 2">Group 2</option>
              <option value="Group 3">Group 3</option>
              <option value="Group 4">Group 4</option>
            </select>
            <div>
              <Button className="mr-3" type="submit">Submit</Button>
              <Button onClick={() => navigate("/home")}>Cancel</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default EditPage 
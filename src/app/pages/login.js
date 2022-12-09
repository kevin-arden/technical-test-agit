import React from 'react'
import { Input } from "../components/input"
import { Button } from "../components/button"
import Form from "../components/form"
import { useSelector, useDispatch } from "react-redux";
import { login } from "../hooks/slice"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [container, setContainer] = React.useState({
    username: "",
    password: "",
  })
  const [loginFailed, setLoginFailed] = React.useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.user)

  const handleChange = (e) => {
    setContainer({ ...container, [e.target.id]: e.target.value })
    setLoginFailed(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userData.find(item => item.username === container.username && item.password === container.password)) {
      dispatch(login())
      navigate("/home")
    } else {
      setLoginFailed(true)
    }
  }

  return (
    <div className="container mx-auto bg-gradient-to-r from-cyan-500 to-blue-500" >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white flex items-center justify-center h-60 w-60 md:h-60 md:w-64 border-solid border-2 shadow-xl p-5">
          <div className="flex flex-col">
            <div className="flex justify-center my-2">
              <h1 className="text-xl">User data</h1></div>
            <div>
              <Form onSubmit={e => handleSubmit(e)}>
                <Input className="mb-2 border-solid border-2" type="text" placeholder="username" id="username" onChange={handleChange} />
                <Input className="mb-2 border-solid border-2" type="password" placeholder="password" id="password" onChange={handleChange} />
                <div className='flex justify-center'>
                  <div className="flex flex-col">
                    <Button type="submit">Login</Button>
                    {loginFailed ? <span className="text-red-500">Login failed</span> : <></>}
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
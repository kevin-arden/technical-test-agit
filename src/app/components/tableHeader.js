import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from './button'
import { Input } from './input'
import { setSearch } from "../hooks/searchSlice"
const SearchTable = () => {

  const handleChange = (input) => {
    dispatch(setSearch(input))
  }

  const dispatch = useDispatch();

  return <div>
    <div className="flex sm:justify-start sm:pl-6 lg:pl-8">
      <Input type="text" placeholder="Search" id="search" className="w-32 sm:w-48 mr-2" onChange={(e) => handleChange(e.target.value)} />
      <Button className="mr-2">
        Reset
      </Button>

    </div>
  </div>
}

const TableHeader = () => {
  const navigate = useNavigate()
  return (
    <div className="flex sm:justify-between"><SearchTable /><Button className="sm:mr-6 lg:mr-8" onClick={() => navigate("/create")}>Add User</Button></div>
  )
}

export { TableHeader }
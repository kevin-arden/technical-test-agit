import React from 'react'
import { Header } from '../components/header'
import { useSelector } from "react-redux";
import { Table } from "../components/table"

const Home = () => {
  const userData = useSelector((state) => state.auth.user)

  return (
    <div className="container mx-auto ">
      <div className="flex flex-col">
        <Header />
        <div className="mt-4">
          <Table dataInput={userData} />
        </div>
      </div>
    </div>
  )
}

export default Home
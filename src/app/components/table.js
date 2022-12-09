import React, { useState, useEffect } from 'react'
import { Button } from './button'
import { TableHeader } from './tableHeader'
import { deleteUser } from '../hooks/slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

const Table = ({ dataInput }) => {
  let tableHeader = ["First Name", "Last Name", "Username", "Email", "Access", "Expired Date", "Action"]
  const [pagination, setPagination] = useState({
    perPage: 5,
    currentPage: 1,
  })
  let pageNumbers = []
  for (let i = 1; i <= Math.ceil(dataInput.length / pagination.perPage); i++) {
    pageNumbers.push(i)
  }
  const indexLast = pagination.currentPage * pagination.perPage
  const indexFirst = indexLast - pagination.perPage
  const [currentList, setCurrentList] = useState(dataInput.slice(indexFirst, indexLast))
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const searchData = useSelector((state) => state.search.search)


  const listItem = (dataInput) => (
    <tr className="px-6 py-3 text-sm" key={dataInput.username}>
      <td className="px-6 py-3">{dataInput.firstname}</td>
      <td className="px-6 py-3">{dataInput.lastname}</td>
      <td className="px-6 py-3">{dataInput.username}</td>
      <td className="px-6 py-3">{dataInput.email}</td>
      <td className="px-6 py-3">{dataInput.groupaccess}</td>
      <td className="sm:px-3 lg:px-6 py-3">{moment(dataInput.expireddate).format("yyyy-MM-DD")}</td>
      <td className="flex">
        <Button className="mr-2" onClick={(e) => editUser(e, dataInput)}>Edit</Button>
        <Button onClick={(e) => handleDelete(e, dataInput)}>Delete</Button>
      </td>
    </tr>
  )

  const editUser = (e, dataInput) => {
    e.preventDefault()
    navigate(`/edit/${dataInput.id}`, { state: dataInput })
  }

  const handleDelete = (e, dataInput) => {
    e.preventDefault()
    dispatch(deleteUser(dataInput))
  }

  const Pagination = () => {
    return <div className="mb-2">
      <ul className="flex justify-around sm:justify-center ">
        <li className="sm:p-2">
          <button
            disabled={pagination.currentPage === 1 ? true : false}
            onClick={() => setPagination({ ...pagination, currentPage: 1 })}
          >
            First
          </button>
        </li>
        <li className="sm:p-2">
          <button
            disabled={pagination.currentPage === 1 ? true : false}
            onClick={() => setPagination({ ...pagination, currentPage: pagination.currentPage - 1 })}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((page, index) => (
          <li className="sm:p-2" key={index}>
            <button
              className={pagination.currentPage === page ? "font-bold" : ""}
              onClick={() => setPagination({ ...pagination, currentPage: page })}
            >
              {page}
            </button>
          </li>
        ))}
        <li className="sm:p-2">
          <button
            disabled={pagination.currentPage === pageNumbers.length ? true : false}
            onClick={() => setPagination({ ...pagination, currentPage: pagination.currentPage + 1 })}
          >
            Next
          </button>
        </li>
        <li className="sm:p-2">
          <button
            disabled={pagination.currentPage === pageNumbers.length ? true : false}
            onClick={() => setPagination({ ...pagination, currentPage: pageNumbers.length })}
          >
            End
          </button>
        </li>
      </ul>
    </div>
  }

  return (
    <div className="mx-auto px-2">
      <TableHeader />
      <>
        <div className="mt-2 flex flex-col">
          <div className="overflow-x-auto">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200"
                >
                  <thead>
                    <tr className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {tableHeader.map(item => (
                        <th key={item} className=" px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >{item}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>{dataInput.length > 0 ?
                    currentList.map(item => listItem(item)) : <></>}</tbody>
                </table>
              </div>
            </div>
            {/* </div> */}
          </div>
          <Pagination />
        </div>
      </>
    </div>
  )
}

export { Table }
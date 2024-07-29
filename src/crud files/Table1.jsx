import React, { useEffect, useState } from 'react'

const Table = ({ user, handleDelete, handleEdit, handleMultipleDel, handleMultileStatusChange }) => {

  const [mdelete, setMdelete] = useState([])
  const [mstatus, setMstatus] = useState([])

  const SeletedStatusChange = (id, checked) => {
    let all = [...mstatus]
    if (checked) {
      all.push(id)
    }
    else {
      all = all.filter((val) => val != id);
    }
    setMstatus(all)
  }


  const SelectedDelete = (id, checked) => {
    let chekedId = [...mdelete];
    if (checked) {
      chekedId.push(id);
    }
    else {
      chekedId = chekedId.filter((item) => item !== id)
    }
    setMdelete(chekedId);
  }

  const clearSection = () => {
    setMdelete([])
    setMstatus([])
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <table className='table mt-5 shadow' border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone no</th>
                <th>Action</th>
                <th>Status</th>
                <th>
                  <button onClick={() => handleMultipleDel(mdelete, clearSection)} className='btn fw-bold py-0 '>Multi-Delete</button>
                </th>
                <th >
                  <button onClick={() => handleMultileStatusChange(mstatus, clearSection)} className="btn fw-bold py-0">Edit-Status</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                user.map((val, i) => {
                  return (
                    <tr key={i}>
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.phone}</td>
                      <td>
                        <button className='btn btn-light border' onClick={() => handleEdit(val.id)}>Edit</button>
                        <button className='btn btn-light border ms-3' onClick={() => handleDelete(val.id)}>Del</button>
                      </td>
                      <td>
                        <p className=''>{val.status}</p>
                      </td>
                      <td>
                        <input type="checkbox" onChange={(e) => SelectedDelete(val.id, e.target.checked)} checked={mdelete.includes(val.id)} />
                      </td>
                      <td>
                        <input type="checkbox" checked={mstatus.includes(val.id)} onChange={(e) => SeletedStatusChange(val.id, e.target.value)} />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table

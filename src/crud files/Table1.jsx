import React, { useState } from 'react'

const Table = ({ user, handleDelete, handleEdit, handleMultipleDel }) => {

  const [mdelete, setMdelete] = useState([])

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
                <th>
                  <button onClick={() => handleMultipleDel(mdelete)} className='btn fw-bold py-0 '>Multi-Delete</button>
                </th>
                <th>Multi-Edit</th>
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
                        <input type="checkbox" onChange={(e) => SelectedDelete(val.id, e.target.checked)} />
                      </td>
                      <td>
                        <input type="checkbox" name="" id="" />
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

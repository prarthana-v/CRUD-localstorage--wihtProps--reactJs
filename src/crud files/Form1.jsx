import React, { useEffect, useState } from 'react'
import './record.css'
const Record = ({ insertUsers, single }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [edit, setEdit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    insertUsers(name, email, phone, edit);
    setName("")
    setEmail("")
    setPhone("")
    setEdit("")
  }

  useEffect(() => {
    setName(single.name)
    setEmail(single.email)
    setPhone(single.phone)
    setEdit(single.id)
  }, [single])


  return (
    <div>
      <h1 className='text-white bg-secondary h2 fw-bolder py-2 text-center'>CRUD with props</h1>
      <div className="container pt-5">
        <div className="row">

          <form action="" className='form' onSubmit={handleSubmit}>
            <div className="">
              <label>Name :-
                <input type="text" placeholder='Jhon Smith' className='ms-2 ps-2 pe-5' onChange={(e) => setName(e.target.value)} value={name || ""} />
              </label>
            </div>
            <br />
            <div className="">
              <label htmlFor="email">Email :-
                <input type="text" placeholder='name@email.com' className='ms-2 ps-2 pe-5' onChange={(e) => setEmail(e.target.value)} value={email || ""} />
              </label>
            </div>
            <br />
            <div className="">
              <label htmlFor="number" className=''>password :-
                <input type="text" placeholder='+91 1234567890' className='ms-2 ps-2 pe-5' onChange={(e) => setPhone(e.target.value)} value={phone || ""} />
              </label>
            </div>
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div >
  )
}

export default Record

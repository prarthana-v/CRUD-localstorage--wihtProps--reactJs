import Record from "./crud files/Form1"
import Table from "./crud files/Table1";
import React, { useState } from "react";

function App() {

  let data = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
  const [user, setUser] = useState(data);
  const [single, setSingle] = useState("");


  const insertUsers = (name, email, phone, edit) => {

    if (name == "" || email == "" || phone == "") {
      alert("Please fill all the fields");
      return false;
    }

    let obj = {
      id: Date.now(),
      name, email, phone, status: 'active',
    }


    if (edit) {
      let editUser = [...user];
      let upuser = editUser.map((val, i) => {
        if (val.id === edit) {
          return {
            ...val,
            name,
            email,
            phone,
          }
        }
        return val;
      })
      setUser(upuser)
      localStorage.setItem(('users'), JSON.stringify(upuser));
      alert('user updated')
    }
    else {
      let newUser = [...user, obj];
      setUser(newUser);
      localStorage.setItem('users', JSON.stringify(newUser))
      alert('new user added');
    }

  }

  const handleDelete = (id) => {
    // alert(id)
    let deltedUsers = user.filter((val) => val.id !== id);
    setUser(deltedUsers)
    localStorage.setItem('users', JSON.stringify(deltedUsers))
    alert('delete user..');
  }

  const handleEdit = (id) => {
    let editedUser = user.find((val, i) => val.id === id)
    setSingle(editedUser);
  }

  //multiple delete
  const handleMultipleDel = (mdelete, clearSection) => {
    let yes = confirm("deletd Records...??");
    // console.log(mdelete);
    if (yes) {
      if (mdelete > 0) {
        let updatedRecord = user.filter(val => !mdelete.includes(val.id));
        setUser(updatedRecord)
        localStorage.setItem('users', JSON.stringify(updatedRecord))
        alert('record successfully deleted...!')
        clearSection();
      }
      else {
        alert("select at least one record..")
      }
    } else {
      return false;
      // mdelete("")
    }
  }

  //multiple status change
  const handleMultileStatusChange = (mstatus, clearSection) => {
    console.log(mstatus);
    if (mstatus > 0) {
      let updatedStatus = user.map((val) => {
        if (mstatus.includes(val.id)) {
          return {
            ...val,
            status: val.status == 'active' ? 'inactive' : 'active',
          }
        }
        return val;
      })
      setUser(updatedStatus)
      localStorage.setItem('users', JSON.stringify(updatedStatus));
      clearSection();
      alert("Status changed...!! ")
    }
    else {
      alert("select at least one record..");
    }
  }
  return (
    <>
      <Record
        insertUsers={insertUsers}
        single={single}
      />
      <Table
        user={user}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleMultipleDel={handleMultipleDel}
        handleMultileStatusChange={handleMultileStatusChange}
      />
    </>
  )
}

export default App

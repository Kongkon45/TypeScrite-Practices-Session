import React, { useState } from 'react'

const NewUser = () => {
    const [user, setUser] = useState("")
    const handleUserChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUser(e.target.value)

    }
    const handleUser = (e:React.MouseEvent<HTMLButtonElement>)=>{
        console.log(user)
        
    }

  return (
    <div>
        <h1>User management</h1>
        <input type="text" name="user" id="user" value={user} onChange={handleUserChange} placeholder='Enter your user name ..' />
        {/* <p>{user}</p> */}
        <button onClick={handleUser}>Add User</button>
    </div>
  )
}

export default NewUser
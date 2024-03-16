import React, { useState } from 'react'

const NewUsers = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    
    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }
    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const newUser = {name, email}
        console.log(newUser)
        setEmail("")
        setName("")
    }
  return (
    <div>
        <h1>New User Create</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name : 
                <input type="text" name="name" id="name" value={name} placeholder='Enter your name' onChange={handleNameChange}/>
                </label>
            </div>
            <div>
                <label htmlFor="email">Email :
                <input type="email" name="email" id="email" value={email} placeholder='Enter your email...' onChange={handleEmailChange} />
                </label>
            </div>
            <button type="submit">Create User</button>
        </form>
    </div>
  )
}

export default NewUsers
import React from 'react'
type userInfo ={
    name : string,
    age : number,
    isRegistered : boolean
}
const User = ({name, age, isRegistered}:userInfo) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{age}</p>
        {isRegistered ? <p>User registered</p> : <p>User not registered</p>}
    </div>
  )
}

export default User
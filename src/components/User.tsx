import React from 'react'
type userInfo ={
    name : string,
    age : number,
    isRegistered : boolean,
    language: string[]
}
const User = ({name, age, isRegistered, language}:userInfo) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{age}</p>
        {isRegistered ? <p>User registered</p> : <p>User not registered</p>}
        {language?.map((lang, index)=>{
            return <div key={index}>
                <p>{lang}</p>
            </div>
        })}
    </div>
  )
}

export default User
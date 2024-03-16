import React, { useState } from 'react'
type userProps = {
    id : number, 
    name : string
}
const CounterApp = () => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState<null | userProps>(null)
    

    const handleIncrement = ()=>{
        setCount((count)=> {
            return count+1
        })
    }
    const handleDecrement = ()=>{
        setCount((count)=> count-1)
    }
    const handleReset = ()=>{
        setCount(0)
    }

    const handleAddUser = ()=>{
        setUser({id:1, name:"Kongkon Jowarder"})
    }
  return (
    <div>
        <h1>Counter App</h1>
        <h2>Count : {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <h1>{user?.name}</h1>
        <p>{user?.id}</p>
        <button onClick={handleAddUser}>Add User</button>
    </div>
  )
}

export default CounterApp
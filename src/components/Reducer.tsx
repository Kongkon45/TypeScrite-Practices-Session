import React, { useReducer } from 'react'
const initialState = {
    count : 0
}

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENTBYFIVE = "INCREMENTBYFIVE";
type incrementActionType = {
    type : typeof INCREMENT
}
type decrementActionType = {
    type : typeof DECREMENT
}
type resetActionType = {
    type : typeof RESET
}
type incrementByFive = {
    type : typeof INCREMENTBYFIVE,
    playload : number
}

type counterActionType = incrementActionType | decrementActionType | resetActionType | incrementByFive
type counterStateType = {
    count : number
}
const reducer = (state : counterStateType, action : counterActionType)=>{
    switch (action.type) {
        case INCREMENT:
        return{
            count : state.count +1
        }
        case DECREMENT:
          return{
            count : state.count -1
          }
        case RESET:
          return{
            count : 0
          }
        case INCREMENTBYFIVE :
          return{
            count : state.count + action.playload
          }
        default:
            throw new Error();
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div style={{textAlign:"center"}}>
        <h1>Counter App</h1>
        <div style={{padding:"10px", border:"1px solid black", width:"500px", marginLeft:"400px", borderRadius:"10px"}}>
        <h1>Count : {state.count}</h1>
        <button style={{marginRight:"10px"}} onClick={()=>dispatch({type:INCREMENT})}>Increment</button>
        <button style={{marginRight:"10px"}} onClick={()=>dispatch({type:INCREMENTBYFIVE, playload : 5})}>IncrementByFive</button>
        <button style={{marginRight:"10px"}} onClick={()=>dispatch({type:RESET})}>Reset</button>
        <button style={{marginRight:"10px"}} onClick={()=>dispatch({type:DECREMENT})}>Decrement</button>
        </div>
    </div>
  )
}

export default Reducer
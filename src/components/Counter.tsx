import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

type CounterStateType = {
  count: number;
};

const INCREMENT = "INCREMENT";
const INCREMENTBYAMOUNT = "INCREMENTBYAMOUNT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

type IncrementActionType = {
  type: typeof INCREMENT;
};
type IncrementByAmountActionType = {
    type : typeof INCREMENTBYAMOUNT,
    playload : number
}

type DecrementActionType = {
  type: typeof DECREMENT;
};

type ResetActionType = {
  type: typeof RESET;
};

type CounterActionType =
  | IncrementActionType
  | IncrementByAmountActionType
  | DecrementActionType
  | ResetActionType;

const reducer = (state: CounterStateType, action: CounterActionType) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case INCREMENTBYAMOUNT :
        return {
            count : state.count + action.playload
        }
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={()=> dispatch({type : INCREMENTBYAMOUNT, playload : 5})}>IncrementByAmount</button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
    </div>
  );
};

export default Counter;

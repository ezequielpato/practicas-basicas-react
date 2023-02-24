import { useReducer } from "react";

import { initialState, reducer } from "./store/actions";

export const OnClickCounterReducer = () => {

  const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <div className="card">
      <button onClick={() => dispatch({type: "INCREMENT", payload: 5})}>+5</button>
      <button onClick={() => {state.count !== 0 && dispatch({type: "DECREMENT", payload: 1})}}>-1</button>
      <button onClick={() => dispatch({type: "RESET"})}>reset</button>
      <span>Count: {state.count}</span>
    </div>
  )
}
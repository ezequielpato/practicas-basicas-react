import { useReducer } from "react";

import { initialState, reducer } from "./store/actions";

// Componente
export const OnClickReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handlerOnclick = () => {
    dispatch({type: 'INCREMENT'})
    dispatch({type: 'TOGGLESHOWTEXT'})
  }

  return(
    <div className="card">
      <button
        onClick={handlerOnclick}
      >
        count is {state.count}
      </button>
      {state.showText && <p>Here I am!</p>}
    </div>
  )
}
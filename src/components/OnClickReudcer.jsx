import { useReducer } from "react";

const reducer = (state, action) =>{
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText}
    case 'TOGGLESHOWTEXT':
      return { count: state.count, showText: !state.showText}
    default:
      return state
  }
}


export const OnClickReducer = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})

  const handlerOnclick = () => {
    dispatch({type: 'INCREMENT'})
    dispatch({type: 'TOGGLESHOWTEXT'})
  }

  return(
    <div className="card">
      {state.showText && <p>text on off</p>}
      <button
        onClick={handlerOnclick}
      >
        count is {state.count}
      </button>
    </div>
  )
}
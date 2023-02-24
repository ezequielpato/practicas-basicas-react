import { useRef } from "react";

export const UseRef = () => {
  const inputRef = useRef()

  const onClickHandler = () => {
    inputRef.current.focus()
  }

  return (
    <div className="card">
      <input type="text" ref={inputRef} />
      <button onClick={onClickHandler}>Click me</button>
    </div>
  )
}
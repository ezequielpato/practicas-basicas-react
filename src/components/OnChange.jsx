import {useState} from 'react'

export const OnChange = () => {
  const [inputValue, setInputValue] = useState('')

  const handlerOnChange = (e) => {
    let value = e.target.value
    setInputValue(value)
  }

  return (
    <div className="card">
      <input type='text' placeholder='write here!' onChange={handlerOnChange}></input>
      <p>{inputValue}</p>
    </div>
  )
}
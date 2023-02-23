import {useState} from 'react'

export const OnChange = () => {
  const [inputValue, setInputValue] = useState('')

  const handlerOnChange = () => {
    let value = event.target.value
    setInputValue(value)
  }

  return (
    <div>
      <input type='text' placeholder='write here!' onChange={handlerOnChange}></input>
      <p>{inputValue}</p>
    </div>
  )
}
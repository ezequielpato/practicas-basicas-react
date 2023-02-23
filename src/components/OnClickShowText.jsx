import {useState} from 'react'

export const OnClickShowText = () => {
  const [showText, setShowText] = useState(true)

  return (
    <div className="card">
      <button onClick={() => setShowText(!showText)}>
       on off text
      </button>
      {showText && <p>Here I am!</p>}
    </div>
  )
}
import { OnClick } from './components/OnClick'
import { OnChange } from './components/onChange'
import { OnClickShowText } from './components/OnClickShowText'
import { OnClickReducer } from './components/OnClickReudcer'

import './App.css'


function App() {
  return (
    <div className="App">
      <h3>onClick Counter example - useState</h3>
        <OnClick/>
      <h3>onChange Input example - useState</h3>
        <OnChange/>
      <h3>onClick ShowText example - useState</h3>
        <OnClickShowText/>
      <h3>onClick Counter & ShowText example - useReducer</h3>
        <OnClickReducer/>
      <div style={{padding: '5rem'}}>
        <a href='https://www.youtube.com/watch?v=LlvBzyy-558&t=483s&ab_channel=PedroTech' target="_blank">Video Tutorial Link</a>
      </div>

    </div>
  )
}

export default App

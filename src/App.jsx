import { OnClick } from './components/OnClick'
import { OnChange } from './components/onChange'
import { OnClickShowText } from './components/OnClickShowText'
import { OnClickReducer } from './components/OnClickReducer/OnClickReducer'
import { OnClickCounterReducer } from './components/OnClickCounterReducer/OnClickCounterReducer'

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
      <h3>onClick Counter with reset - useReducer</h3>
        <OnClickCounterReducer/>

      <div className='links'>
        <a href='https://www.youtube.com/watch?v=LlvBzyy-558&t=483s&ab_channel=PedroTech' target="_blank">Video Tutorial Link 1</a>
        <a href='https://www.youtube.com/watch?v=ZdlhJ37BL_s&ab_channel=DailyTuition' target="_blank">Video Tutorial Link 2</a>
      </div>

    </div>
  )
}

export default App

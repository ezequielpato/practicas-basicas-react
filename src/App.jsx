import {OnClick} from './components/OnClick'
import { OnChange } from './components/onChange'

import './App.css'

function App() {
  return (
    <div className="App">
      <h3>onClick Example - useState</h3>
        <OnClick/>
      <h3>onChange Example - useState</h3>
        <OnChange/>
    </div>
  )
}

export default App

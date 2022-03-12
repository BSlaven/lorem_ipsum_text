import { useState } from 'react'
import './App.css'
import texts from './data';

function App() {

  const [ data, setData ] = useState(texts);

  return (
    <div className="App">
      <h2 className="title">Generate text</h2>
      <form className="form">
        <input type="number" className="form-input" />
        <button className="form-button">generate</button>
      </form>
    </div>
  )
}

export default App
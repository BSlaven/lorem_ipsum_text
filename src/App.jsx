import { useState } from 'react'
import './App.css'
import texts from './data';

function App() {

  const [ data, setData ] = useState(texts);
  const [ textNumber, setTextNumber ] = useState(0);

  const generateText = e => {
    e.preventDefault();
  }

  const numberInputHandler = e => {
    const number = +e.target.value;
    setTextNumber(number);
  }

  return (
    <div className="App">
      <h2 className="title">Generate text</h2>
      <form className="form" onSubmit={generateText}>
        <input
          onChange={numberInputHandler}
          type="number"
          value={textNumber}
          className="form-input" />
        <button className="form-button">generate</button>
      </form>
    </div>
  )
}

export default App
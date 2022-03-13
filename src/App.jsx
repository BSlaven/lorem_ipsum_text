import { useState } from 'react'
import './App.css'
import texts from './data';

function App() {

  const [ data, setData ] = useState(texts);
  const [ textNumber, setTextNumber ] = useState(0);
  const [ displayData, setDisplayData ] = useState([]);

  const generateText = e => {
    e.preventDefault();
    const newData = [...data];
    if(textNumber <= 1 || textNumber >= newData.length) {
      setDisplayData([newData[0]]);
      return
    }
    setDisplayData(data.slice(0, textNumber))
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
        <button
          className="form-button">generate</button>
      </form>
      <section className="paragraph-container">
        {displayData && displayData.map(item => <p key={item}>{item}</p>)}
      </section>
    </div>
  )
}

export default App
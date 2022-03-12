import { useState } from 'react'
import './App.css'
import text from './data';

function App() {

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
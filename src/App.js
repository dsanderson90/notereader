import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [notes, setNotes] = useState(['b6', 'a6', 'g5', 'f5', 'e5', 'd5', 'c5', 'b5', 'a5', 'g4', 'f4', 'e4', 'd4', 'c4', 'b4'])
  const [note, setNote] = useState('c5')
  const [input, setInput] = useState('')
  const handleChange = (e) => {
    const { value } = e.target
    setInput(value)
  }

  const handleClick = (e) => {
    const { value } = e.target;
    setNote(value)
  }

  const btns = notes.map((note, idx) => <button key={idx} value={note} onClick={handleClick}>{note}</button>)
  return (
    <div className="App">

      <div class="sheet-music">
        <div className="bar">
          <div className="stave-header"></div>

          <div class="bar-line"></div>
        </div>
        <div class="bar">
          <div className='quarter-note' ></div>
          <div className='quarter-note' ></div>
          <div className={note + ' quarter-note'} ></div>
          <div class="bar-line"></div>
        </div>
        <div class="bar">
          <div class="bar-line"></div>
        </div>
        <div class="bar">
          <div class="bar-line"></div>
        </div>
      </div>
      {btns}
    </div>
  );
}

export default App;

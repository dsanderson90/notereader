import React, { useState, useEffect } from 'react'

function NoteReader() {
    
    const [notes, setNotes] = useState(['b4', 'c4', ,'d4', 'e4', 'f4', 'g4', 'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'a6', 'b6'])
    const [note, setNote] = useState('c5')

    const handleClick = (e) => {
        const { value } = e.target;
        setNote(value)
    }

    const btns = notes.map((note, idx) => <button className="btn" key={idx} value={note} onClick={handleClick}>{note}</button>)
    return (
        <div className="App">
            {note}
            <div className="sheet-music">
                
                <div className="bar">
                    <div className="stave-header"></div>
                    <div className={note + ' quarter-note'} ></div>
                    <div class="bar-line"></div>
                </div>
            </div>
            <div className="container">
                {btns}
            </div>
        </div>

    )
} export default NoteReader
import React, { useState, useEffect } from 'react';

function NoteReader() {
  useEffect(() => {
    const onDown = event => {
      const { key } = event;
      const res = notes.filter(note => note.key === key);
      res.length > 0 && setNote(res[0].note);
    };
    window.addEventListener('keydown', onDown);
    return () => {
      window.removeEventListener('keydown', onDown);
    };
  }, []);

  const [notes, setNotes] = useState([
    { key: '`', note: 'b4' },
    { key: '1', note: 'c4' },
    { key: '2', note: 'd4' },
    { key: '3', note: 'e4' },
    { key: '4', note: 'f4' },
    { key: '5', note: 'g4' },
    { key: '6', note: 'a5' },
    { key: '7', note: 'b5' },
    { key: '8', note: 'c5' },
    { key: '9', note: 'd5' },
    { key: '-', note: 'e5' },
    { key: '=', note: 'f5' },
    { key: 'q', note: 'g5' },
    { key: 'w', note: 'a6' },
    { key: 'e', note: 'b6' },
  ]);
  const [note, setNote] = useState('c5');
  const handleClick = e => {
    const { value } = e.target;
    setNote(value);
  };
  const btns = notes.map((note, idx) => (
    <input
      type='button'
      className='btn'
      key={idx}
      value={note.note}
      onClick={handleClick}
    ></input>
  ));
  return (
    <div className='App'>
      {note}
      <div className='sheet-music'>
        <div className='bar'>
          <div className='stave-header'></div>
          <div className={note + ' quarter-note'}></div>
          <div className='bar-line'></div>
        </div>
      </div>

      <div className='container'>{btns}</div>
    </div>
  );
}
export default NoteReader;

import React, { useState, useEffect } from 'react';

function Composer() {

  const noteFactory = (pitch, duration) => {
    return {
      pitch,
      duration
    }
  }
  // useEffect(() => {
  //   const onDown = event => {
  //     const { key } = event;
  //     const res = notes.filter(note => note.key === key);
  //     res.length > 0 && setNote(res[0].note);
  //   };
  //   window.addEventListener('keydown', onDown);
  //   return () => {
  //     window.removeEventListener('keydown', onDown);
  //   };
  // }, []);

  const [pitches, setPitches] = useState([
    { pitch: 'b4' },
    { pitch: 'c4' },
    { pitch: 'd4' },
    { pitch: 'e4' },
    { pitch: 'f4' },
    { pitch: 'g4' },
    { pitch: 'a5' },
    { pitch: 'b5' },
    { pitch: 'c5' },
    { pitch: 'd5' },
    { pitch: 'e5' },
    { pitch: 'f5' },
    { pitch: 'g5' },
    { pitch: 'a6' },
    { pitch: 'b6' },
  ]);
  const [duration, setDuration] = useState([
    { dur: 'half-note' },
    { dur: 'quarter-note' },
    { dur: 'eighth-note' },
    { dur: 'three-eighth-note' },
    { dur: 'half-note-spacer' },
  ]);

  const [isOpened, setIsOpened] = useState(false)


  const [currentNote, setCurrentNote] = useState({ pitch: '', duration: '' })


  const [score, setScore] = useState([])

  const handleClick = e => {
    const { value } = e.target;
    const len = value.length;
    return len > 2 ? setCurrentNote({ ...currentNote, duration: value }) : len <= 2 ? setCurrentNote({ ...currentNote, pitch: value }) : '';

  }

  const handleAddNote = () => {
setScore([...score,  <div className={`${currentNote.pitch} ${currentNote.duration}`}></div>])
  }

  const toggleOpen = e => {
    setIsOpened(!isOpened);
  };

  const pitchBtns = pitches.map((pitch, idx) => (
    <input
      type='button'
      className='btn'
      key={idx}
      value={pitch.pitch}
      onClick={handleClick}
    ></input>
  ));

  const durationBtns = duration.map((duration, idx) => (
    <input
      type='button'
      className='btn'
      key={idx}
      value={duration.dur}
      onClick={handleClick}
    ></input>
  ));
const music = score.map(n => n)

  return (
    <div className='App'>
      <div className='sheet-music'>
        <div className='bar'>
          <div className='stave-header'></div>
      {music}
          <div className='bar-line'></div>
        </div>
      </div>
      {currentNote.pitch} {currentNote.duration}
      <div className='container'>
        {isOpened && <div>{durationBtns} {pitchBtns} </div>}
        {!isOpened ? <button onClick={toggleOpen}>+</button> : <button onClick={toggleOpen}>-</button>}
        <button onClick={handleAddNote}>Add Note</button>
      </div>
    </div>
  );
}
export default Composer;

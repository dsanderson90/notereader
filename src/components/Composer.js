import React, { useState, useEffect } from 'react';

function Composer() {
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

  const [isOpened, setIsOpened] = useState(false);
  const [currentNote, setCurrentNote] = useState({ pitch: '', duration: '' });

  const [score, setScore] = useState([
    [
      'c4 quarter-note',
      'd4 quarter-note',
      'e4 quarter-note',
      'f4 quarter-note',
    ],
    [
      'g4 quarter-note',
      'a5 quarter-note',
      'b5 quarter-note',
    ],
  ]);

  const handleClick = e => {
    const { value } = e.target;
    const len = value.length;
    return len > 2
      ? setCurrentNote({ ...currentNote, duration: value })
      : len <= 2
      ? setCurrentNote({ ...currentNote, pitch: value })
      : '';
  };

  const handleAddNote = () => {
    let currentIdx = score.length - 1 // find the last nested array
    //push to last array if the last nested arrays length < 4
    if(score[currentIdx].length < 4) {
      console.log('1')
    setScore([
      ...score,
      `${currentNote.pitch} ${currentNote.duration}`
    ])
  }
  else {

  }
    //create new array if array is filled
  };

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
  const music = score.map(measure => {
    let output = <div className="bar">{measure.map(el => <div className={el}></div>)}<div className="bar-line"></div></div>
   return output
  });

  return (
    <div className='App'>
      <div className='sheet-music'>{music}</div>

      <div id='noteSelected'>
        {currentNote.pitch} {currentNote.duration}
      </div>
      <div className='container'>
        {isOpened && (
          <div>
            {durationBtns} {pitchBtns}
          </div>
        )}
        {!isOpened ? (
          <button className='btn' onClick={toggleOpen}>
            +
          </button>
        ) : (
          <button className='btn' onClick={toggleOpen}>
            -
          </button>
        )}
        <button className='btn' onClick={handleAddNote}>
          Add Note
        </button>
      </div>
    </div>
  );
}
export default Composer;

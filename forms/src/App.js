import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [controlledInput, setControlledInput] = useState('');
  const uncontrolledInputRef = useRef(null);

  const handleControlledSubmit = (e) => {
    e.preventDefault();
    console.log('Controlled Form Submission:', controlledInput);
  };

  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    console.log('Uncontrolled Form Submission:', uncontrolledInputRef.current.value);
  };

  return (
    <div className="App">
      <div className="controlled-form">
        <h2>Controlled Form</h2>
        <form onSubmit={handleControlledSubmit}>
          <label>
            Input:
            <input
              type="text"
              value={controlledInput}
              onChange={(e) => setControlledInput(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="uncontrolled-form">
        <h2>Uncontrolled Form</h2>
        <form onSubmit={handleUncontrolledSubmit}>
          <label>
            Input:
            <input type="text" ref={uncontrolledInputRef} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;

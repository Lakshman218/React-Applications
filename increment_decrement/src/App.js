import './App.css';
import React, {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    setCount(count+1)
  }
  const handleDecrement = () => {
    setCount(count-1)
  }
  
  return (
    <div className="App">
      <div className="Counter">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <div className="buttons">
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;

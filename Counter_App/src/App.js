import React, { useState, useEffect, Fragment } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${count + 1}`
        );
        if (!response.ok) {
          throw new Error(`Unable to fetch user data for count ${count}`);
        }

        const userData = await response.json();
        setUserInfo(userData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div className="counter">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <div className="buttons">
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>

      <div className="user-info">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {userInfo && (
          <>
            <h2>User Information</h2>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Website: {userInfo.website}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

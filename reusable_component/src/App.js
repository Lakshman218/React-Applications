import React from 'react';
import './App.css';
import ListItem from './ListItem';

function App() {
  const items = [
    {id: 1, text: 'Item 1'},
    {id: 2, text: 'Item 2'},
    {id: 3, text: 'Item 3'},
  ];

  return (
    <div className="App">
      <div className='app'>
        <div className='mainHeading'>
          <h1>List of Items</h1>
        </div>
        <div className='items'>
          { items.map((item) => (
            <ListItem keyProp={item.id} content={item.text}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

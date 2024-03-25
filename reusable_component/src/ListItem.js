import React from 'react'

const ListItem = ({keyProp, content}) => {
  return (
    <div key={keyProp} className='list-item'>
      <p>{`Item: ${content}`}</p>
    </div>
  )
};

export default ListItem;
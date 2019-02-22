import React from 'react';

function ListItem(props) {
  return (
    <li className='ListItem'>
      {props.item}
      <button onClick={props.deleteHandler}>x</button>
    </li>
  );
}

export default ListItem;
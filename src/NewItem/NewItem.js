import React from 'react';

function NewItem(props) {
  return (
    <li className='NewItem'>
      <input
        type="text"
        value={props.value}
        onChange={props.changeNewItem} />
      <button
        onClick={props.addNewItem}>
        Add
      </button>
    </li>
  );
}

export default NewItem;
import React from 'react';

const Note = ({ task, onDelete }) => (
  <div>
    <span>{task}</span>
    <button onClick={onDelete} >X</button>
  </div>
);

export default Note;

import React from 'react';
import Note from './Note';

const Notes = ({ notes, onDelete = () => {} }) => (
  <ul>
    {notes.map(note => (
      <li key={note.id}>
        <Note
          task={note.task}
          onDelete={onDelete.bind(null, note.id)}
        />
      </li>
    ))}
  </ul>
);

export default Notes;

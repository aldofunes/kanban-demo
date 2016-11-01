import React from 'react';
import Note from './Note';
import Editable from './Editable';
import LaneActions from '../actions/LaneActions';

const Notes = ({ notes, onNoteClick = () => {}, onEdit = () => {}, onDelete = () => {} }) => (
  <ul className="notes">
    {notes.map(({ id, editing, task }) => (
      <li key={id}>
        <Note
          className="note"
          id={id}
          editing={editing}
          onClick={onNoteClick.bind(null, id)}
          onMove={LaneActions.move}
        >
          <Editable
            className="editable"
            editing={editing}
            value={task}
            onEdit={onEdit.bind(null, id)}
          />
          <button className="delete" onClick={onDelete.bind(null, id)} >X</button>
        </Note>
      </li>
    ))}
  </ul>
);

Notes.propTypes = {
  notes: React.PropTypes.array.isRequired,
  onDelete: React.PropTypes.func.isRequired
};

export default Notes;

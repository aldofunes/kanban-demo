import React from 'react';
import {compose} from 'redux';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Notes from './Notes';
import LaneHeader from './LaneHeader';

const Lane = ({ connectDropTarget, lane, notes, LaneActions, NoteActions, ...props }) => {
  const activateNoteEdit = (noteId) => {
    NoteActions.update({ id: noteId, editing: true });
  };

  const editNote = (noteId, task) => {
    NoteActions.update({ id: noteId, task, editing: false });
  };

  const deleteNote = (noteId, event) => {
    // Avoid bubbling to edit
    event.stopPropagation();

    LaneActions.detachFromLane({
      laneId: lane.id,
      noteId
    });

    NoteActions.delete(noteId);
  };

  const selectNotesByIds = (allNotes, noteIds = []) => {
    return noteIds.reduce((notes, id) => notes.concat(
      allNotes.filter(note => note.id === id)
    ), [])
  };

  return connectDropTarget(
    <div {...props}>
      <LaneHeader lane={lane} />
      <Notes
        notes={selectNotesByIds(notes, lane.notes)}
        onNoteClick={activateNoteEdit}
        onEdit={editNote}
        onDelete={deleteNote}
      />
    </div>
  );
};

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if (!targetProps.lane.notes.length) {
      LaneActions.attachToLane({
        laneId: targetProps.lane.id,
        noteId: sourceId
      });
    }
  }
};

export default compose(
  DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
  connect(({ notes }) => ({
    notes
  }), {
    NoteActions,
    LaneActions
  })
)(Lane);

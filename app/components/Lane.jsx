import React from 'react';
import {compose} from 'redux';
import {DragSource, DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Notes from './Notes';
import LaneHeader from './LaneHeader';

const Lane = ({
  connectLaneDragSource,
  isDragging,
  connectLaneDropTarget,
  isOver,
  onMove,
  connectDropTarget,
  lane,
  notes,
  LaneActions,
  NoteActions,
  ...props
}) => {
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

  return compose(connectLaneDragSource, connectLaneDropTarget, connectDropTarget)(
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

Lane.propTypes = {
  lane: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    editing: React.PropTypes.bool,
    name: React.PropTypes.string,
    notes: React.PropTypes.array
  }).isRequired,
  LaneActions: React.PropTypes.object,
  NoteActions: React.PropTypes.object,
  connectDropTarget: React.PropTypes.func
};
Lane.defaultProps = {
  name: '',
  notes: []
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

const laneSource = {
  beginDrag(props) {
    return {
      id: props.lane.id
    };
  }
};

const laneTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.lane.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if (sourceId !== targetId) {
      targetProps.onMove({ sourceId, targetId });
    }
  }
};

export default compose(
  DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
  DragSource(ItemTypes.LANE, laneSource, (connect, monitor) => ({
    connectLaneDragSource: connect.dragSource(),
    isDragging: monitor.isDragging
  })),
  DropTarget(ItemTypes.LANE, laneTarget, (connect, monitor) => ({
    connectLaneDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  })),
  connect(({ notes }) => ({
    notes
  }), {
    NoteActions,
    LaneActions
  })
)(Lane);

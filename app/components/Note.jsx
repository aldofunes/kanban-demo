import React from 'react';
import {compose} from 'redux';
import {DragSource, DropTarget} from 'react-dnd';
import itemTypes from '../constants/itemTypes';

const Note = ({ connectDragSource, connectDropTarget, isDragging, isOver, onMove, id, editing, children, ...props }) => {
  // Pass through if we are editing the note
  const dragSource = editing ? a => a : connectDragSource;

  return compose(dragSource, connectDropTarget)(
    <div
      style={{ opacity: isDragging || isOver ? 0 : 1 }}
      {...props}
    >
      {children}
    </div>
  );
};

Note.propTypes = {
  connectDragSource: React.PropTypes.func,
  connectDropTarget: React.PropTypes.func,
  isDragging: React.PropTypes.bool,
  isOver: React.PropTypes.bool,
  onMove: React.PropTypes.func,
  id: React.PropTypes.string.isRequired,
  editing: React.PropTypes.bool,
  children: React.PropTypes.node
};

Note.defaultProps = {
  onMove: () => {}
};

const noteSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  }
};

const noteTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if (sourceId !== targetId) {
      targetProps.onMove({ sourceId, targetId });
    }
  }
};

export default compose(
  DragSource(itemTypes.NOTE, noteSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),
  DropTarget(itemTypes.NOTE, noteTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }))
)(Note);

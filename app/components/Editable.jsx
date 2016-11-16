import React from 'react';
import classnames from 'classnames';

const Editable = ({ editing, value, onEdit, className, ...props }) => {
  if (editing) {
    return <Edit className={className} value={value} onEdit={onEdit} {...props} />;
  }
  return <span className={classnames('value', className)} {...props}>{value}</span>;
};

Editable.propTypes = {
  value: React.PropTypes.string,
  editing: React.PropTypes.bool,
  onEdit: React.PropTypes.func.isRequired
};

Editable.defaultProps = {
  value: '',
  editing: false,
  onEdit: () => {}
};

class Edit extends React.Component {
  checkEnter = (event) => {
    if (event.key === 'Enter') {
      this.finishEdit(event);
    }
  };

  finishEdit = (event) => {
    const { value } = event.target;
    const { onEdit } = this.props;

    if (onEdit) {
      onEdit(value);
    }
  };

  render() {
    const { className, value, onEdit, ...props } = this.props;

    return <input
      type="text"
      className={classnames('edit', className)}
      autoFocus
      defaultValue={value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter}
      {...props}
    />

  }
}

export default Editable;

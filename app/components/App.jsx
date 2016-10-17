import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    }
  }

  addNote = () => {
    const {notes} = this.state;
    this.setState({
      notes: notes.concat([{
        id: uuid.v4(),
        task: 'New Task'
      }])
    })
  };

  deleteNote = (id, event) => {
    // Avoid bubbling to edit
    event.stopPropagation();

    const {notes} = this.state;

    this.setState({
      notes: notes.filter(note => note.id !== id)
    });
  };

  render() {
    const { notes } = this.state;

    return (
      <div>
        <button
          onClick={this.addNote}
        >+
        </button>
        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>
    );
  }
}

export default App;

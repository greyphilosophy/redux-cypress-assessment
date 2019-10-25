import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TaskList extends Component {
  render() {
    return (
      <div>
        <Link to="/addTask">
          <button name='add-task-button'>
            Add Task
          </button>
        </Link>
      </div>
    );
  }
}

export default TaskList;

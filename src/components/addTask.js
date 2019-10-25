import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddTask extends Component {
  render() {
    return (
      <div>
        <span name="back">
          <Link to="/">
            Back
          </Link>
        </span>
      </div>
    )
  }
}

export default AddTask;

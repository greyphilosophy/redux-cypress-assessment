import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TaskList from './components/taskList';
import AddTask from './components/addTask';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={TaskList}/>
        <Route path='/addTask' component={AddTask}/>
      </BrowserRouter>
    );
  }
}

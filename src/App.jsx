import React, { Component } from 'react';
import { stringify } from 'querystring';
import TodoList from './TodoList';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1 className='white'>Very Simple Todo App</h1>
        <h4 className='white'>Track all of the things</h4>
        <hr className='white' />
        <div className='row'>
          <div className='col-md-4'>
            <div className='panel'>
              <div className='panel-heading'>
                Add New Todo
              </div>
              <div className='panel-body'>
                <label htmlFor='create-todo-text'><p><strong>I want to...</strong></p></label>
                <textarea name='create-todo-text' />
                <label htmlFor='create-todo-priority'><p><strong>How much of a priority is this?</strong></p></label>
                <div>
                  <select name='create-todo-priority' value='' required>
                    <option value='' disabled>Select a priority</option>
                    <option value='1'>High</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Low</option>
                  </select>
                </div>
              </div>
              <div className='panel-footer'>
                <button name='add' className='btn btn-success btn-block'>Add</button>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

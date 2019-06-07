import React, { Component } from 'react';

class EditTodo extends Component {
  render() {
    return (
      <div className='panel-body'>
        <label htmlFor='update-todo-text'><p><strong>Description</strong></p></label>
        <textarea name='update-todo-text' />
        <label htmlFor='update-todo-priority'><p><strong>Priority</strong></p></label>
        <div>
          <select name='update-todo-priority' value='' required>
            <option value='' disabled>Select a priority</option>
            <option value='1'>High</option>
            <option value='2'>Medium</option>
            <option value='3'>Low</option>
          </select>
        </div>
        <div>
          <button name='update-todo' className='btn btn-success pull-right'>Save</button>
        </div>
      </div>
    );
  }
}

export default EditTodo;

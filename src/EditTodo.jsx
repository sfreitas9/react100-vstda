import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditTodo extends Component {
  constructor(props) {
    super(props);
    if (this.props.beingEdited >= 0) {
      this.state = {
        currText: this.props.todoList[this.props.beingEdited].task,
        currPriority: this.props.todoList[this.props.beingEdited].priority
      };
      this.handleChange = this.handleChange.bind(this);
    }
  }

  handleChange(event) {
    switch (event.target.name) {
      case 'update-todo-text':
        this.setState({
          currText: event.target.value
        });
        break;
      case 'update-todo-priority':
        this.setState({
          currPriority: event.target.value
        });
        break;
      default:
        break;
    }
  }

  render() {
    if (this.props.beingEdited == null) return null;
    return (
      <div className='panel-body'>
        <label htmlFor='update-todo-text'><p><strong>Description</strong></p></label>
        <textarea name='update-todo-text' className='update-todo-text' value={ this.state.currText } onChange={ this.handleChange } />
        <label htmlFor='update-todo-priority'><p><strong>Priority</strong></p></label>
        <div>
          <select name='update-todo-priority' className='update-todo-priority' value={ this.state.currPriority } onChange={ this.handleChange } required>
            <option value='' disabled>Select a priority</option>
            <option value='3'>High</option>
            <option value='2'>Medium</option>
            <option value='1'>Low</option>
          </select>
        </div>
        <div>
          <button name='update-todo' className='btn btn-success pull-right update-todo' onClick={ () => this.props.onEdit(this.props.todoList[this.props.beingEdited], this.state.currText, this.state.currPriority) }>Save</button>
        </div>
      </div>
    );
  }
}

EditTodo.propTypes = {
  todoList: PropTypes.array,
  beingEdited: PropTypes.number,
  onEdit: PropTypes.func,
};

export default EditTodo;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    const listClass = 'list-group-item ' + (this.props.priority === '1' ? 
    'list-group-item-danger' : (this.props.priority === '2' ? 'list-group-item-warning' :
    'list-group-item-success'));
    return (
      <li className={ listClass } key={ `${this.props.task}${this.props.i}` }>
        <input type='checkbox' defaultChecked={ !!this.props.completed } />
        { this.props.task }
        <a className='delete-todo' href='#'><i className='fas fa-trash-alt pull-right spaced' /></a>
        <a className='edit-todo' href='#'><i className='far fa-edit pull-right pl-2' /></a>
      </li>
    );
  }
}

TodoItem.propTypes = {
  i: PropTypes.number,
  task: PropTypes.string,
  priority: PropTypes.string,
  completed: PropTypes.bool
};

export default TodoItem;

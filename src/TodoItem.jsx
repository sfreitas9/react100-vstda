import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.editingItem === this.props.item.id) return null;
    const listClass = 'list-group-item ' + (this.props.item.priority === '1' ? 
    'list-group-item-success' : (this.props.item.priority === '2' ? 'list-group-item-warning' :
    'list-group-item-danger'));
    return (
      <li className={ listClass } key={ `${this.props.item.id}` }>
        <input type='checkbox' defaultChecked={ !!this.props.item.completed } />
        { this.props.item.task }
        <a className='delete-todo' href='#' onClick={ () => this.props.onDelete(this.props.item.id) }><i className='fas fa-trash-alt pull-right spaced' /></a>
        <a className='edit-todo' href='#' onClick={ () => this.props.setEdit(this.props.item) }><i className='far fa-edit pull-right pl-2' /></a>
      </li>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.object,
  editingItem: PropTypes.number,
  setEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default TodoItem;

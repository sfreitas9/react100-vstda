import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import EditTodo from './EditTodo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prioritySort: false,
    };
    this.setSort = this.setSort.bind(this);
  }

  setSort() {
    this.setState({
      prioritySort: !this.state.prioritySort
    });
  }

  render() {
    let beingEdited = null;
    let checkbox = null;
    let listItems = this.props.todoList;
    if (this.state.prioritySort) {
      listItems = [...this.props.todoList].sort((a, b) => (b.priority - a.priority));
    }
    if (listItems.length === 0) {
      listItems = (<li><strong>Welcome to Very Simple Todo App!</strong><br />Get started now by adding a new todo on the left.</li>);
    } else {
      listItems = listItems.map((item, i) => {
        if (item.id === this.props.editingItem) beingEdited = i;
        return (
          <TodoItem
            item={ item }
            key={ item.id }
            editingItem={ this.props.editingItem }
            setEdit={ this.props.setEdit }
            onDelete={ this.props.onDelete }
          />
        );
      });
      const marginStyle = {
        margin: '0 0 1em 1em'
      }
      checkbox = (<div style={ marginStyle }><input className='m-4' type='checkbox' name='sort-order' onChange={ this.setSort } />Sort by priority</div>);
    }
    const editArea = (beingEdited != null) ? <EditTodo key={ this.props.todoList[beingEdited].id } todoList={ this.props.todoList } beingEdited={ beingEdited } onEdit={ this.props.onEdit } /> : '';

    return (
      <div className='panel'>
        <div className='panel-heading'>
        View Todos
        </div>
        { editArea }
        <div className={ listItems.length > 0 ? 'panel-body no-padding' : 'panel-body' }>
          <ul className='list-group'>
            { listItems }
          </ul>
        </div>
        { checkbox }
      </div>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  editingItem: PropTypes.number,
  setEdit: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};


export default TodoList;

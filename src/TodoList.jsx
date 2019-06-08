import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import EditTodo from './EditTodo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listItems = this.props.todoList.map((item, i) => {
      return (
        <TodoItem
          i={ i }
          key={ i }
          task={ item.task }
          priority={ item.priority }
          completed={ item.completed }
        />
      );
    });
    if (listItems.length === 0) {
      listItems = (<li><strong>Welcome to Very Simple Todo App!</strong><br />Get started now by adding a new todo on the left.</li>);
    }
    return (
      <div className='panel'>
        <div className='panel-heading'>
        View todos
        </div>
        <EditTodo />
        <div className='panel-body no-padding'>
          <ul className='list-group'>
            { listItems }
          </ul>
        </div>
      </div>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array
};


export default TodoList;
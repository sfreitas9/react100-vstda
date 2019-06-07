import React, { Component } from 'react';
import TodoItem from './TodoItem';
import EditTodo from './EditTodo';

class TodoList extends Component {
  render() {
    const todos = [
      {
        task: 'Buy milk',
        priority: 'low',
        completed: false
      },
      {
        task: 'Always be coding',
        priority: 'high',
        completed: true
      },
      {
        task: 'Feed the cats',
        priority: 'medium',
        completed: false
      },
    ];
    let listItems = todos.map((item, i) => {
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
        View Todos
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
export default TodoList;

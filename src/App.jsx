import React, { Component } from 'react';
import { stringify } from 'querystring';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          task: 'Buy milk',
          priority: '2',
          completed: false
        },
        {
          task: 'Always be coding',
          priority: '3',
          completed: true
        },
        {
          task: 'Feed the cats',
          priority: '1',
          completed: false
        },
      ],
      currText: '',
      currPriority: '0'
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log('done in constructor');
  }

  handleAdd() {
    const newItem = {
      task: this.state.currText,
      priority: this.state.currPriority,
      completed: false,
      editEnabled: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem],
      currText: '',
      currPriority: '0'
    });
  }

  handleChange(event) {
    console.log('in handle change');
    switch (event.target.name) {
      case 'create-todo-text':
        this.setState({
          currText: event.target.value
        });
        break;
      case 'create-todo-priority':
        this.setState({
          currPriority: event.target.value
        });
        break;
      default:
        break;
    }
  }

  render() {
    console.log('in render');

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
                <textarea name='create-todo-text' onChange={ this.handleChange } value={ this.state.currText } />
                <label htmlFor='create-todo-priority'><p><strong>How much of a priority is this?</strong></p></label>
                <div>
                  <select name='create-todo-priority' value={ this.state.currPriority } required onChange={ this.handleChange }>
                    <option value='0' disabled>Select a priority</option>
                    <option value='1'>High</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Low</option>
                  </select>
                </div>
              </div>
              <div className='panel-footer'>
                <button name='add' onClick={ this.handleAdd } className='btn btn-success btn-block'>Add</button>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <TodoList todoList={ this.state.todoList } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

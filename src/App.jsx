import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      nextId: 1,
      currText: '',
      currPriority: '0',
      editingItem: null
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setEdit = this.setEdit.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(item) {
    this.setState({
      todoList: this.state.todoList.filter(curr => curr.id !== item)
    });
  }

  onEdit(item, newTask, newPriority) {
    if (!this.validTask(newTask, newPriority)) return;
    const objIndex = this.state.todoList.findIndex(obj => obj.id === item.id);
    item.task = newTask;
    item.priority = newPriority;

    const updatedList = [
      ...this.state.todoList.slice(0, objIndex),
      item,
      ...this.state.todoList.slice(objIndex + 1),
    ];
    this.setState({
      todoList: updatedList,
      editingItem: null
    });
  }

  setEdit(item) {
    this.setState({
      editingItem: item.id
    });
  }

  validTask(task, priority) {
    if (task === '' || priority === '0') {
      alert(`Please enter a task and a priority`);
      return false;
    }
    return true;
  }

  handleAdd() {
    if (!this.validTask(this.state.currText, this.state.currPriority)) return;
    const newItem = {
      id: this.state.nextId,
      task: this.state.currText,
      priority: this.state.currPriority,
      completed: false,
    };
    this.setState({
      todoList: [...this.state.todoList, newItem],
      nextId: this.state.nextId + 1,
      currText: '',
      currPriority: '0'
    });
  }

  handleChange(event) {
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
                <textarea className='create-todo-text' name='create-todo-text' onChange={ this.handleChange } value={ this.state.currText } />
                <label htmlFor='create-todo-priority'><p><strong>How much of a priority is this?</strong></p></label>
                <div>
                  <select className='create-todo-priority' name='create-todo-priority' value={ this.state.currPriority } required onChange={ this.handleChange }>
                    <option value='0' disabled>Select a priority</option>
                    <option value='3'>High</option>
                    <option value='2'>Medium</option>
                    <option value='1'>Low</option>
                  </select>
                </div>
              </div>
              <div className='panel-footer'>
                <button name='add' onClick={ this.handleAdd } className='btn btn-success btn-block create-todo'>Add</button>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <TodoList
              todoList={ this.state.todoList }
              editingItem={ this.state.editingItem }
              setEdit={ this.setEdit }
              onEdit={ this.onEdit }
              onDelete={ this.onDelete }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

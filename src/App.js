import React, { Component } from 'react';
import "font-awesome/css/font-awesome.min.css"

class TodoAdder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoValue: ""
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }
  onChangeHandler(event) {
    this.setState({todoValue: event.target.value})
  }
  onClickHandler(event) {
    this.props.addTodoHandler(this.state.todoValue)
  }
  render() { 
    return (
        <div className='pure-g'>
          <input type='text' id='todo' placeholder="put in todo here" value={this.state.todoValue} onChange={this.onChangeHandler}/>
          <button className='btn btn-default' onClick={this.onClickHandler}><i className="fa fa-plus"></i></button>
        </div>
    )
  }
}
class TodoList extends Component {
  render() { 
    const todoList = this.props.todoList.map((todo, index) => { 
      return <div key={"TODO" + index}>{todo.task} 
            <button onClick={(index) => this.props.deleteHandler(index)}><i className="fa fa-minus" /></button></div>
    })
    return (
	    <div id="todoList">{todoList}</div>
    )
  }
}

class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList : props.todoList ? props.todoList : [] 
    }
    this.addTodoHandler = this.addTodoHandler.bind(this)
    this.deleteTodoHandler = this.deleteTodoHandler.bind(this)
  }

  addTodoHandler(newTodo) { 
    const todoList = [...this.state.todoList ]
    todoList.push({task: newTodo})
    this.setState({todoList: todoList})

  }
  deleteTodoHandler(index) {
    const todoList = Object.assign([], this.state.todoList)
    todoList.splice(index,1);
    this.setState({ todoList: todoList})
  }
  render() {
    return (
      <div>
        <h1>Todo List (ReactJS)</h1>
        <TodoAdder addTodoHandler={this.addTodoHandler} />
        <TodoList deleteHandler={this.deleteTodoHandler} todoList={this.state.todoList} />
      </div>
    );
  }
}

export default TodoApp;

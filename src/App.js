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
          <input type='text' id='todo' placeholder="New Todo..." value={this.state.todoValue} onChange={this.onChangeHandler}/>
          <button className='btn btn-default' onClick={this.onClickHandler}><i className="fa fa-plus"></i></button>
        </div>
    )
  }
}
class TodoList extends Component {
  render() { 
    const todoList = this.props.todoList.map((todo, index) => { 
      return <div key={"TODO" + index}>{todo.task} 
            <button onClick={(event) => this.props.deleteHandler(index)}><i className="fa fa-minus" /></button></div>
    })
    return (
	    <div id="todoList">{todoList}</div>
    )
  }
}
class TodoFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterValue: ""
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler(event) {
    this.setState({filterValue: event.target.value})
  }
  render() {
    return <div><input placeholder="Filter..." value={this.state.filterValue} onChange={this.onChangeHandler}/><button onClick={() => {this.props.filterHandler(this.state.filterValue)}}><i className='fa fa-search'></i></button></div>
  }
}

class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList : props.todoList ? props.todoList : [],
      filteredList: props.todoList ? props.todoList : [] 
    }
    this.addTodoHandler = this.addTodoHandler.bind(this)
    this.deleteTodoHandler = this.deleteTodoHandler.bind(this)
    this.filterHandler = this.filterHandler.bind(this)
  }

  addTodoHandler(newTodo) { 
    const todoList = [...this.state.todoList ]
    todoList.push({task: newTodo})
    this.setState({todoList: todoList , filteredList: todoList})
  }
  deleteTodoHandler(index) {
    const todoList = Object.assign([], this.state.todoList)
    todoList.splice(index,1);
    this.setState({ todoList: todoList, filteredList: todoList})
    
  }
  filterHandler(filter) {
    const filteredList = this.state.todoList.filter((todo) => {
      return todo.task.search(filter) > -1 ? true: false
    })
    this.setState({filter: filter, filteredList:filteredList})
  }
  render() {
    return (
      <div>
        <h1>{this.props.title + " (ReactJS)" }</h1>
        <TodoAdder addTodoHandler={this.addTodoHandler} />
        <TodoFilter filterHandler={this.filterHandler}/>
        <TodoList deleteHandler={this.deleteTodoHandler} todoList={this.state.filteredList} />
      </div>
    );
  }
}

export default TodoApp;

import React, { Component } from 'react';
import TodoApp from "./App"

const TodoApps = (props) => { 
    const todoApps = props.listOfTodosList.map((todos, index) => {
     return <TodoApp todoList={todos.todos} title={todos.title} />
    }) 
    return (
        <div>
            {todoApps}
        </div>
    )
}
export default TodoApps
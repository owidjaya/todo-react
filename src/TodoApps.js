import React from 'react';
import TodoApp from "./App"

const TodoApps = (props) => { 
    const todoApps = props.listOfTodosList.map((todos, index) => {
     return <TodoApp key={"todoApp" + index} todoList={todos.todos} title={todos.title} />
    }) 
    return (
        <div>
            {todoApps}
        </div>
    )
}
export default TodoApps
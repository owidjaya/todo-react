import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import TodoApps from './TodoApps';
import registerServiceWorker from './registerServiceWorker';

const data = [
    {
        title: "Title 1",
        todos: [
            {task: "task 1"},
            {task: "task 2"},
            {task: "task 3"},
            {task: "task 4"},
            {task: "task 5"} 
        ]

    },
    {
        title: "Title 2",
        todos: [
            {task: "task 1"},
            {task: "task 2"},
            {task: "task 3"},
            {task: "task 4"},
            {task: "task 5"} 
        ]
    }
]

ReactDOM.render(<TodoApps listOfTodosList={data}></TodoApps>, document.getElementById('root'));

registerServiceWorker();

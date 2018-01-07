import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import TodoApps from './TodoApps';
import registerServiceWorker from './registerServiceWorker';

const data = [
    {
        title: "Home Task",
        todos: [
            {task: "Paint wall"},
            {task: "Fix plumbing"},
            {task: "Clean Garage"},
            {task: "Water Garden"},
            {task: "Rake Leaves"} 
        ]

    },
    {
        title: "Work Todos",
        todos: [
            {task: "Create Presentation"},
            {task: "Finish Story 1234"},
            {task: "Meeting with Team"},
            {task: "Implement bug fix"},
            {task: "Documentation for new feature"} 
        ]
    }
]

ReactDOM.render(<TodoApps listOfTodosList={data}></TodoApps>, document.getElementById('root'));

registerServiceWorker();

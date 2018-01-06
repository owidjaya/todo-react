import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import TodoApp from './App';
import registerServiceWorker from './registerServiceWorker';

const data = [
    {task: "task 1"},
    {task: "task 2"},
    {task: "task 3"},
    {task: "task 4"},
    {task: "task 5"}
]

ReactDOM.render(<TodoApp todoList={data} />, document.getElementById('root'));
registerServiceWorker();

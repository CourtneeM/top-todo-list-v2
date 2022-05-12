import todoList from './components/todos/TodoList';
import displayApp from './components/displayController/displayApp';
import './style/style.scss'


// display
displayApp(todoList);
localStorage.setItem('todoList', JSON.stringify(todoList));
import _ from 'lodash';// eslint-disable-line
import './style.css';
import {
  addTodos, deleteTodos, editTodos, getTodos
} from './ModifyTodos.js';

const listGroup = document.querySelector('.todo-list-group');
const newTask = document.querySelector('.todo-add').querySelector('input');
const submitIcon = document.querySelector('.todo-add').querySelector('i');
newTask.addEventListener('keypress', (event) => addTodos(event));
submitIcon.addEventListener('click', () => addTodos('clicked'));

listGroup.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem === 'delete-icon') deleteTodos(li.id);
});

listGroup.addEventListener('keypress', (event) => {
  const pressedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (pressedItem === 'edit-todo') editTodos({ index: li.id, event });
});

window.addEventListener('load', () => { getTodos(); });

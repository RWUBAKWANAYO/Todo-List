import _ from 'lodash';// eslint-disable-line
import './style.css';
import logo from './assets/images/logo.png';
import {
  addTodos, deleteTodos, editTodos, getTodos,
} from './ModifyTodos.js';
import { changeTodoStatus, removeCompletedTodos } from './TodoStatus.js';
import DateConvention from './DateConvention.js';

const listGroup = document.querySelector('.todo-list-group');
const newTask = document.querySelector('.todo-add').querySelector('input');
const submitIcon = document.querySelector('.todo-add').querySelector('i');

newTask.addEventListener('keypress', (event) => {
  if (newTask.value === '') return;
  if (event.key === 'Enter' || event === 'clicked') {
    addTodos(newTask.value);
  }
});
submitIcon.addEventListener('click', () => {
  if (newTask.value === '') return;
  addTodos(newTask.value);
});

listGroup.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem === 'delete-icon') deleteTodos(li.id);
  if (clickedItem === 'checked-icon') changeTodoStatus({ index: li.id, status: false });
  if (clickedItem === 'unchecked-icon') changeTodoStatus({ index: li.id, status: true });
});

listGroup.addEventListener('keypress', (event) => {
  const pressedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if ((pressedItem === 'edit-todo' || pressedItem === 'decoration') && event.target.value !== '' && event.key === 'Enter') {
    editTodos({ index: li.id, inputValue: event.target.value });
  }
});

const clearCompleted = document.querySelector('.clear-todo');
clearCompleted.addEventListener('click', removeCompletedTodos);

window.addEventListener('load', () => {
  getTodos();
  DateConvention();
  document.getElementById('logo').src = logo;
  document.getElementById('title-bar-logo').href = logo;
});

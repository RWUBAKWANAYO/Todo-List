import { todos, getTodos, updateUI } from './ModifyTodos.js';

const changeTodoStatus = ({ index, status }) => {
  todos[index - 1].completed = status;
  localStorage.setItem('todos', JSON.stringify(todos));
  getTodos();
};
const removeCompletedTodos = () => {
  const uncompletedTodos = todos.filter((element) => element.completed !== true);
  const newTodos = uncompletedTodos.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  localStorage.setItem('todos', JSON.stringify(newTodos));
  updateUI(newTodos);
};

export { changeTodoStatus, removeCompletedTodos };
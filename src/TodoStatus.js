import { todos, updateUI } from './ModifyTodos.js';

const changeTodoStatus = ({ index, status }) => {
  todos[index - 1].completed = status;
  localStorage.setItem('todos', JSON.stringify(todos));
  updateUI();
};
const removeCompletedTodos = () => {
  const newTodos = todos.filter((element) => element.completed !== true)
    .map((element, index) => {
      element.index = index + 1;
      return element;
    });
  localStorage.setItem('todos', JSON.stringify(newTodos));
  updateUI(newTodos);
  return newTodos;
};

export { changeTodoStatus, removeCompletedTodos };
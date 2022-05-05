const testFunc = ((a, b) => a + b);
let todos = JSON.parse(localStorage.getItem('todos')) || []; // eslint-disable-line

const getTodos = () => {
  const listGroup = document.querySelector('.todo-list-group');
  const todoElement = todos.map((item) => `
        <li class="todo-list todo-item" id=${item.index}>
          ${item.completed === true ? `
            <i class="fa-solid fa-check checked-icon"></i>`
    : '<i class="fa-solid fa-square unchecked-icon"></i>'}
          <input type="text" class=${item.completed === true ? 'decoration edit-todo' : ' edit-todo'}  value="${item.description}">
          <span class="edit-focus-element"></span>
          <i class="fa-solid fa-trash-can delete-icon"></i>
          <i class="fa-solid fa-ellipsis-vertical more-icon"></i>
        </li>`).join('');
  listGroup.innerHTML = todoElement;
  return listGroup;
};
const updateUI = (data) => {
  if (data) todos = data;
  getTodos();
};

const addTodos = (newTask) => {
  const newTodo = {
    description: newTask,
    completed: false,
    index: todos.length + 1,
  };
  todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));
  updateUI();
};

const editTodos = ({ index, inputValue }) => {
  todos[index - 1].description = inputValue;
  localStorage.setItem('todos', JSON.stringify(todos));
};

const deleteTodos = (targetIndex) => {
  const newTodos = todos.filter((item) => +item.index !== +targetIndex)
    .map((item, index) => {
      item.index = index + 1;
      return item;
    });
  localStorage.setItem('todos', JSON.stringify(newTodos));
  updateUI(newTodos);
};

export {
  getTodos, addTodos, editTodos, deleteTodos, todos, updateUI, testFunc,
};
let todos = JSON.parse(localStorage.getItem('todos')) || [];// eslint-disable-line

const listGroup = document.querySelector('.todo-list-group');
const newTask = document.querySelector('.todo-add').querySelector('input');
const getTodos = () => {
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
  todos = data;
  getTodos();
};

const addTodos = (event) => {
  if (newTask.value === '') return;
  if (event.key === 'Enter' || event === 'clicked') {
    const newTodo = {
      description: newTask.value,
      completed: false,
      index: todos.length + 1,
    };
    todos = [...todos, newTodo];
    localStorage.setItem('todos', JSON.stringify(todos));
    getTodos();
  }
};

const editTodos = ({ index, event }) => {
  if (event.target.value === '') return;
  if (event.key === 'Enter') {
    todos[index].description = event.target.value;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

const deleteTodos = (targetIndex) => {
  const filterTodo = todos.filter((item) => +item.index !== +targetIndex);
  const newTodos = filterTodo.map((item, index) => ({
    description: item.description,
    completed: item.completed,
    index,
  }));
  localStorage.setItem('todos', JSON.stringify(newTodos));
  todos = newTodos;
  getTodos();
};

export {
  getTodos, addTodos, editTodos, deleteTodos, todos, updateUI,
};

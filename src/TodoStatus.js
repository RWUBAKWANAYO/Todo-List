import { todos,getTodos,updateUI } from "./ModifyTodos.js";

const changeTodoStatus = ({index,status})=>{
  console.log(todos)
  todos[index -1].completed = status;
  localStorage.setItem('todos', JSON.stringify(todos));
  getTodos()
}

export {changeTodoStatus,removeCompletedTodos}
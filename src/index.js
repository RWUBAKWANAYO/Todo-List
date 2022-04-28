import _ from 'lodash';
import './index.css';


const todos = [
  {
    description: "HackerRank challenges",
    completed: false,
    index:1,
  },
  {
    description: "Codechef challenges",
    completed: false,
    index:2,
  },
  {
    description: "Codewars challenges",
    completed: true,
    index:3,
  },
  {
    description: "Toptal challenges",
    completed: false,
    index:4,
  },
]

const getTodos = ()=>{
  const listGroup = document.querySelector(".todo-list-group");
   todos.map(item => {
  const listElement = document.createElement('li');
  listElement.classList = "todo-list todo-item";
  listElement.innerHTML =`
        <button type="button" class=${item.completed === true ? "checked-button" : "unchecked-button"}>
        <i class="fa-solid fa-check"></i></button>
        <input type="text" class=${item.completed === true ? "decoration" : "undecoration"}  value="${item.description}">
        <span class="todo-item-more"><i class="fa-solid fa-ellipsis-vertical"></i></span>
    `
    listGroup.appendChild(listElement)
      console.log(listGroup)
  })
}
window.addEventListener('load',getTodos)

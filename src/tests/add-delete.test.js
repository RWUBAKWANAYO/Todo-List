/**
 * @jest-environment jsdom
 */
import {
  addTodos, deleteTodos, todos,
} from '../ModifyTodos.js';

document.body.innerHTML = '<ul class="todo-list-group"></ul>';

// Tests for Adding item in todo list
describe('By adding item in todos', () => {
  // Arrange
  const items = ['new item 1', 'new item 2', 'new item 3'];
  const message = {
    check: 'check if addTodos is a function',
    test: 'test if new item added',
  };
  const output = {
    completed: false,
    description: 'new item 1',
    index: 1,
  };
  // Act
  items.forEach((item) => addTodos(item));
  // Assert
  test(message.check, () => { expect(typeof addTodos).toBe('function'); });
  test(message.test, () => { expect(todos[0]).toEqual(output); });
});

// Tests for Removing item in todo list
describe('By removing item in todos', () => {
  // Arrange
  const message = {
    check: 'check if removeItem is a function',
    test: 'test if item removed from array',
  };
  // Act
  deleteTodos(todos.length);
  // Assert
  test(message.check, () => { expect(typeof deleteTodos).toBe('function'); });
  test(message.test, () => { expect(todos.length).toBe(2); });
});
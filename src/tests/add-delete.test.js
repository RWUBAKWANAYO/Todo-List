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
  const output = [{
    completed: false,
    description: 'new item 1',
    index: 1,
  },
  {
    completed: false,
    description: 'new item 2',
    index: 2,
  },
  {
    completed: false,
    description: 'new item 3',
    index: 3,
  }];
  // Act
  items.forEach((item) => addTodos(item));
  // Assert
  test(message.check, () => { expect(typeof addTodos).toBe('function'); });
  test(message.test, () => { expect(todos).toEqual(output); });
});
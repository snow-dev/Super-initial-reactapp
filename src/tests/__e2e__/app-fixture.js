import {Selector} from 'testcafe';

class TodoPage {
  constructor() {
    this.input = Selector('.new-todo')
    this.editInput = Selector('.edit')
    this.todoItems = Selector('.todo-list li')
    this.firstTodoItem = Selector('.todo-list li:nth-child(1)')
    this.completedTodos = Selector('.completed')
    this.completeAll = Selector('.toggle-all')
    this.deleteCompleted = Selector('.clear-completed')
    this.showActiveLink = Selector('[href="#/active"]')
    this.showCompletedLink = Selector('[href="#/completed"]')
  }
}

const todoPage = new TodoPage();

fixture('Test TodoMVC App')
  .page('http://todomvc.com/examples/vanillajs/');

test('Create todo', async t => {
  await t
    .typeText(todoPage.input, 'write blog post about JS')
    .pressKey('enter');

  await t
    .expect(todoPage.todoItems.count)
    .eql(1);

  await t
    .expect(todoPage.firstTodoItem.textContent)
    .contains('write blog post about JS');
});
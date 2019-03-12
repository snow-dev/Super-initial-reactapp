import {Selector} from 'testcafe';

class HomeContainer {
  constructor() {
    this.title = Selector('.home-container');
  }
}

const homeContainer = new HomeContainer();

fixture('Test HomeContainer')
  .page('http://localhost:3000/');

test('Show a title', async t => {
  await t
    .expect(homeContainer.title.count)
    .eql(1);

  await t
    .expect(homeContainer.title.textContent)
    .contains('Hola');
});
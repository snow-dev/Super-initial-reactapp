import {Selector} from 'testcafe';

class App {
  constructor() {
    this.header = Selector('.App-header');
  }
}

const app = new App();

fixture('App test')
  .page('https://localhost:3000/');

test('Should have a header', async t => {
  await t
    .expect(app.header.count)
    .eql(1);
});



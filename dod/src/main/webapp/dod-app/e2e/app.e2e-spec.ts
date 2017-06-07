import { DodAppPage } from './app.po';

describe('dod-app App', () => {
  let page: DodAppPage;

  beforeEach(() => {
    page = new DodAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

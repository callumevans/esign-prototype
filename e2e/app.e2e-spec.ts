import { EsignPage } from './app.po';

describe('esign App', () => {
  let page: EsignPage;

  beforeEach(() => {
    page = new EsignPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

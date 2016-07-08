import { BlacktigerUiPage } from './app.po';

describe('blacktiger-ui App', function() {
  let page: BlacktigerUiPage;

  beforeEach(() => {
    page = new BlacktigerUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

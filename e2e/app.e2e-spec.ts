import { ResappPage } from './app.po';

describe('resapp App', () => {
  let page: ResappPage;

  beforeEach(() => {
    page = new ResappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

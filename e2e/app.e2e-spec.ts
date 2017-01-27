import { MicroloanLendersPage } from './app.po';

describe('microloan-lenders App', function() {
  let page: MicroloanLendersPage;

  beforeEach(() => {
    page = new MicroloanLendersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

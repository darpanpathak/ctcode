import { ShoppingcartPage } from './app.po';

describe('shoppingcart App', () => {
  let page: ShoppingcartPage;

  beforeEach(() => {
    page = new ShoppingcartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { ConFusionPage } from './app.po';

describe('confusion App', () => {
  let page: ConFusionPage;

  beforeEach(() => {
    page = new ConFusionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('app-root h1')).toEqual('Ristorante Con Fusion');
  });

  it('should navigate to about us page by clicking on the link', () => {
    page.navigateTo('/');

    let navlink = page.getAllElements('a').get(1);
    navlink.click();

    expect(page.getParagraphText('h3')).toBe('About Us')
  });

});

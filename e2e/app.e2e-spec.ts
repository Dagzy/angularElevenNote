import { ElevenNoteAngularPage } from './app.po';

describe('eleven-note-angular App', () => {
  let page: ElevenNoteAngularPage;

  beforeEach(() => {
    page = new ElevenNoteAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

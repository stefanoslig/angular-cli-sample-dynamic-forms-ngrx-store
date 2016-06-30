import { AngularCliSampleDynamicFormsNgrxStorePage } from './app.po';

describe('angular-cli-sample-dynamic-forms-ngrx-store App', function() {
  let page: AngularCliSampleDynamicFormsNgrxStorePage;

  beforeEach(() => {
    page = new AngularCliSampleDynamicFormsNgrxStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

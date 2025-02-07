import HomePageMethods from '../support/US/US_HomePage';
import '@testing-library/cypress/add-commands';

const pageActions = new HomePageMethods();

describe('HomePage_US', () => {
  beforeEach(() => {
    cy.log('Clearing storage...');
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((window) => {
      window.sessionStorage.clear();
    });
    cy.log('Navigating to the application...'); 
    pageActions.visitPage(); 
  });
  it('Validate logo', () => {
    pageActions.validate_logo();
  });
  it('Validate login button', () => {
    pageActions.validate_login_button();
  });
  it('Validate register button', () => {
    pageActions.validate_register_button();
  });
  it('Validate header', () => {
    pageActions.validate_header();
  });
  it('Validate header categories games ', () => {
    pageActions.validate_header_categories();
  });
  it('Validate user account ', () => {
    pageActions.validate_login_icon();
  });
  it('Validate promotions ', () => {
    pageActions.validate_promotions();
  });
  
  
});




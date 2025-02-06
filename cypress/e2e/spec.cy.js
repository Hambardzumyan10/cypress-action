import HomePageMethods from '../support/FR/FR_HomePage';
import '@testing-library/cypress/add-commands';

const pageActions = new HomePageMethods();

describe('HomePage_FR', () => {
  // beforeEach(() => {
  //   cy.log('Clearing storage...');
  //   cy.clearCookies();
  //   cy.clearLocalStorage();
  //   cy.window().then((window) => {
  //     window.sessionStorage.clear();
  //   });
  //   cy.log('Navigating to the application...'); 
  //   // pageActions.visitPage(); // Ensure this method contains cy.visit('URL')
  // });

    it('opa', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.vbet.am');
    cy.wait(5000);
    cy.get('img[alt="VBEedT"]').should("be.visible");
  });

  it('opa1', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.vbet.am');
    cy.wait(4000);
    cy.get('.sign-in').click();
    cy.get('img[alt="VBEffrerfreffeedT"]').should("be.visible");
  });
 


  // it('Validate "Famille, Vie Sociale ..." section on the top', () => {
  //   pageActions.Validate_femile_on_the_top();
  // });

  // it('Validate logo', () => {
  //   pageActions.validate_logo();
  // });

  // it('Validate header', () => {
  //   pageActions.validate_header();
  // }); 
  // it('Validate login button', () => {
  //   pageActions.validate_login_button();
  // });
  // it('Validate register button', () => {
  //   pageActions.validate_register_button();
  // });
  
  // it('Validate Login and check user avatar icon', () => {
  //   pageActions.validate_login_icon();
  // });
  // it('Validate my bets section', () => {
  //   pageActions.validate_my_bets();
  // });
  // it('Validate my profile icon', () => {
  //   pageActions.validate_my_profile();
  // });
  // it('Validate promotions banners', () => {
  //   pageActions.validate_promotions();
  // });
  // // it('Validate footer partners links', () => {
  // //   pageActions.validate_partners();
  // // });
  // it('Validate  social accounts on the footer', () => {
  //   pageActions.validate_social();
  // });

  // it('Validate About section on the footer', () => {
  //   pageActions.about_section();
  // });
  // it('Validate LEGAL NOTICES AND REGULATIONS section on the footer', () => {
  //   pageActions.legal_section();
  // });
  // it('Validate Products on the footer', () => {
  //   pageActions.products_section();
  // });
  // it('Validate betting on sport on the footer', () => {
  //   pageActions.betting_on_sport_section();
  // });
  // it('Validate Payment on the footer', () => {
  //   pageActions.payment_footer();
  // });
  //   it('Validate Phone number on the footer', () => {
  //   pageActions.phone_number();
  // });
});

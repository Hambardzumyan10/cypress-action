export default class FR_HomePage {
    visitPage() {
      cy.viewport(1920, 1080);
      cy.visit('https://www.vbet.am');
      cy.wait(2000);
      cy.url().then((url) => {
        cy.log(`The skin is opened: ${url}`);
        cy.addContext(`The skin is opened: ${url}`);
      });
      cy.log('HomePage is displayed');
      cy.addContext('HomePage is displayed');
    }
  
    Validate_femile_on_the_top() {
      this.accept_cookie();
        cy.get('#m2797 > .full-width > .image-module-link > .animated > :nth-child(1) > :nth-child(1) > .fixed-ratio > .image').should('be.visible');
        cy.addContext('The skin  opened and the "Famille, Vie Sociale ..." section  displayed on the top');
        cy.get('#m2797 > .full-width > .image-module-link > .animated > :nth-child(1) > :nth-child(1) > .fixed-ratio > .image').click();
    }
  
    validate_logo() {
      this.accept_cookie();
      cy.addContext('trying click VBET logo');
      cy.get('img[alt="VBET"]').should("be.visible");
      cy.addContext('VBET logo worked ');
    }
    validate_header() {
      this.accept_cookie();
      cy.addContext('trying click VBET logo');
      cy.get('img[alt="VBET"]').should("be.visible");
      cy.addContext('VBET logo worked ');
    }
    validate_login_button() {
      this.accept_cookie();
      cy.addContext('trying check login visibility');
      cy.get('.v3-btn-text').should("be.visible");
      cy.addContext('login button active ');
    }
    validate_register_button() {
      this.accept_cookie();
      cy.addContext('trying check register visibility');
      cy.get('.v3-register-btn').should("be.visible");
      cy.addContext('register button active ');
    }
    validate_header() {
      this.accept_cookie(); 
      cy.addContext('validating header texts');
      cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > header:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > nav:nth-child(2) > ul:nth-child(1)> li').each(($li, index) => {
        cy.wrap($li)
          .should('be.visible') 
          .find('a') 
          .invoke('text') 
          .then((text) => {
            const trimmedText = text.trim(); 
            cy.addContext(`Link ${index + 1}: ${trimmedText} is displayed`);
          });
      });
    }
    validate_login_icon(){
      this.accept_cookie();
      cy.addContext('trying sign in ');
      cy.get('.v3-btn-text').click();
      cy.addContext('typing login password ');
      cy.get('#username').type('Testik1000');
      cy.get('#password').type('Testik1000.');
      cy.get('.v3-btn-lg').click();
      cy.get('.profileInfo__circleButton__icon', { timeout: 10000 }).should('be.visible');
            cy.addContext('User account is displayed');
    }
    validate_my_bets(){
      this.accept_cookie();
      cy.addContext('trying sign in ');
      cy.get('.v3-btn-text').click();
      cy.addContext('typing login password ');
      cy.get('#username').type('Testik1000');
      cy.get('#password').type('Testik1000.');
      cy.get('.v3-btn-lg').click();
      cy.get('.profileInfo__circleButton__icon', { timeout: 10000 }).should('be.visible');
            cy.addContext('User account is displayed');
      cy.get('.profileInfo__circleButton__icon').click();
      cy.get('.accountModal__header__title').should('be.visible');
      cy.addContext('my bets section is displayed');
    }
    validate_my_profile(){
      this.accept_cookie();
      cy.addContext('trying sign in ');
      cy.get('.v3-btn-text').click();
      cy.addContext('typing login password ');
      cy.get('#username').type('Testik1000');
      cy.get('#password').type('Testik1000.');
      cy.get('.v3-btn-lg').click();
      cy.get('.profileInfo__circleButton__icon', { timeout: 10000 }).should('be.visible');
            cy.addContext('User account is displayed');
      cy.get('.profileInfo__circleButton__icon').click();
      cy.get('.accountModal__header__title').should('be.visible');
      cy.addContext('my profile section is displayed');
    }

    validate_promotions() {
      this.accept_cookie();
      cy.addContext('click promotion link on the header');
      cy.get('a[href="https://www.vbet.fr/promotions"]').first().click();
      cy.scrollTo(0, 200);
      cy.get('#2228 > div').each(($li, index) => {
        cy.wrap($li)
          .should('be.visible')
          .find('div > div > div > div:nth-child(2) > div > a')
          .invoke('attr', 'href')
          .then((hreftext) => {
            const lastSegment = hreftext.split('/').filter(Boolean).pop();  
            cy.wrap($li)  
              .find('img') 
              .invoke('attr', 'alt') 
              .then((text) => {
                const trimmedText = text ? text.trim() : ''; 
                if (!trimmedText.includes('disabled')) {
                  cy.addContext(`Link -- PROMO ${index + 1}: ${lastSegment} is displayed`);
                }
              });
          });
      });
    }
    validate_partners(){
      this.accept_cookie();
      cy.get('.gallery-img-container').each(($partnerdiv,index) => {
      cy.wrap($partnerdiv)
      .should('be.visible')
      .find('a')
      .invoke('attr','href')
      .then((text) =>{
        const href_link_text=text;
        cy.addContext(`Link -- Partners ${index+1}:${href_link_text} is working`);
      });
      });
    }
    validate_social(){
      this.accept_cookie();
      cy.get('.main-font-typography').each(($partnerdiv,index) => {
      cy.wrap($partnerdiv)
      .should('be.visible')
      .find('a')
      .invoke('attr','aria-label')
      .then((text) =>{
        const href_link_text=text;
        cy.addContext(`Link -- social ${index+1}:${href_link_text} is working`);
      });
      });
    }
    about_section(){
      this.accept_cookie();
      cy.get('#navigation-3668>nav>ul>li').each(($about_li,index) =>{
        cy.wrap($about_li).should('be.visible')
        .find('a')
        .invoke('attr','href')
        .then((text) =>{
          const about_text=text;
          cy.addContext(`About section -- ${index+1}:${about_text} is working`);
        });
      });
    }
    legal_section(){
      this.accept_cookie();
      cy.get('#navigation-3669>nav>ul>li').each(($about_li,index) =>{
        cy.wrap($about_li).should('be.visible')
        .find('a')
        .invoke('attr','href')
        .then((text) =>{
          const about_text=text;
          cy.addContext(`LEGAL NOTICES AND REGULATIONS section -- ${index+1}:${about_text} is working`);
        });
      });
    }
    products_section(){
      this.accept_cookie();
      cy.get('#navigation-3670>nav>ul>li').each(($about_li,index) =>{
        cy.wrap($about_li).should('be.visible')
        .find('a')
        .invoke('attr','href')
        .then((text) =>{
          const about_text=text;
          cy.addContext(`Products section -- ${index+1}:${about_text} is working`);
        });
      });
    }
    betting_on_sport_section(){
      this.accept_cookie();
      cy.get('#navigation-3671>nav>ul>li').each(($about_li,index) =>{
        cy.wrap($about_li).should('be.visible')
        .find('a')
        .invoke('attr','href')
        .then((text) =>{
          const about_text=text;
          cy.addContext(`betting on sports section -- ${index+1}:${about_text} is working`);
        });
      });
    }
    payment_footer(){
      this.accept_cookie();
      cy.get("div.animated-6480 div.fixed-ratio>img").invoke('attr',"src")
      .then((text) =>{
        const real_text= 'on the futter Payment methods displayed by img ';
        cy.addContext(` -- ${real_text}:${text} `);

      });
    }
    phone_number(){
      this.accept_cookie();
      cy.get('#m6547>div>div>a').should('be.visible').invoke('attr','href').then((text) =>{
      cy.addContext(`phone number is displayed and worked -- ${text}`);
      });
    }
   
    accept_cookie(){
      cy.addContext('click accept all cookies');
      cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
      cy.addContext('clicked all cookies button');
      cy.wait(1000);
    }
  }
  
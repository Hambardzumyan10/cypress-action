export default class US_HomePage {
    visitPage() {
      cy.viewport(1280, 720);
      cy.visit('https://www.vivaro.us/en-us/casino');
      cy.wait(3000);
      cy.url().then((url) => {
        cy.log(`The skin is opened: ${url}`);
        cy.addContext(`The skin is opened: ${url}`);
      });
      cy.log('HomePage is displayed');
      cy.addContext('HomePage is displayed');
    }
    validate_logo() {
      cy.addContext('trying click VBET logo');
      cy.get('.Header-logoStyles>img').should("be.visible");
      cy.addContext('VBET logo worked ');
    }
    validate_login_button() {
      cy.addContext('trying check login visibility');
      cy.get('button[data-testid="sign_in_button"]').should("be.visible");
      cy.addContext('login button active ');
    }
    validate_register_button() {
      cy.addContext('trying check register visibility');
      cy.get('button[data-testid="sign_up_button"]').should("be.visible");
      cy.addContext('register button active ');
    }
    validate_header() {
      cy.addContext('validating header texts');
      cy.get('.singleCasinoCategoryItem').each(($li, index) => {
        cy.wrap($li)
          .should('be.visible') 
          .find('p') 
          .invoke('text') 
          .then((text) => {
            const trimmedText = text.trim(); 
            cy.addContext(`Link ${index + 1}: ${trimmedText} is displayed`);
          });
      });
    }
    validate_login_icon(){
      cy.addContext('trying sign in ');
      cy.get('button[data-testid="sign_in_button"]').click();
      cy.addContext('typing login password ');
      cy.get('#username').type('Mers06933');
      cy.get('#password').type('Test123456!');
      cy.get('button[data-testid="verify_button"]').click();
      cy.get('.Avatar-singleAvatarStyles', { timeout: 50000 }) 
      .should('be.visible') 
      .click({ force: true }); 
    
            cy.addContext('User account is displayed');
            cy.get('.firstAndLastName')
            .invoke('text')
            .then((user_account) => {
              cy.get('.Copy-Text-copyTextStyles')
                .invoke('text')
                .then((user_id) => {
                  cy.addContext(`${user_account.trim()} account is displayed and ID is ${user_id.trim()}`);
                });
            });
    }
    validate_header_categories() {
      cy.addContext('validating header categories');
      cy.get('.singleCasinoCategoryItem').each(($li, index) => {
        cy.wrap($li)
          .should('be.visible')
          .click()
          .then(() => {
            cy.get('.Scrollable-singleItemStyles').first().should('be.visible');
            cy.get('.singleCasinoCategoryItem.selected>p')
              .invoke('text')
              .then((text) => {
                const trimmedText = text.trim();
                cy.addContext(`${trimmedText} category's games are displayed`);
              });
          });
      });
    }

    validate_promotions() {
      cy.addContext('checking promotion popups');
  
      cy.get('a[href="/en-us/promotions"]').first().click();
      cy.scrollTo(0, 200);
    cy.wait(2500);
      cy.get('.singleItem').each(($li, index) => {
        cy.wrap($li)
          .should('be.visible')
          .find('img')
          .invoke('attr', 'alt') 
          .then(($img) => {
            cy.addContext(`PROMO ${index + 1}: ${$img} is displayed`);
          });
      });
    }
    
    // validate_promotions() {
    //   cy.addContext('Clicking promotion link on the header');
    
    //   cy.get('a[href="/en-us/promotions"]').first().click();
    //   cy.scrollTo(0, 200);
    
    //   cy.get('.singleItem').each((_, index) => {
    //     // Re-query the element to avoid stale references
    //     cy.get('.singleItem').eq(index).should('be.visible').within(() => {
    //       cy.get('img')
    //         .should('have.attr', 'alt') // Ensure `alt` exists
    //         .then(($img) => {
    //           const altText = $img.attr('alt').trim(); // Extract and trim `alt` text
    //           cy.addContext(`PROMO ${index + 1}: ${altText} is displayed`);
    //         });
    //     });
    //   });
    // }
    
    

    // // validate_my_profile(){
    // //   this.accept_cookie();
    // //   cy.addContext('trying sign in ');
    // //   cy.get('.v3-btn-text').click();
    // //   cy.addContext('typing login password ');
    // //   cy.get('#username').type('Testik1000');
    // //   cy.get('#password').type('Testik1000.');
    // //   cy.get('.v3-btn-lg').click();
    // //   cy.get('.profileInfo__circleButton__icon', { timeout: 10000 }).should('be.visible');
    // //         cy.addContext('User account is displayed');
    // //   cy.get('.profileInfo__circleButton__icon').click();
    // //   cy.get('.accountModal__header__title').should('be.visible');
    // //   cy.addContext('my profile section is displayed');
    // // }


    // // validate_partners(){
    // //   this.accept_cookie();
    // //   cy.get('.gallery-img-container').each(($partnerdiv,index) => {
    // //   cy.wrap($partnerdiv)
    // //   .should('be.visible')
    // //   .find('a')
    // //   .invoke('attr','href')
    // //   .then((text) =>{
    // //     const href_link_text=text;
    // //     cy.addContext(`Link -- Partners ${index+1}:${href_link_text} is working`);
    // //   });
    // //   });
    // // }
    // // validate_social(){
    // //   this.accept_cookie();
    // //   cy.get('.main-font-typography').each(($partnerdiv,index) => {
    // //   cy.wrap($partnerdiv)
    // //   .should('be.visible')
    // //   .find('a')
    // //   .invoke('attr','aria-label')
    // //   .then((text) =>{
    // //     const href_link_text=text;
    // //     cy.addContext(`Link -- social ${index+1}:${href_link_text} is working`);
    // //   });
    // //   });
    // // }
    // // about_section(){
    // //   this.accept_cookie();
    // //   cy.get('#navigation-3668>nav>ul>li').each(($about_li,index) =>{
    // //     cy.wrap($about_li).should('be.visible')
    // //     .find('a')
    // //     .invoke('attr','href')
    // //     .then((text) =>{
    // //       const about_text=text;
    // //       cy.addContext(`About section -- ${index+1}:${about_text} is working`);
    // //     });
    // //   });
    // // }
    // // legal_section(){
    // //   this.accept_cookie();
    // //   cy.get('#navigation-3669>nav>ul>li').each(($about_li,index) =>{
    // //     cy.wrap($about_li).should('be.visible')
    // //     .find('a')
    // //     .invoke('attr','href')
    // //     .then((text) =>{
    // //       const about_text=text;
    // //       cy.addContext(`LEGAL NOTICES AND REGULATIONS section -- ${index+1}:${about_text} is working`);
    // //     });
    // //   });
    // // }
    // // products_section(){
    // //   this.accept_cookie();
    // //   cy.get('#navigation-3670>nav>ul>li').each(($about_li,index) =>{
    // //     cy.wrap($about_li).should('be.visible')
    // //     .find('a')
    // //     .invoke('attr','href')
    // //     .then((text) =>{
    // //       const about_text=text;
    // //       cy.addContext(`Products section -- ${index+1}:${about_text} is working`);
    // //     });
    // //   });
    // // }
    // // betting_on_sport_section(){
    // //   this.accept_cookie();
    // //   cy.get('#navigation-3671>nav>ul>li').each(($about_li,index) =>{
    // //     cy.wrap($about_li).should('be.visible')
    // //     .find('a')
    // //     .invoke('attr','href')
    // //     .then((text) =>{
    // //       const about_text=text;
    // //       cy.addContext(`betting on sports section -- ${index+1}:${about_text} is working`);
    // //     });
    // //   });
    // // }
    // // payment_footer(){
    // //   this.accept_cookie();
    // //   cy.get("div.animated-6480 div.fixed-ratio>img").invoke('attr',"src")
    // //   .then((text) =>{
    // //     const real_text= 'on the futter Payment methods displayed by img ';
    // //     cy.addContext(` -- ${real_text}:${text} `);

    // //   });
    // // }
    // // phone_number(){
    // //   this.accept_cookie();
    // //   cy.get('#m6547>div>div>a').should('be.visible').invoke('attr','href').then((text) =>{
    // //   cy.addContext(`phone number is displayed and worked -- ${text}`);
    // //   });
    // // }
   
    // // accept_cookie(){
    // //   cy.addContext('click accept all cookies');
    // //   cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    // //   cy.addContext('clicked all cookies button');
    // //   cy.wait(1000);
    // // }
  }
  
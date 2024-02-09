import 'cypress-xpath'
class HomePage {
    getHomePageElements() {
        return require('../Locators/homepage')
    }

    launchWebsite() {
        cy.visit(Cypress.env("baseurl-movieReviews"));
        return this;
    }
 
    clickSearchBtn() {
        cy.xpath(this.getHomePageElements().SEARCH_BTN).click();
        return this;
    }
    
  clickAddMovieBtn(){
        cy.xpath(this.getHomePageElements().ADDMOVIE_BTN).click();
        return this;
    }

    verifyTitle(){
        cy.title().should('include','Movie Reviews');
    }
}

module.exports = HomePage;
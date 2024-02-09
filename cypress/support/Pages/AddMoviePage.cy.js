import 'cypress-xpath'


const verify= require("../../fixtures/testdata.json");
class AddMoviePage {
    getAddMoviePageElements() {
        return require('../Locators/addmovie')
    }
    clickCreateMovieBtn() {
        cy.xpath(this.getAddMoviePageElements().create).click();
        return this;
    }
    enterName() {
        
        cy.xpath(this.getAddMoviePageElements().Name).type(verify.validmoviename);
    };
    enterDate() {
        cy.fixture('testdata.json').then((td) => {
            cy.xpath(this.getAddMoviePageElements().date).type(verify.validdate);
                
        });
    }
        
    
    clickSaveBtn() {
        cy.xpath(this.getAddMoviePageElements().SAVE_BTN).click();
        return this;
    }
    verifyMovieName() {
        const moviename= verify.validmoviename;
        // cy.wait(5000);
        cy.reload();
        cy.contains('h1', 'Anand').eq(0) .waitForVisible().should('have.text',moviename);
    }
}

module.exports = AddMoviePage;
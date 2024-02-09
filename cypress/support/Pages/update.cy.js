
const verify= require("../../fixtures/testdata.json");
class UpdatePage {
    getSearchPageElements() {
        return require('../Locators/searchpage')
    }
    clickOnEdit(){
        // cy.get(this.getUpdatePageElements().edit).click();
        cy.get('h1').contains('Anand').parent('header').parent('article').parent('a').next('div').find('button').first().click();
         return this;
    }
    enterUpdateName(){
        cy.get('input#name').clear().type(verify.updatedmovie);
        }

        clickUpdateMoiveButton(){
            cy.get('h4').contains('Update Movie').parent('button').click();
        }
        verifyUpdatedMovie(){
            cy.wait(5000);
            cy.xpath(this.getSearchPageElements().SEARCH_BOX).type(verify.updatedmovie);
            const moviename= verify.updatedmovie;

            cy.contains('h1', moviename).eq(0) .waitForVisible().should('have.text',moviename);
        }


    
}

module.exports = UpdatePage;
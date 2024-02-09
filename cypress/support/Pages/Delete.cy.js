import 'cypress-xpath'
const verify= require("../../fixtures/testdata.json");
class DeletePage {


    clickOnDelete(){
        // cy.get(this.getUpdatePageElements().edit).click();
        cy.get('h1').contains('Anand').parent('header').parent('article').parent('a').next('div').find('button').next('button').click();
         return this;
    }

}

module.exports = DeletePage;
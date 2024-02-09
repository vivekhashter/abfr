
const verify= require("../../fixtures/testdata.json");
class SearchPage {
    getSearchPageElements() {
        return require('../Locators/searchpage')
    }
    enterSearch(){
        cy.xpath(this.getSearchPageElements().SEARCH_BOX).type(verify.validmoviename);
        return this;
    }

    verifyExactSearch() {
        const moviename= verify.validmoviename;
        cy.contains('h1', moviename).eq(0) .waitForVisible().should('have.text',moviename);
    }
}

module.exports = SearchPage;
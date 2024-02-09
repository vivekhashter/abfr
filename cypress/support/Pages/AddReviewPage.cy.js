import 'cypress-xpath'
const verify= require("../../fixtures/testdata.json");
class AddReviewPage {
    getAddReviewElements() {
        return require('../Locators/addreview')
    }

   clickAddBtn() {
        cy.xpath(this. getAddReviewElements().ADD_BTN).click();
        return this;
    }
   selectMovieName() {
        cy.xpath(this. getAddReviewElements().DROP_DOWN).select(verify.validmoviename);
};
enterName() {
        cy.get(this. getAddReviewElements().Name).type(verify.name);
};
enterRating() {
    cy.get(this. getAddReviewElements().Rating).click();  
    const temp = cy.get(this. getAddReviewElements().Rating);
const array = Array.from({ length: 8 }, (_, index) => index + 2);
cy.wrap(array).each((_, index) => {
    temp.type('{uparrow}');
    cy.wait(1000);

});
cy.wait(5000);
return this;
}
enterComment() {
        
  cy.xpath(this. getAddReviewElements().Comments).click().type(verify.comment);
  return this;
};
clickCreateBtn() {
    cy.get(this. getAddReviewElements().CREATE).click();
    return this;
}






}

module.exports = AddReviewPage;
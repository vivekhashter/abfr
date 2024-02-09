import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/Pages/Homepage.cy";
import AddReviewPage from "../../../support/Pages/AddReviewPage.cy";
import { fixCypressSpec } from "../../../support/e2e.js";

const addreview = new AddReviewPage();
const homepage = new HomePage();

beforeEach(fixCypressSpec(__filename));


When("user clicks on add review button", () => {
  addreview.clickAddBtn();
});

When("user selects the movie from drop down list", () => {
  addreview.selectMovieName();
});
When("user enters the name", () => {
  addreview.enterName();
});
When("user gives rating for the movie", () => {
  addreview.enterRating();
});
When("user adds review comments", () => {
  addreview.enterComment();
});
When("user clicks on create review button", () => {
  addreview.clickCreateBtn();
});
Then("user can see applicant details in employee list", () => {
  addreview.clickEmplist();
  addreview.verifyemployeelist();
});

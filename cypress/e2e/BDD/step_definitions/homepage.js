import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/Pages/Homepage.cy";
import { fixCypressSpec } from "../../../support/e2e.js";
import { it } from "mocha";


const homepage = new HomePage();

beforeEach(fixCypressSpec(__filename));

Given("user open the browser", () => {
  
});

When("user launches the movie critic website", () => {
  homepage.launchWebsite();
});
Then("user landed on movie reviews website", () => {
  homepage.verifyTitle();
});




import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/Pages/Homepage.cy";
import DeletePage from "../../../support/Pages/Delete.cy";
import { fixCypressSpec } from '../../../support/e2e.js';



const deletepage = new DeletePage();


beforeEach(fixCypressSpec(__filename));

When('user click on delete button', () => {
    deletepage.clickOnDelete();
});


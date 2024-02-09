import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/Pages/Homepage.cy";
import { fixCypressSpec } from '../../../support/e2e.js';
import SearchPage from "../../../support/Pages/SearchPage.cy";
import UpdatePage from "../../../support/Pages/update.cy";


const updatepage = new UpdatePage();
 
beforeEach(fixCypressSpec(__filename));


When('user click on edit button', () => {
    updatepage.clickOnEdit();
    
});
When('user update the movie name', () => {
    updatepage.enterUpdateName();
    
});
When('user click on update movie', () => {
    updatepage.clickUpdateMoiveButton();
    
});
Then('user should be able to see updated movie name', () => {
    updatepage.verifyUpdatedMovie();
    
});




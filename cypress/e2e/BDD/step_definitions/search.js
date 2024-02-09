import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/Pages/Homepage.cy";
import { fixCypressSpec } from '../../../support/e2e.js';
import SearchPage from "../../../support/Pages/SearchPage.cy";


const searchpage = new SearchPage();
 
beforeEach(fixCypressSpec(__filename));


When('user enters search in search box', () => {
    searchpage.enterSearch();
    
});


Then('user verify exact search in homepage',()=>{
    searchpage.verifyExactSearch();
});


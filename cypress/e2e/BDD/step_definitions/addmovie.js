import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/Pages/Homepage.cy";
import AddMoviePage from "../../../support/Pages/AddMoviePage.cy";
import { fixCypressSpec } from '../../../support/e2e.js';

const homepage = new HomePage();
const addmovie= new AddMoviePage();

beforeEach(fixCypressSpec(__filename));

When('user clicks on add movie button', () => {
    homepage.clickAddMovieBtn();
});
When('user enters name in Name box', () => {
 addmovie.enterName();
});
When('user enters date in date picker', () => {
  addmovie.enterDate();
});
When('user clicks on create movie button', () => {
  addmovie.clickCreateMovieBtn();
});
When('user should be able to see the title movie on webpage', () => {
  addmovie.verifyMovieName() ;
});

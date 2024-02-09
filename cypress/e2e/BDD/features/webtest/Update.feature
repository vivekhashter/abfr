Feature: Movie Critics Homepage 
    
    @functionality
    Scenario: Verify if user is able land on movie critics homepage
        Given user launches the movie critic website
       When user enters search in search box
       When user click on edit button 
       When user update the movie name
       When user click on update movie
       Then user should be able to see updated movie name
       
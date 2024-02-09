Feature: movie reviews.com add movie  feature

@functionality
Scenario Outline: User is able to test add movie functionality
    Given user launches the movie critic website
    When user clicks on add movie button
    When user enters name in Name box
    When user enters date in date picker
    When user clicks on create movie button
    Then user should be able to see the title movie on webpage 

    

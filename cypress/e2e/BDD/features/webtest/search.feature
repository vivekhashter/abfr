Feature: Openhrm.com search feature

  @search
  Scenario: User is able to search for movie reviews
    Given user launches the movie critic website
    When user clicks on add movie button
    When user enters name in Name box
    When user enters date in date picker
    When user clicks on create movie button   
    When user enters search in search box
    Then user verify exact search in homepage


Feature: Login Functionalty

  Scenario: To verify the login credintials
    Given the user is on the web page
    When the user clicks on the login or Register button
    Then an template is displayed
    Then the user enters valid username
    And also the user enters invalid password
    Then user clicks on the Signin button

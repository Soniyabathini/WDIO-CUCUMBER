Feature: Genie Website User Management Functionality

  @geniewebpage
  Scenario: As a user, need to click on Sign in button
    Given the user is on the genie webpage
    And the user enters username
      | genieadmin |
    And also enters the password
      | Dallas!@#$ |
    When the user clicks on Sign in button
    Then the user is navigated to the webpage

  @verifyadministration
  Scenario: To verify the administration element
    When the user clikcs on administration
    Then the user selects required one

  @tocreatenewuser
  Scenario: To create a new user
    When the user clicks on create a new user
    Then the required page is opened

  @verifyusername/emailfield
  Scenario: To Verify Username or Email field
    Given user clicks on Username or email input field and enters no data and clicks on Firstname
    Then the user is able to see an error message as This field is required.
    And the user enters invalid UsenameorEmail
      | abc@ |
    Then a flash error message is seen as Please enter a valid email address of the format aaa@bbb.ccc
    When the user enters maximum length of an email
      | abcd@kjhgfdsxcvbnjkfgdxcvbnjhgfdxcv bnmjhgfcv bnm,jkhgfcvbnmjkhgfdxcvbnmkjhgfdxcvbnmkjhgfdxhhhhhhhhhhhh |
    Then an error message is seen as This field cannot be longer than 100 characters.
    Then the user enters a valid UsenameorEmail
      | xyz@gmail.com |

  @verifyfirstnameandlastname
  Scenario: To verify the firstname and lastname
    When user enters above fifty characters into the input field
      | asdfghjkjmhnb vcdsxderftgyhujhgbfvdsawedrtyuikjhgfdsaq23145 |
    Then an error messageis displayed as This field cannot be longer than 50 characters.
    Then user enters valid Firstname
      | abc |
    When user clicks on last name and enters more than fifty characters
      | lkjhgfdsaszxcvbnmkloiuytre234567890pokjhgtresxcvbnmlo98 |
    Then a flash message is seen as This field cannot be longer than 50 characters.
    Then the user enters valid Lastname
      | defgh |

  @verifyprofiles
  Scenario: To verify the profile field
    Then user selects required one
    When the user clicks on save button
    Then an error message is displayed as Email is already in use
    Then user enters another email
      | pqrs@gmail.com |
    When user clicks on save button
    Then verify the page

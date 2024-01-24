Feature: Genie Website Registration Functionality

  @genieregistrationwebpage
  Scenario: As a user,need to click on register for a new account
    Given the user is on genie webpage 
    When user clicks on register a new account
    Then user is on CaregiverRegistration page

  @verifyinvalidemailfield
  Scenario: To verify the email field
    Given the user enters invalid email
      | sony@ | 
    Then the user gets a message as Please enter a valid email address of the format aaa@bbb.ccc
    # Then the user verify a message as "Your email is invalid."
    # Then the user verify a error message as "Your email is required to be at least 5 characters."
    # Then the user verify a error message as "Your email cannot be longer than 100 characters."
     
  @validemail
  Scenario: To verify valid email
    Given the user enters valid email
      | bathinisoniya@gmail.com |

  @phonenumberfield
  Scenario: To verify valid and invalid phonenumber
    Given the user clicks on phonenumber field
    Then the user enters invalid phonenumber
      | 949022030 |
    Then clicks on password field 
    When the user enters invalid number and clicks on another field a message is displayed as Acceptable Phone Number Format is XXX-XXX-XXXX where X is a Numeric Digit. The dashes at 4th and 8th positions are both optional.
    Then the user enters valid phonenumber
      | 9490220301 |
    Then a flash message is shown on the password field

  @passwordfield
  Scenario: To verify the passwordfield
    Given the user enters password and
      | Soniyabathini@15 |
    Then the user enters wrong password
      | Sony |
    Then a flash message is shown as The password and its confirmation do not match!
    Then the user enters the correct password
      | Soniyabathini@15 |

  @firstnameandlastname
  Scenario: verify the names
    Given the user enters firstname
      | Soniya |
    Then the user enters lastname
      | Bathini |

  @datepicker
  Scenario: User selects a date using the date icon trigger
    Given the user clicks on the date icon trigger
    Then selects a date from the date picker

  @selectingprofessionandspecialty
  Scenario: User selects suitable profession from the drop down
    Given the user clicks on profession field and selects required one
    When the user selects a Profession  and accordingly selects the specialty
    Then the user selects another profession and then selects specialty accordingly
    When user selects more specialties then a flash error message is seen

  @Recruiterinputfield
  Scenario: User selects Preferred Recruiter
    Given user clicks on recruiter field
    Then the user selects the required recruiter
    
    

  
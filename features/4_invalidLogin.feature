@invalidLogin
Feature: Verify invalid login functionality

  Scenario: Attempt to login with invalid credentials
    Given I am on the login page
    When I enter invalid username and password
    And I click the login button
    Then I should see an error message indicating invalid credentials
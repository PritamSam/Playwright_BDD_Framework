@sideMenu
Feature:Verify Side Menu Bar

  Scenario: Open the side menu
    Given I am on the homepage of application
    When I click on the menu icon
    Then the side menu should be visible
    When I click on Filter
    Then I should see the filter options
    
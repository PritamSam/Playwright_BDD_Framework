@checkout
Feature: Verify the checkout process

  Scenario: Successful checkout
    Given I am on the homepage
    When I add a product to the cart
    And I proceed to checkout
    Then I should see the order confirmation page
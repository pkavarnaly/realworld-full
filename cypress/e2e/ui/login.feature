@smoke @ui
Feature: Login

  @smoke
  Scenario: Successful login
    Given I open the login page
    When I fill in email with "test@example.com"
    And I fill in password with "password123"
    And I click the login button
#    Then I should see "Your Feed"
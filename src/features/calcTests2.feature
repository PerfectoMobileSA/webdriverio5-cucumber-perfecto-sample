@calc2
Feature: Simple Feature

  @calcSimpleTest2
  Scenario: calc simple test 2
    Given I start application by name "Calculator"
    When I add "02" to "05"
    Then the result should be "7"


@calc
Feature: Simple Feature

  @calcSimpleTest @justCalc
  Scenario: calc simple test
    Given I start application by name "Calculator"
    When I add "3" to "5"
    Then the result should be "8"

  @calcSimpleTest2
  Scenario: calc simple test 2
    Given I start application by name "Calculator"
    When I add "02" to "05"
    Then the result should be "7"

 # @calcSimpleTestNeg
  #Scenario: calc simple test negative
  #  Given I start application by name "Calculator"
  #  When I add "03" to "05"
  #  Then the result should be "9"

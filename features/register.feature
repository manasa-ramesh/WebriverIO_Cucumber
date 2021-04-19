Feature: To test the regietr functionality in 'My Sore Site'

    Scenario: Load the url and verify the signIn button
        Given I open the MyStore site
        Then I expect that the signIn button does exist

    Scenario: User registers as new customer
         Given The user clicks on signIn button
         When User enters the email address
         Then The user click on CreateAccount button 

    Scenario: User provides the personal informaation
        Given The user lands on Create Account page
        Then The user entres the personal information
        Then The user click on Register button

    Scenario: User selects the product and adds to cart
        Given The user selects the product and adds to cart
     
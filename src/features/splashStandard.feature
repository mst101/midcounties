Feature: Standard splash screens
    As a user
    I want to see some standard splash screens
    So that I can be updated about any news

    Scenario: Splash screens are viewed only once
        Given the following splash screens:
            | id | type     | heading                  | description                                                                                             |
            | 0  | standard | A fresh new look         | Welcome to the new look Your Co-op members app                                                          |
            | 1  | standard | Members save more        | There are far more member exclusive offers across our businesses                                        |
            | 2  | standard | Your points have changed | Your first 1,000 points will be allocated to our new Share of the Profits Community Fund                |
            | 3  | standard | Doing good together      | Keep track of how many points you have donated to our community fund and how many you have for yourself |
        When  I log in
        Then  I expect to see the standard splash screens
        When  I log out and log in again
        Then  I expect NOT to see the standard splash screens
        # When  I close and re-open the app
        # Then  I expect NOT to see the standard splash screens

    @restartApp
    Scenario: Skipped splash screens are not shown again
        Given the following splash screens:
            | id | type     | heading                  | description                                                                                             |
            | 0  | standard | A fresh new look         | Welcome to the new look Your Co-op members app                                                          |
            | 1  | standard | Members save more        | There are far more member exclusive offers across our businesses                                        |
            | 2  | standard | Your points have changed | Your first 1,000 points will be allocated to our new Share of the Profits Community Fund                |
            | 3  | standard | Doing good together      | Keep track of how many points you have donated to our community fund and how many you have for yourself |
        When  I log in
        Then  I expect to see the first standard splash screen
        When  I skip the splash screen
        And   I log out and log in again
        Then  I expect NOT to see the standard splash screens

#TODO:
# - Request to API times out after 1 second

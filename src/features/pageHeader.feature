Feature: Page Headings
    As a user
    I want to see a heading bar on every page (except the home page)
    So that I know which page I am on

    Background:
        Given I am logged in
        And   I skip the splash screen

    Scenario: Page headings
        When  I click on the element "HomePage.btnSettings"
        Then  I expect that element "SettingsPage.title" matches the text "Settings & Preferences"
        When  I click on the button "SettingsPage.btnBack"
        Then  I expect that the attribute "selected" from element "HomePage.btnHome" is "true"

        When  I click on the element "HomePage.btnValue"
        Then  I expect that element "ValuePage.title" matches the text "Offers and Rewards"
        When  I click on the element "ValuePage.btnSettings"
        Then  I expect that element "SettingsPage.title" matches the text "Settings & Preferences"
        When  I click on the button "SettingsPage.btnBack"
        Then  I expect that the attribute "selected" from element "ValuePage.btnValue" is "true"

        # When  I click on the element "ValuePage.btnCard"
        # Then  I expect that element "CardPage.title" matches the text "Your Co-op Card"
        # When  I click on the element "CardPage.btnSettings"
        # Then  I expect that element "SettingsPage.title" matches the text "Settings & Preferences"
        # When  I click on the button "SettingsPage.btnBack"
        # Then  I expect that the attribute "selected" from element "CardPage.btnCard" is "true"

        # When  I click on the element "CardPage.btnCommunity"
        # Then  I expect that element "CommunityPage.title" matches the text "Community Hub"
        # When  I click on the element "CommunityPage.btnSettings"
        # Then  I expect that element "SettingsPage.title" matches the text "Settings & Preferences"
        # When  I click on the button "SettingsPage.btnBack"
        # Then  I expect that the attribute "selected" from element "CardPage.btnCommunity" is "true"

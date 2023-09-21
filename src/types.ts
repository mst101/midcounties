import StartPage from './support/pageObjects/start.page.js';
import LoginPage from './support/pageObjects/login.page.js';
import HomePage from './support/pageObjects/home.page.js';
import ValuePage from './support/pageObjects/value.page.js';
import SettingsPage from './support/pageObjects/settings.page.js';
import CardPage from './support/pageObjects/card.page.js';
import CommunityPage from './support/pageObjects/community.page.js';
import TransactionsPage from './support/pageObjects/transactions.page.js';

export type PageObjects = {
  StartPage: typeof StartPage;
  LoginPage: typeof LoginPage;
  HomePage: typeof HomePage;
  ValuePage: typeof ValuePage;
  SettingsPage: typeof SettingsPage;
  CardPage: typeof CardPage;
  CommunityPage: typeof CommunityPage;
  TransactionsPage: typeof TransactionsPage;
};

export type SplashScreenType = 'standard' | 'forced';

export type SplashScreen = {
  id: number;
  type: SplashScreenType;
  heading: string;
  description: string;
};

import type { Selector } from 'webdriverio';
import type { PageObjects } from '../../types';
import StartPage from '../pageObjects/start.page.js';
import LoginPage from '../pageObjects/login.page.js';
import HomePage from '../pageObjects/home.page.js';
import ValuePage from '../pageObjects/value.page.js';
import SettingsPage from '../pageObjects/settings.page.js';
import CardPage from '../pageObjects/card.page.js';
import CommunityPage from '../pageObjects/community.page.js';
import TransactionsPage from '../pageObjects/transactions.page.js';

const pageObjects: PageObjects = {
  StartPage,
  LoginPage,
  HomePage,
  ValuePage,
  SettingsPage,
  CardPage,
  TransactionsPage,
  CommunityPage,
};

/**
 * Check if the given elements contains text
 * @param   {String}   origSelector   Original selector
 * @returns {Selector} The new selector
 */
export default (origSelector: Selector) => {
  const [page, element] = (origSelector as string).split('.');

  if (Object.keys(pageObjects).includes(page)) {
    return pageObjects[page][element];
  }

  return origSelector;
};

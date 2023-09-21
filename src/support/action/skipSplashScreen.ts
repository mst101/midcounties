import SplashPage from '../pageObjects/splash.page.js';
import { expectToBeOnHomePage } from '../lib/helpers.js';

/**
 * Skip splash screen
 */
export default async () => {
  await SplashPage.tapOnSkip();
  await expectToBeOnHomePage();
};

/* eslint-disable max-len */
import HomePage from '../pageObjects/home.page.js';
import SettingsPage from '../pageObjects/settings.page.js';
import LoginPage from '../pageObjects/login.page.js';
import StartPage from '../pageObjects/start.page.js';

/**
 * Log in as a user
 */
export default async () => {
  await $(HomePage.btnSettings).click();
  await $(SettingsPage.title).waitForDisplayed();
  await driver.touchAction([
    { action: 'longPress', x: 500, y: 1700 },
    { action: 'moveTo', x: 500, y: 500 },
    'release',
  ]);
  const btnLogOut = await $(SettingsPage.btnLogOut);
  await btnLogOut.waitForEnabled();
  await btnLogOut.click();

  const btnLogin = await $(StartPage.btnLogin);
  await btnLogin.waitForEnabled();
  await btnLogin.click();

  await $(LoginPage.inputEmail).setValue('midcounties.user+1@gmail.com');
  await $(LoginPage.inputPassword).setValue('123456789');
  await $(LoginPage.btnLogin).click();
};

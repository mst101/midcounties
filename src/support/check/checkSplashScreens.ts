import type { SplashScreenType } from '../../types.js';
import SplashPage from '../pageObjects/splash.page.js';
import {
  switchToWebView,
  switchToNative,
  expectToBeOnHomePage,
  getSplashScreenWindowHandles,
  getSplashScreensOfType,
  sortBySplashScreenId,
  assertSplashScreen,
} from '../lib/helpers.js';

/**
 * Check the splash screens
 * @param  {String}             falseCase    Check there are no splash screens
 * @param  {SplashScreenType}   type         The splash screen type
 */
export default async (falseCase: boolean, type: SplashScreenType) => {
  if (falseCase) {
    await expectToBeOnHomePage();
    return;
  }

  const splashScreens = await getSplashScreensOfType(type);
  const handles = await getSplashScreenWindowHandles();
  const sortedHandles = await sortBySplashScreenId(handles);

  for (const [i, handle] of sortedHandles.entries()) {
    await driver.switchToWindow(handle);
    await assertSplashScreen(splashScreens[i]);

    await switchToNative();
    await SplashPage.tapOnNext();
    await switchToWebView();
  }

  await switchToNative();
  await expectToBeOnHomePage();
};

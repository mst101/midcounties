import {
  switchToNative,
  expectToBeOnHomePage,
  getSplashScreenWindowHandles,
  getSplashScreensOfType,
  sortBySplashScreenId,
  assertSplashScreen,
} from '../lib/helpers.js';

/**
 * Check the splash screen
 * @param  {String}             falseCase   Check there are no splash screens
 */
export default async (falseCase: boolean) => {
  if (falseCase) {
    await expectToBeOnHomePage();
    return;
  }

  const splashScreens = await getSplashScreensOfType('standard');
  const handles = await getSplashScreenWindowHandles();
  const sortedHandles = await sortBySplashScreenId(handles);

  await driver.switchToWindow(sortedHandles[0]);
  await assertSplashScreen(splashScreens[0]);
  await switchToNative();
};

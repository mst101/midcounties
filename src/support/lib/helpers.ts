/* eslint-disable no-promise-executor-return, function-paren-newline, implicit-arrow-linebreak */
import { SplashScreen, SplashScreenType } from '../../types.js';
import HomePage from '../pageObjects/home.page.js';
import SplashPage from '../pageObjects/splash.page.js';

/**
 * Get contexts
 * @returns {Context}  The contexts
 */
async function getContexts() {
  // let contexts: (typeof Context)[];

  for (let i = 0; i < 20; i += 1) {
    const contexts = await driver.getContexts();
    // contexts = await driver.execute('mobile:getContexts');
    if (contexts.length > 1) {
      return contexts;
    }
    await driver.pause(500);
  }

  throw new Error('No WEBVIEW context was found');
}

/**
 * Switch to WebView context
 */
async function switchToWebView() {
  const contexts = await getContexts();
  const webview = contexts.find((context) =>
    (context as string).startsWith('WEBVIEW'),
  );

  if (webview) {
    await driver.switchContext(webview.toString());
  }

  // Arbitrary wait in the hope that all React components on the page will have loaded
  // await driver.pause(3000);

  // const newContexts: Array<{ webviewName: string }> = await driver.execute(
  //     'mobile:getContexts',
  // );
  // for (const context of newContexts) {
  //     console.log('###############');
  //     console.log(context);
  // }
  // console.log('###############');
}

/**
 * Switch to NATIVE_APP context
 */
async function switchToNative() {
  await driver.switchContext('NATIVE_APP');
}

/**
 * Expect to be on home page
 */
async function expectToBeOnHomePage() {
  const btnHome = await $(HomePage.btnHome);
  await btnHome.waitForDisplayed({ timeout: 20000 });
  expect(await btnHome.getAttribute('selected')).toEqual(
    'true',
    // @ts-expect-error
    "Home page button should be selected, but it's not",
  );
}

/**
 * Check the splash screen
 * @param {string[]} handles Array of WindowHandles
 */
async function sortBySplashScreenId(handles: string[]) {
  const sortedHandles = [];

  for (const handle of handles) {
    await driver.switchToWindow(handle);
    const url = await driver.getUrl();
    const slideId = parseInt(url.substring(url.lastIndexOf('/') + 1), 10);

    sortedHandles.push({
      handle,
      slideId,
    });
  }
  sortedHandles.sort((a, b) => a.slideId - b.slideId);
  return sortedHandles.map((obj) => obj.handle);
}

/**
 * As the home page is momentarily loaded before the splash screens (presumably
 * to write some cookies), switching to the WebView too soon will run the risk
 * that it will relate to that of the home page, rather than the splash screens.
 * Hence this function which ensures that the WebView relates to the splash pages.
 */
async function getSplashScreenWindowHandles() {
  for (let i = 0; i < 10; i += 1) {
    await switchToWebView();

    const handles = await driver.getWindowHandles();
    console.log('handles', handles);
    for (const handle of handles) {
      try {
        await driver.switchToWindow(handle);
        const url = await driver.getUrl();
        console.log('url', url);
        if (url.indexOf('slides') >= 0) {
          return handles;
        }
      } catch (error) {
        console.log(
          'FYI - the home page has been closed. Moving on to splash screens',
        );
        break;
      }
    }

    await driver.pause(200);
    await switchToNative();
  }

  return [];
}

/**
 * Get splash screens of a particular type (standard or forced)
 * @param {SplashScreenType} type   The type of splash screens
 */
async function getSplashScreensOfType(type: SplashScreenType) {
  const splashScreens = (await driver.sharedStore.get(
    'splashScreens',
  )) as unknown as SplashScreen[];
  if (!splashScreens) {
    throw new Error('No splash screens have been created');
  }

  return splashScreens.filter((splashScreen) => splashScreen.type === type);
}

/**
 * Check splash screen has the correct heading and description
 * @param {SplashScreen} splashScreen The splash screens
 */
async function assertSplashScreen(splashScreen: SplashScreen) {
  const heading = await $(SplashPage.heading);
  await heading.waitForDisplayed();
  const description = await $(SplashPage.description);

  await expect(heading).toHaveTextContaining(splashScreen.heading);
  await expect(description).toHaveTextContaining(splashScreen.description);
}
export {
  expectToBeOnHomePage,
  getContexts,
  switchToWebView,
  switchToNative,
  sortBySplashScreenId,
  getSplashScreenWindowHandles,
  getSplashScreensOfType,
  assertSplashScreen,
};

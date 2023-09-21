/* eslint-disable max-len, class-methods-use-this, require-jsdoc */

import Page from './page.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SplashPage extends Page {
  /**
   * define selectors using getter methods
   */
  get heading() {
    return 'body > div.bottom > div > h1';
  }

  get description() {
    return 'body > div.bottom > div > p';
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async tapOnNext() {
    driver.touchAction({ action: 'tap', x: 540, y: 1900 });
  }

  async tapOnSkip() {
    driver.touchAction({ action: 'tap', x: 540, y: 2050 });
  }
}

export default new SplashPage();

import { driver } from '@wdio/globals';

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  // static page: object;

  /**
   * Opens a sub page of the page
   */
  // eslint-disable-next-line class-methods-use-this, require-jsdoc
  open() {
    driver.$('/');
  }
}

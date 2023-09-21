/* eslint-disable max-len, class-methods-use-this, require-jsdoc */

import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class StartPage extends Page {
  /**
   * define selectors using getter methods
   */

  get acceptAllCookiesButton() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.Button[1]';
  }

  get managePreferencesButton() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.Button[2]';
  }

  get btnLogin() {
    return '~ Log in ';
    // return '~Login';
  }

  get btnRegister() {
    return '~Register';
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async goToLoginPage() {
    if (await $(this.acceptAllCookiesButton).isExisting()) {
      await $(this.acceptAllCookiesButton).click();
    }
    await $(this.btnLogin).click();
  }
}

export default new StartPage();

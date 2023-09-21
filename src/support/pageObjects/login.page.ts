/* eslint-disable max-len, class-methods-use-this, require-jsdoc */

import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */

  get inputEmail() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.EditText';
  }

  get inputPassword() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.EditText';
  }

  get btnLogin() {
    return '~Login';
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using email and password
   * @param {string} email the email
   * @param {string} password the password
   */
  async login(email: string, password: string) {
    await $(this.inputEmail).setValue(email);
    await $(this.inputPassword).setValue(password);
    await $(this.btnLogin).click();
  }

  /**
   * overwrite specific options to adapt it to page object
   * @return {object} The login page
   */
  open() {
    return super.open();
  }
}

export default new LoginPage();

/* eslint-disable max-len, class-methods-use-this, require-jsdoc */

import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
  /**
   * define selectors using getter methods
   */

  get cardYes() {
    return $(
      '#cardcheck > div > div:nth-child(2) > div > div > div > div:nth-child(1) > label',
    );
  }

  get cardNo() {
    return $(
      '#cardcheck > div > div:nth-child(2) > div > div > div > div:nth-child(2) > label',
    );
  }

  get btnContinue() {
    return $('#cardcheck > div > div:nth-child(4) > input');
  }

  get inputEmail() {
    return $('#newMember_Email');
  }

  get inputPassword() {
    return $('#newMember_Password');
  }

  get inputConfirmPassword() {
    return $('#newMember_RetypePassword');
  }

  get selectPrefix() {
    return $('#newMember_Prefix');
  }

  get inputForename() {
    return $('#newMember_Forename');
  }

  get inputSurname() {
    return $('#newMember_Surname');
  }

  get selectDay() {
    return $('#newMember_DobDay');
  }

  get selectMonth() {
    return $('#newMember_DobMonth');
  }

  get selectYear() {
    return $('#newMember_DobYear');
  }

  get selectGender() {
    return $('#newMember_Gender');
  }

  get inputPostcode() {
    return $('#newMember_Postcode');
  }

  get inputAddress1() {
    return $('#newMember_Address1');
  }

  get inputAddress2() {
    return $('#newMember_Address2');
  }

  get inputTown() {
    return $('#newMember_Address3');
  }

  get inputCounty() {
    return $('#newMember_Address4');
  }

  get btnDigitalCard() {
    return $(
      '#MemberSignUpForm > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div > div > div.row.requireAnswer > div:nth-child(1) > div > label',
    );
  }

  get btnPhysicalCard() {
    return $(
      '#MemberSignUpForm > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div > div > div.row.requireAnswer > div:nth-child(2) > div > label',
    );
  }

  get btnContinue2() {
    return $(
      '#MemberSignUpForm > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div > button',
    );
  }

  get btnMarketingEmail() {
    return $(
      '#prefSection > div:nth-child(7) > div:nth-child(1) > div > div > label',
    );
  }

  get btnMarketingSMS() {
    return $(
      '#prefSection > div:nth-child(7) > div:nth-child(2) > div > div > label',
    );
  }

  get btnMarketingFood() {
    return $('#expandableOptions > div > div:nth-child(1) > div > div > label');
  }

  get btnMarketingLeisure() {
    return $('#expandableOptions > div > div:nth-child(2) > div > div > label');
  }

  get btnMarketingHealth() {
    return $('#expandableOptions > div > div:nth-child(3) > div > div > label');
  }

  get btnMarketingChild() {
    return $('#expandableOptions > div > div:nth-child(4) > div > div > label');
  }

  get btnMarketingHome() {
    return $('#expandableOptions > div > div:nth-child(5) > div > div > label');
  }

  get btnMarketingGifts() {
    return $('#expandableOptions > div > div:nth-child(6) > div > div > label');
  }

  get btnMarketingFinance() {
    return $('#expandableOptions > div > div:nth-child(7) > div > div > label');
  }

  get btnStudent() {
    return $('#studentQuestion > div > label');
  }

  get btnValues() {
    return $(
      '#MemberSignUpForm > div:nth-child(4) > div:nth-child(2) > div > div > div:nth-child(2) > label:nth-child(2)',
    );
  }

  get btnTerms() {
    return $(
      '#MemberSignUpForm > div:nth-child(4) > div:nth-child(2) > div > div > div:nth-child(3) > label:nth-child(2)',
    );
  }

  get btnPrivacy() {
    return $(
      '#MemberSignUpForm > div:nth-child(4) > div:nth-child(2) > div > div > div:nth-child(4) > label:nth-child(2)',
    );
  }

  get btnBecomeAMember() {
    return $(
      '#MemberSignUpForm > div:nth-child(4) > div:nth-child(2) > div > div > input',
    );
  }

  /**
   * overwrite specific options to adapt it to page object
   * @return {object} The login page
   */
  open() {
    return super.open();
  }
}

export default new RegisterPage();

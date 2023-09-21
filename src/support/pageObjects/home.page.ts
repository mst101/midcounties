/* eslint-disable function-paren-newline, no-promise-executor-return, implicit-arrow-linebreak, max-len, class-methods-use-this, require-jsdoc */

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */

  get categories() {
    return $$('section.Home_section__ytsz4.content').filter(async (section) =>
      section.$('div.Carousel_carousel__ePVOM').isExisting(),
    );
  }

  get pointsBar() {
    return $('section > div.ProgressionSlider_carousel__cD7FX');
  }

  get pointsTotal() {
    return $(
      '#root > div > div > div > section:nth-child(6) > div > div > div > div > div.slick-slide.slick-active.slick-current > div > div > div > div > div.CommunityProgressBar_flexLeftContent__-eBeM > button',
    );
  }

  get btnSettings() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup';
  }

  get btnHome() {
    return '~Home';
  }

  get btnValue() {
    return '~Value';
  }

  get btnCard() {
    return '~Card';
  }

  get btnCommunity() {
    return '~Community';
  }

  get menuButtonTextHome() {
    return '//android.view.View[@content-desc="Home"]/android.widget.TextView';
  }

  get menuButtonTextValue() {
    return '//android.view.View[@content-desc="Value"]/android.widget.TextView';
  }

  get menuButtonTextCard() {
    return '//android.view.View[@content-desc="Card"]/android.widget.TextView';
  }

  get menuButtonTextCommunity() {
    return '//android.view.View[@content-desc="Community"]/android.widget.TextView';
  }
}

export default new HomePage();

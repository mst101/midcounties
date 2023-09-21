/* eslint-disable function-paren-newline, implicit-arrow-linebreak, max-len, class-methods-use-this, require-jsdoc */

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ValuePage extends Page {
  /**
   * define selectors using getter methods
   */

  get categories() {
    return $$('section.Home_section__ytsz4.content').filter(async (section) =>
      section.$('div.Carousel_carousel__ePVOM').isExisting(),
    );
  }

  get title() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.TextView';
  }

  get btnSettings() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup';
  }

  get btnHome() {
    return '//android.view.View[@content-desc="Home"]/android.view.ViewGroup';
  }

  get btnValue() {
    return '//android.view.View[@content-desc="Value"]/android.view.ViewGroup';
  }

  get btnCard() {
    return '~Card';
  }

  get btnCommunity() {
    return '~Community';
  }

  get menuButtonTextHome() {
    return '//android.view.View[@content-desc="Home"]/android.view.ViewGroup/android.widget.TextView';
  }

  get menuButtonTextValue() {
    return '//android.view.View[@content-desc="Value"]/android.view.ViewGroup/android.widget.TextView';
  }

  get menuButtonTextCard() {
    return '//android.view.View[@content-desc="Card"]/android.widget.TextView';
  }

  get menuButtonTextCommunity() {
    return '//android.view.View[@content-desc="Community"]/android.widget.TextView';
  }
}

export default new ValuePage();

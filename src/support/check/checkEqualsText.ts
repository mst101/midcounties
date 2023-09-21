import type { Selector } from 'webdriverio';
import pageObjectSelector from '../lib/pageObjectSelector.js';

/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   origSelector  Element selector
 * @param  {String}   falseCase     Whether to check if the content equals the
 *                                  given text or not
 * @param  {String}   expectedText  The text to validate against
 */
export default async (
  elementType: 'element' | 'button',
  origSelector: Selector,
  falseCase: boolean,
  expectedText: string,
) => {
  const selector = pageObjectSelector(origSelector);

  /**
   * The command to execute on the browser object
   * @type {String}
   */
  let command: 'getText' | 'getValue' = 'getText';

  if (
    elementType === 'button'
    // || (await $(selector).getAttribute('value')) === null
  ) {
    command = 'getValue';
  }

  /**
   * The expected text to validate against
   * @type {String}
   */
  let parsedExpectedText = expectedText;

  /**
   * Whether to check if the content equals the given text or not
   * @type {Boolean}
   */
  let boolFalseCase = !!falseCase;

  // Check for empty element
  if (typeof parsedExpectedText === 'function') {
    parsedExpectedText = '';

    boolFalseCase = !boolFalseCase;
  }

  if (parsedExpectedText === undefined && falseCase === undefined) {
    parsedExpectedText = '';
    boolFalseCase = true;
  }

  const text = await $(selector)[command]();

  if (boolFalseCase) {
    expect(parsedExpectedText).not.toBe(text);
  } else {
    expect(parsedExpectedText).toBe(text);
  }
};

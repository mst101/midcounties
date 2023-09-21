import type { Selector } from 'webdriverio';
import checkIfElementExists from '../lib/checkIfElementExists.js';
import pageObjectSelector from '../lib/pageObjectSelector.js';

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   origSelector Element selector
 */
export default async (
  action: 'click' | 'doubleClick',
  type: 'link' | 'selector',
  origSelector: Selector,
) => {
  const selector = pageObjectSelector(origSelector);

  /**
   * Element to perform the action on
   * @type {String}
   */
  const selector2 = type === 'link' ? `=${selector}` : selector;

  /**
   * The method to call on the browser object
   * @type {String}
   */
  const method = action === 'click' ? 'click' : 'doubleClick';

  await checkIfElementExists(selector2);

  await $(selector2)[method]();
};

import checkTitle from 'src/support/check/checkTitle';

describe('checkTitle', () => {
  let expectToEqual;
  let expectToNotEqual;

  beforeEach(() => {
    global.browser = {
      getTitle: jest.fn(() => Promise.resolve('page title')),
    };

    expectToEqual = jest.fn();
    expectToNotEqual = jest.fn();

    global.expect = jest.fn(() => ({
      not: {
        toEqual: expectToNotEqual,
      },
      toEqual: expectToEqual,
    }));
  });

  it('Should test if the title matches the given text', async () => {
    await checkTitle(false, 'page title');

    _expect(global.browser.getTitle).toHaveBeenCalledTimes(1);
    _expect(global.browser.getTitle).toHaveBeenCalledWith();

    _expect(expectToEqual).toHaveBeenCalledTimes(1);
    _expect(expectToEqual).toHaveBeenCalledWith(
      'page title',
      'Expected title to be "page title" but found "page title"',
    );
  });

  it('Should test if the title does not match the given text', async () => {
    await checkTitle(true, 'page title');

    _expect(global.browser.getTitle).toHaveBeenCalledTimes(1);
    _expect(global.browser.getTitle).toHaveBeenCalledWith();

    _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
    _expect(expectToNotEqual).toHaveBeenCalledWith(
      'page title',
      'Expected title not to be "page title"',
    );
  });
});

/**
 * Close and re-open the app
 */
export default async () => {
  await driver.terminateApp('com.cxloyalty.midcountiescoop');
  await driver.activateApp('com.cxloyalty.midcountiescoop');
};

import url from 'node:url';
import path from 'node:path';

import { config as buildConfig } from './wdio.conf.js';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

const commonCapabilities = {
  platformName: 'Android',
  'appium:app': path.join(
    dirname,
    'app/YourCoopMembership-STAGE-2023-09-11.apk',
  ),
  'appium:automationName': 'UiAutomator2',
  'appium:appWaitActivity': 'com.cxloyalty.midcountiescoop.MainActivity',
  // 'appium:appWaitActivity': 'com.android.vending.MainActivity',
  'appium:autoGrantPermissions': true,
  // 'appium:chromedriverExecutable': path.join(
  //   dirname,
  //   'drivers/chromedriver_91',
  // ),
  'appium:orientation': 'PORTRAIT',
  'appium:noReset': false,
  'appium:fullReset': true,
  'appium:newCommandTimeout': 240,
  // 'appium:networkSpeed': 'lte',
};

buildConfig.capabilities = [
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '7',
  //     'appium:deviceName': 'Android GoogleAPI Emulator',
  // },
  {
    ...commonCapabilities,
    'appium:platformVersion': '12',
    'appium:deviceName': 'Pixel_5_Android_12',
  },
  // {
  //   ...commonCapabilities,
  //   'appium:platformVersion': '12',
  //   'appium:deviceName': 'Pixel_3_Android_12',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '7',
  //     'appium:deviceName': '5.1_WVGA_Android_7',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '7.1.1',
  //     'appium:deviceName': 'Nexus_9_Android_7.1.1',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '8',
  //     'appium:deviceName': 'Galaxy_Nexus_Android_8',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '9',
  //     'appium:deviceName': 'Pixel_3_Android_9',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '10',
  //     'appium:deviceName': 'Pixel_3_Android_10',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '11',
  //     'appium:deviceName': 'Pixel_3_Android_11',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '12',
  //     'appium:deviceName': 'Pixel_3_Android_12',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '7',
  //     'appium:deviceName': 'Pixel_5_Android_7',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '8',
  //     'appium:deviceName': 'Pixel_5_Android_8',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '9',
  //     'appium:deviceName': 'Pixel_5_Android_9',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '10',
  //     'appium:deviceName': 'Pixel_5_Android_10',
  //     'appium:chromedriverExecutable': path.join(
  //         dirname,
  //         'drivers/chromedriver_74',
  //     ),
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '11',
  //     'appium:deviceName': 'Pixel_5_Android_11',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '12',
  //     'appium:deviceName': 'Pixel_5_Android_12',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '13',
  //     'appium:deviceName': 'Pixel_5_Android_13',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '14',
  //     'appium:deviceName': 'Pixel_5_Android_14',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '11',
  //     'appium:deviceName': 'Pixel_7_Android_11',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '12',
  //     'appium:deviceName': 'Pixel_7_Android_12',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '12',
  //     'appium:deviceName': 'Pixel_7_Pro_Android_12',
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '14',
  //     'appium:deviceName': 'Pixel_6_Android_14',
  //     'appium:chromedriverExecutable': path.join(
  //         dirname,
  //         'drivers/chromedriver_113',
  //     ),
  // },
  // {
  //     ...commonCapabilities,
  //     'appium:platformVersion': '12',
  //     'appium:deviceName': 'Nexus 10 Android 12',
  // },
];

// buildConfig.specs = ['./src/features/**/*.feature'];
// buildConfig.specs = ['./src/features/**/createUser.feature'];
// buildConfig.specs = ['./src/features/**/transactions.feature'];
// buildConfig.specs = ['./src/features/**/pageHeader.feature'];
// buildConfig.specs = ['./src/features/**/pageFooter.feature'];
// buildConfig.specs = ['./src/features/**/homepage.feature'];
// buildConfig.specs = ['./src/features/**/login.feature'];
buildConfig.specs = ['./src/features/**/splashStandard.feature'];
// buildConfig.specs = ['./src/features/**/splashForced.feature'];

buildConfig.port = 4723;
// buildConfig.services = [
//     [
//         'chromedriver',
//         {
//             chromeDriverArgs: ['--port=9516', '--url-base=\'/\''],
//         },
//     ],
//     [
//         'static-server',
//         {
//             port: 8080,
//             folders: [
//                 { mount: '/', path: path.join(dirname, 'demo-app') },
//             ],
//         },
//     ],
// ];
// buildConfig.path = '/';
// buildConfig.beforeFeature = async () => {
//     /**
//      * check if static website is up and cancel if not
//      */
//     await (browser as WebdriverIO.Browser).url('/');
//     const pageTitle = await (browser as WebdriverIO.Browser).getTitle();
//     if (pageTitle !== 'DEMO APP') {
//         console.error(`Demo app is not up, found ${pageTitle}`);
//         console.log(await (browser as WebdriverIO.Browser).getPageSource());
//         process.exit(1);
//     }
// };

// if (process.env.CI) {
//     buildConfig.outputDir = path.join(dirname, 'logs');
// }

export const config = buildConfig;

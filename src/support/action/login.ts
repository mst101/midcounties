/* eslint-disable max-len */
import fs from 'fs';
import StartPage from '../pageObjects/start.page.js';
import LoginPage from '../pageObjects/login.page.js';
import { switchToWebView, switchToNative } from '../lib/helpers.js';

let t0: number;

/**
 * Take a note of how long it takes to log in
 */
function writeLoginDuration() {
    const loginDuration = performance.now() - t0;
    const timestamp = new Date().toUTCString();

    fs.appendFile(
        'loginDuration.txt',
        `${loginDuration}\t${timestamp}\n`,
        (error) => {
            if (error) {
                console.log('Error writing to loginDuration.txt file', error);
            }
        },
    );
}

/**
 * Skip splash screens
 */
async function skipNotificationsScreen() {
    const nextButton = await $('~Next');
    await nextButton.waitForDisplayed({ timeout: 20000 });
    await nextButton.click();

    writeLoginDuration();
}

/**
 * Log in as a user
 */
export default async () => {
    await StartPage.goToLoginPage(); // await switchToWebView();

    await $(LoginPage.inputEmail).setValue('midcounties.user+1@gmail.com');
    await $(LoginPage.inputPassword).setValue('123456789');
    await $(LoginPage.btnLogin).click();
    t0 = performance.now();
    await skipNotificationsScreen();

    // driver.pause(3000);
    // await switchToWebView();
    // const cookies = await driver.getAllCookies();
    // console.log(cookies);
    // const isTokenSet = cookies.some((cookie) => cookie.name === 'token');

    // if (isTokenSet) {
    //     console.log('Storing cookies...');
    //     driver.sharedStore.set('cookies', JSON.stringify(cookies));
    // }
    // await switchToNative();
};

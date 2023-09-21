import type { DataTable } from '@cucumber/cucumber';
import type { SplashScreen } from '../../types';

/**
 * Create `n` standard splash screens
 * @param   {DataTable} data  The splash screens to create
 */
export default (data: DataTable) => {
  const splashScreens = data.hashes() as unknown as SplashScreen[];
  driver.sharedStore.set('splashScreens', splashScreens);

  // Create splash screens
  // for (const splashScreen of splashScreens) {
  //     console.log(splashScreen.id, splashScreen.heading);
  // }
};

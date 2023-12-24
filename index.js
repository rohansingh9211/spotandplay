/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppWithSplashScreen from './src/screen/splash/AppWithSplashScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppWithSplashScreen);

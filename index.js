/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Ignore common non-critical warnings
LogBox.ignoreLogs([
  'Sending `onAnimatedValueUpdate` with no listeners registered',
  'Non-serializable values were found in the navigation state',
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
  'Require cycle',
  'Remote debugger',
  'Debugger and device times',
  'Warning:',
]);

// Ignore all yellow box warnings in development
LogBox.ignoreAllLogs(true);

AppRegistry.registerComponent(appName, () => App);

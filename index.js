/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// libraries that needs ios configuration
// * - react-native-date-picker ->> https://github.com/henninghall/react-native-date-picker
// * - react-native-geolocation-service ->> https://github.com/Agontuk/react-native-geolocation-service
// * - react-native-google-places-autocomplete ->> https://github.com/FaridSafi/react-native-google-places-autocomplete
// * - react-native-permissions ->> https://github.com/zoontek/react-native-permissions
// * - react-native-onesignal
// * - set up Linking for ios ->> https://rationalappdev.com/logging-into-react-native-apps-with-facebook-or-google/

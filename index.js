import { AppRegistry } from 'react-native';
import App from './App';
global.Buffer = global.Buffer || require('buffer').Buffer

AppRegistry.registerComponent('smartcam', () => App);

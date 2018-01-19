/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 import React, { Component } from 'react';
 import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
 import main from './src/Main';
 AppRegistry.registerComponent('App', main);
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
//import Main from './application/Main'
// import MainRedux from './application/MainDrawerLayoutAndroid'
import MainRedux from './src/Main_Redux'


// export default class App extends Component {
//     render() {
//         return (<Main/>);
//     }
// }
AppRegistry.registerComponent('app', () => MainRedux);

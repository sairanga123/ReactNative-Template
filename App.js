/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use-strict';
import React, { Component } from 'react';
import HomePage from './homepage'
import Serveit from './serveit'
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS
} from 'react-native';


/*
export default class app extends component<{}> {
  render() {
    let pic = {
      uri: 'https://www.deepershades.net/images/stories/sysimages/sign-up-button-transparent-background.png'
    };
    return (
      <image source ={pic} style={{width: 650, height: 80}}/>
    );
  }
}

class homepage extends Component {
  render() {
      return React.createElement(Text, {style: styles.description}, "Search for houses to buy!");
    
  }
}
*/
export default class app extends Component {
  render() {
    return (
      // <HomePage />
      <Serveit />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


AppRegistry.registerComponent('app', () => app);
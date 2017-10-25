import React, { Component } from 'react';

import {
  AppRegistry,
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';


export default class Serveit extends Component {
	_onPressButton() {
		Alert.alert("Searching for People near you!")
    }
		;
		render(){
			return(
			<View style={styles.container}>
				<View style = {styles.buttonContainer}>
				<Button
				onPress = {this._onPressButton}
				title = 'ServeIt!'
				color = '#808080'
				/>
				</View>
      			</View>
			);
		};
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	buttonContainer: {
		margin: 20
	}
});
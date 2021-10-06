import React,{Component} from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  // StyleSheet,
} from 'react-native';

import LoginBody from '../components/LoginBodyComponent'
import LoginFooter from '../components/LoginFooterComponent'
import LoginHeader from '../components/LoginHeaderComponent'

export default class LoginScreen extends Component {
  render() {
    return (<TouchableWithoutFeedback onPress = {Keyboard.dismiss()}>
            <View style = {styles.container}><LoginHeader /><LoginBody />
            <LoginFooter /></View>
  </TouchableWithoutFeedback>);
  }
}

const styles = StyleSheet.create({
  container :
      {flex : 1, backgroundColor : '#fff', justifyContent : 'space-between'},
});

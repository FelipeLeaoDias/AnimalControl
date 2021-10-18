import React,{Component} from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  // StyleSheet,
} from 'react-native';

import LoginBody from '../components/Login/LoginBodyComponent'
import ImageComp from '../components/ImageComponent'

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss()}>
        <View style = {styles.container}>
          <ImageComp image={require("../assets/LoginHeader.png")}/>
          <LoginBody navigation={this.props.navigation}/>
          <ImageComp image={require("../assets/LoginFooter.png")}/>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container :
      {flex : 1, backgroundColor : '#fff', justifyContent : 'space-between'},
});

import React, {Component} from 'react'
import {
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  Dimensions,
} from 'react-native'
import ImageComp from '../components/ImageComponent'
import RegisterBody from '../components/Register/RegisterBody'

export default class RegisterScreen extends Component {
  constructor(props) { super(props); }

  render() {
    return(
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss()}>
        <View style = {this.styles.container}>
          <ImageComp image={
      require("../assets/RegisterHeader.png")}
      />
          <RegisterBody navigation={this.props.navigation}/>
          <ImageComp image={
      require("../assets/RegisterFooter.png")}/>
        </View>
      </TouchableWithoutFeedback>

    );
  }

  styles = StyleSheet.create({
    container :
        {
          flex : 1, backgroundColor : '#fff', 
          minWidth: Dimensions.get('screen').width,
          justifyContent : 'space-between',
          alignContent: 'center',
        },
  });
}

import React, {Component} from 'react'
import {Text, View, StyleSheet, TextInput, Button, Dimensions, TouchableOpacity} from 'react-native'

export default class MyButton extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
     <TouchableOpacity onPress={this.props.onPress}>
      <View style={this.style.button}>
        <Text>{this.props.title}</Text>
      </View>
      </TouchableOpacity> 
    );
  }
  style = StyleSheet.create({
    button:{
      borderWidth: 0.7,
      borderRadius: 10,
      backgroundColor: "lightgreen",
      alignItems:'center',
      width: this.props.width ? this.props.width : Dimensions.get('window').width * 0.5,
      padding: 8,
      elevation: 3,
      // height: this.props.height ? this.props.height : Dimensions.get('window').width * 0.08,
    }
  });
}

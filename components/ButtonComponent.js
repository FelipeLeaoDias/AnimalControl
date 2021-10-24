import React, {Component} from 'react'
import {Text, View, StyleSheet, TextInput, Button, Dimensions, TouchableOpacity} from 'react-native'

export default class MyButton extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
     <TouchableOpacity onPress={this.props.onPress}>
      <View style={{...this.style.button, ...this.props.style}}>
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
      justifyContent: 'center',
      width: this.props.size? this.props.size: Dimensions.get('window').width * 0.5,
      height: this.props.size? this.props.size: Dimensions.get('window').height* 0.5,
      padding: 8,
      elevation: 3,
      // height: this.props.height ? this.props.height : Dimensions.get('window').width * 0.08,
    }
  });
}

import React,{Component} from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'

export default class LoginFooter extends Component{
  render(){
    return(
      <View style={this.style.header}>
          <Image source={require('../assets/LoginFooter.png')}/>
      </View>
    )
  }
  style = StyleSheet.create({
    header:{
      flex:0,
      alignSelf:"center",
      marginTop: "-50%"
    }
  });

}

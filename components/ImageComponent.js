import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';

export default class LoginHeader extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={this.style.header}>
          <Image style={{marginTop:"10%"}} source={this.props.image}/>
      </View>
    )
  }

  style = StyleSheet.create({
    header:{
      alignSelf:"center"
    }
  });
}

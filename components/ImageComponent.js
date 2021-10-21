import React, {Component} from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';

export default class LoginHeader extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={this.props.style}>
          <Image style={{marginTop:"10%", width:"100%"}} resizeMode={'stretch'} source={this.props.image}/>
      </View>
    )
  }

  style = StyleSheet.create({
    header:{
      alignSelf:"center",
      resizeMode: 'stretch',
      width: Dimensions.get('screen').width,
    }
  });
}

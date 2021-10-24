import React,{Component} from 'react'
import {Image, View, StyleSheet} from 'react-native'

import PopUpMenuButton from '../components/PopUpMenuButtonComponent'

export default class MainHeader extends Component {
  image = require('../assets/Titulo.png')
  render() {
    return (
      <View style={this.styles.container}>
        <Image style={{marginTop: 10}} source={this.image}/>
        <PopUpMenuButton />
      </View>
    );
  }
  styles=StyleSheet.create({
    container:{
      backgroundColor : '#04d26f', 
      alignContent: 'center', 
      justifyContent : 'space-around',
      flexDirection: 'row',
      paddingTop: 25,
      paddingBottom: 10
    },
  })
}

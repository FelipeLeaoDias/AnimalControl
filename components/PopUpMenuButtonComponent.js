import React, {Component} from 'react'
import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Feather} from 'react-native-vector-icons'

export default class PopUpMenuButton extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TouchableOpacity style={this.styles.button} onPress={this.props.onPress}> 
        <Feather size={35} name='menu'/>
      </TouchableOpacity>
    )
  }

  styles = StyleSheet.create({
    button: {
      borderColor: 'black',
      borderRadius: 8,
      borderWidth: 1,
      padding: 10,
    }
  })
}

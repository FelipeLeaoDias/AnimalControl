import React, {Component} from 'react'
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native'

export default class ImageButton extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <TouchableOpacity style={this.styles.container} onPress={this.props.onPress}>
        <Image source={this.props.source} />
        <Text style={{fontSize:18, color:'#47A937'}}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
  styles = StyleSheet.create({
    container:{
      alignItems:'center',
    }
  })
}

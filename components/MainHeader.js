import React,{Component} from 'react'
import {Dimensions, Image, View, StyleSheet} from 'react-native'
import PopUpMenuButton from '../components/PopUpMenuButtonComponent'

export default class MainHeader extends Component {
  image = require('../assets/Titulo.png')
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Image style={{marginTop: 10}} source={this.image}/>
        <PopUpMenuButton onPress={this.props.onBtnPress}/>
      </View>
    );
  }
  height = Dimensions.get('window').height
  styles=StyleSheet.create({
    container:{
      backgroundColor : '#00D870', 
      alignContent: 'center', 
      justifyContent : 'space-around',
      flexDirection: 'row',
      paddingTop: 25,
      paddingBottom: 10,
      borderColor:"black",
      borderWidth:0.2,
    },
  })
}

import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import MyButton from './ButtonComponent'

export default class PopUpMenu extends Component {
  constructor(props){
    super(props)
  }
  height = Dimensions.get('screen').height
  width = Dimensions.get('screen').width

  render(){
    if(this.props.visible)
      return(
        <View style={this.styles.container}>
          <MyButton onPress={this.props.onPressBtn1} style2={this.styles.button_2} style={this.styles.button} title='Configurações'/>
          <MyButton onPress={this.props.onPressBtn2} style2={this.styles.button_2} style={this.styles.button} title='Perfil'/>
          <MyButton onPress={this.props.onPressBtn3} style2={this.styles.button_2} style={this.styles.button} title='Desconectar'/>
        </View>
      ) 
    return(<View />)
  }

  styles=StyleSheet.create({
    container: {
      // flex:1,
      top: this.height * 0.025 + 65,
      right: this.width*0.1,
      position: 'absolute',
      elevation: 50,
      borderColor:'black',
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor:'#04D26F',
      alignItems: 'center',
      padding: 20,
    },
    button:{
      alignItems:'center',
      maxHeight: 50,
      // marginBottom:10,
      borderWidth:0,

      borderRadius: 0,
      backgroundColor: "#04D26F",
      padding: 0,
      elevation: 0,
      // backgroundColor: 'red',
    },
    button_2:{
      minWidth: 110,
      borderBottomWidth: 1,
      borderColor:'black',
      alignItems:'center',
      justifyContent: 'center',
    }

  })
}

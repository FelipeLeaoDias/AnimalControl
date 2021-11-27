import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

import MyButton from './ButtonComponent'

export default class BaseFooter extends Component {
  constructor(props){
    super(props);
  }

  voltarTela = () => {
    this.props.navigation.pop()
  }

  render(){
    return(
      <View style={this.styles.container}>
        <MyButton style={{...this.styles.button, backgroundColor: '#d3d3d3'}} 
        title="Voltar"
        title_style={{fontSize: 16}}
        onPress={this.voltarTela}
      />
        {this.props.title2 ? <MyButton title={this.props.title2} style={this.styles.button}/> : <View></View>}
      </View>
    )
  }
  styles=StyleSheet.create({
    container:{
      backgroundColor: '#00D870',
      // alignContent: 'center', 
      justifyContent : 'space-between',
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderColor:"black",
      borderWidth:0.2,
      
    },
    button: {
      maxHeight: 40,
      maxWidth: 100,
    }
  })
}

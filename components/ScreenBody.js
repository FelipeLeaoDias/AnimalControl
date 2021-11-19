import React, {Component} from 'react'
import {Text, StyleSheet, Image, View, Dimensions} from 'react-native';

import MainHeader from '../components/MainHeader'
import PopUpMenu from '../components/PopUpMenu'

export default class ScreenBody extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible:false,
    }
  }
  
  toggleVisible = () => {
    this.setState({visible: !this.state.visible})
  }

  render(){
    return(
      <View>
        <MainHeader onBtnPress={()=>{this.toggleVisible()}}/>
          {this.props.children}
        <PopUpMenu visible={this.state.visible}
        onPressBtn1={()=>{console.log('Configurações')}}
        onPressBtn2={()=>{console.log('Perfil')}}
        onPressBtn3={()=>{console.log('Desconectar')}}
        />
      </View>
    )
  }
}

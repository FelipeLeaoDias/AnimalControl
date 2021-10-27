import React, {Component} from 'react'
import {Text, StyleSheet, Image, View, Dimensions} from 'react-native';

import MainHeader from '../components/MainHeader'
import MainBodyComponent from '../components/Main/MainBodyComponent'
import MainFooterComponent from '../components/Main/MainFooterComponent'
import PopUpMenu from '../components/PopUpMenu'

export default class MainScreen extends Component {
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
        <MainBodyComponent />
        <MainFooterComponent />
        <PopUpMenu visible={this.state.visible}
        onPressBtn1={()=>{console.log('Configurações')}}
        onPressBtn2={()=>{console.log('Perfil')}}
        onPressBtn3={()=>{console.log('Desconectar')}}
        />
      </View>
    )
  }
}

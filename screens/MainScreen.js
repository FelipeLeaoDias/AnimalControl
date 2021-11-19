import React, {Component} from 'react'
import {Text, StyleSheet, Image, View, Dimensions} from 'react-native';

import MainHeader from '../components/MainHeader'
import MainBodyComponent from '../components/Main/MainBodyComponent'
import MainFooterComponent from '../components/Main/MainFooterComponent'
import PopUpMenu from '../components/PopUpMenu'
import ScreenBody from '../components/ScreenBody'

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
        <ScreenBody>
          <MainBodyComponent navigation={this.props.navigation}/>
          <MainFooterComponent navigation={this.props.navigation}/>
        </ScreenBody>
      </View>
    )
  }
}

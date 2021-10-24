import React, {Component} from 'react'
import {Text, StyleSheet, Image, View, Dimensions} from 'react-native';

import MainHeader from '../components/MainHeader'
import MainBodyComponent from '../components/Main/MainBodyComponent'
import MainFooterComponent from '../components/Main/MainFooterComponent'

export default class MainScreen extends Component {
  render(){
    return(
      <View>
        <MainHeader />
        <MainBodyComponent />
        <MainFooterComponent />
      </View>
    )
  }
}

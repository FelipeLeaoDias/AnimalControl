import React, {Component} from 'react'
import {View } from 'react-native'

import MainHeader from '../components/MainHeader'
import BaseFooter from '../components/BaseFooter'
import ProductivityBody from '../components/Productivity/ProductivityBody'

export default class ProductivityScreen extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        <MainHeader />
        <ProductivityBody />
        <BaseFooter title2="Filtro"/>
      </View>
    )
  }
}

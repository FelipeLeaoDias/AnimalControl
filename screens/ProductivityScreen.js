import React, {Component} from 'react'
import {View } from 'react-native'

import MainHeader from '../components/MainHeader'
import BaseFooter from '../components/BaseFooter'
import ProductivityBody from '../components/Productivity/ProductivityBody'
import ScreenBody from '../components/ScreenBody'

export default class ProductivityScreen extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        <ScreenBody>
          <ProductivityBody navigation={this.props.navigation}/>
          <BaseFooter title2="Filtro" navigation={this.props.navigation}/>
        </ScreenBody>
      </View>
    )
  }
}
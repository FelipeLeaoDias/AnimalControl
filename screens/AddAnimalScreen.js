import React, {Component} from 'react'
import {Dimensions, ScrollView, StyleSheet} from 'react-native'

import ScreenBody from '../components/ScreenBody'
import MainField from '../components/MainField'
import BaseFooter from '../components/BaseFooter'
import AddAnimalBody from '../components/AddAnimal/AddAnimalBody'
import MyButton from '../components/ButtonComponent'

export default class AddAnimalScreen extends Component {
  render() {
    return (
      <ScreenBody >
        <ScrollView style={this.styles.container}>
        <MainField title="Registrando Animal">
        </MainField>
        <AddAnimalBody>
          
        </AddAnimalBody>

      </ScrollView >
      <BaseFooter navigation={this.props.navigation} />
      <MyButton />
      </ScreenBody>
    )
  }

  height = Dimensions.get('window').height;
  styles = StyleSheet.create({
    container:{
      minHeight: Dimensions.get('screen').height - 201,
      maxHeight: Dimensions.get('screen').height - 201,
    }
  })
}

const styles = StyleSheet.create({})

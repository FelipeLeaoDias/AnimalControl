import React, {Component} from 'react'
import {Dimensions, ScrollView, StyleSheet} from 'react-native'

import ScreenBody from '../components/ScreenBody'
import MainField from '../components/MainField'
import BaseFooter from '../components/BaseFooter'
import InfoCard from '../components/Details/InfoCard'
import CharacteristicsCard from '../components/Details/CharacteristicsCard'
import VaccineCard from '../components/Details/VaccineCard'
import AddAnimalBody from '../components/AddAnimal/AddAnimalBody'

export default class AddAnimalScreen extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <ScreenBody >
        <ScrollView style={this.styles.container}>
        <MainField title="Registrando Animal">
        <AddAnimalBody>
        </AddAnimalBody>
        </MainField>
        

      </ScrollView >
      <BaseFooter title2="Finalizar" navigation={this.props.navigation.navigate('Animal')}/>
      </ScreenBody>
    );
  }

  height = Dimensions.get('window').height;
  styles = StyleSheet.create({
    container:{
      minHeight: Dimensions.get('screen').height - 201,
      maxHeight: Dimensions.get('screen').height - 201,
      backgroundColor : '#FFFFFF'

    }

  })
}

import React, {Component} from 'react'
import {Dimensions, ScrollView, StyleSheet} from 'react-native'

import ScreenBody from '../components/ScreenBody'
import MainField from '../components/MainField'
import BaseFooter from '../components/BaseFooter'
import InfoCard from '../components/Details/InfoCard'
import CharacteristicsCard from '../components/Details/CharacteristicsCard'
import VaccineCard from '../components/Details/VaccineCard'

export default class AnimalDetailsScreen extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <ScreenBody >
        <ScrollView style={this.styles.container}>
        <MainField title="Animal Registrado">
          <InfoCard />
          <CharacteristicsCard />
        </MainField>
        <MainField title="Vacinas">
          <VaccineCard />
        </MainField>

      </ScrollView >
      <BaseFooter navigation={this.props.navigation} />
      </ScreenBody>
    );
  }

  height = Dimensions.get('window').height;
  styles = StyleSheet.create({
    container:{
      minHeight: Dimensions.get('screen').height - 201,
      maxHeight: Dimensions.get('screen').height - 201,
    }
  })
}

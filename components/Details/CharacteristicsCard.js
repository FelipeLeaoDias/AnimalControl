import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

export default class CharacteristicsCard extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={this.styles.container}>
        <View style={this.styles.header}>
          <Text>Características</Text>
        </View>
        <View style={this.styles.body}>
          <Text>Dócil, vermelha, patas brancas, cabeça branca</Text>
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      minWidth: Dimensions.get('window').width * 0.7,
      maxWidth: Dimensions.get('window').width * 0.7,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#C4C4C4',
      borderColor: 'black',
      borderWidth: 1,
      minHeight: 40,
    },
    body: {
      minWidth: Dimensions.get('window').width * 0.7,
      maxWidth: Dimensions.get('window').width * 0.7,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 1,
      minHeight: 50,
    },
  })
}

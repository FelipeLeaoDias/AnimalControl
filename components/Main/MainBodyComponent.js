import React,{Component} from 'react'
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native'
import MainField from '../MainField'

export default class MainBodyComponent extends Component {
  height = Dimensions.get('window').height

  render() {
    return (
      <MainField title="Animais Registrados">
        <FlatList horizontal={true}
          style={{minHeight:this.height/2 * 0.70}}
        />
      </MainField>
    );
  }

  
}

import React, {Component, useState} from 'react'
import {View, StyleSheet} from 'react-native'
import { CheckBox } from 'react-native-elements';



export default class SexSelection extends Component {
  constructor(props) {
    super(props);
    this.state = { macho: false };
    this.state = { femea: false };
  }
  
  render() {

    return (
      <View>
        <CheckBox
          title="Macho"
          checked={this.state.macho}
          center
          onPress={() => this.setState({ macho: !this.state.macho, femea: false})}
          containerStyle={styles.formCheckbox}
        />
        <CheckBox
          title="Femea"
          checked={this.state.femea}
          center
          onPress={() => this.setState({ macho: false, femea: !this.state.femea})}
          containerStyle={styles.formCheckbox}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 20
  },
  formCheckbox: {
    margin: 10,
    backgroundColor: '#E3FFE9',
  },
});
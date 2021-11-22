import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class AddAnimalBody extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <Text> Testando </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    minWidth: Dimensions.get('window').width * 0.7,
    maxWidth: Dimensions.get('window').width * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1BF38B',
    borderColor: 'black',
    borderWidth: 1,
    minHeight: Dimensions.get('window').height * 0.7,
    maxHeight: Dimensions.get('window').height * 0.7,
  },
  body: {
    minWidth: Dimensions.get('window').width * 0.7,
    maxWidth: Dimensions.get('window').width * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    minHeight: Dimensions.get('window').height * 0.7,
    maxHeight: Dimensions.get('window').height * 0.7,
  },
})

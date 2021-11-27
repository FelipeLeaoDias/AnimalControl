import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';


export default class SelectionDad extends Component {
  constructor(props){
   super(props);
  }

  state = {
    dad: ''
  }

  render() {
    return (
      <View style={this.styles.Conteiner}>
        <Picker
          selectedValue={this.state.dad}
          style={this.styles.PickerComponent}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({dad: itemValue})
          }>
          <Picker.Item label="João" value="Xuruão" />
          <Picker.Item label="Icaro" value="Bira" />
          <Picker.Item label="Pedro" value="Duve" />
          <Picker.Item label="Paulo" value="Rox" />
          <Picker.Item label="Thiago" value="Escudeiro" />
          <Picker.Item label="Miguez" value="Ming" />
          
        </Picker>

      </View>

    )


  }
  styles = StyleSheet.create({
    
    PickerComponent: {
      width: 220,
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16,
      fontWeight: 'bold',
      
    },
    Conteiner: {
      marginTop: 10,
      width: 220,
      backgroundColor: '#CFFFDA',
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#CFFFDA',
      borderRadius: 10,
    }
  })
}

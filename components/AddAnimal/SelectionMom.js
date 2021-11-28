import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';


export default class SelectionMom extends Component {
  constructor(props){
   super(props);
  }

  state = {
    mom: ''
  }

  render() {
    return (
      <View style={this.styles.buttoncenter}>
      <View style={this.styles.Conteiner}>
        <Picker
          selectedValue={this.state.mom}
          style={this.styles.PickerComponent}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({mom: itemValue})
          }>
          <Picker.Item label="Julia" value="Ju" />
          <Picker.Item label="Gabriela" value="Gaby" />
          <Picker.Item label="Mariana" value="Mari" />
          <Picker.Item label="Bianca" value="Bag" />
          <Picker.Item label="Isadora" value="Isa" />
          <Picker.Item label="Miguez" value="Ming" />
          
        </Picker>
        </View>
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
      backgroundColor: '#E3FFE9',
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      borderColor:"black",
      borderWidth:1,
    },
    buttoncenter: {
      alignItems: 'center',
    },
  })
}

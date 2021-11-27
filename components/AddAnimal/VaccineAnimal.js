import React, { Component, useState } from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import MainField from '../MainField';
import { TextInput } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';
import SelecaoSexo from './SexSelection';
import SelectionMom from './SelectionMom';
import SelectionDad from './SelectionDad';
import DataSelect from './DataSelect';
//import DataSelect from './DataSelect';


export default class VaccineAnimal extends Component {
  constructor(props){
    super(props);
  }


  render() {
    
    //const [Selected, setSelected] = useState(false)
    return (
      <View style={this.styles.Container}>
        <View style={this.styles.Register}>

          <MainField title="Nome da Vacina">
          <TextInput 
          placeholder="Digite o nome da vacina já aplicada" 
          style={this.styles.input}
          />
          </MainField>
         
        </View>
        
      </View>
    )
  }

  styles = StyleSheet.create({

    input: {
      marginTop: 10,
      padding: 10,
      width: 300,
      backgroundColor: '#E3FFE9',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 10,
      borderColor:"black",
      borderWidth:1,
    }
   
  })
}

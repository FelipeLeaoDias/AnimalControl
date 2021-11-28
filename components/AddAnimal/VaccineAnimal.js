import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MainField from '../MainField';
import { TextInput } from 'react-native-gesture-handler';
import DataSelect from './DataSelect';
import MyButton from '../ButtonComponent';
import VaccineList from './VaccineList.js';


export default class VaccineAnimal extends Component {
  constructor(props){
    super(props);
  }
  

  AdicionarVacina = () => {
    
  }

  render() {
  
    return (
      <View>
        <View style={this.styles.Register}>

          <MainField title="Cadastro de Vacinas">
            <View style={this.styles.TitleWidth}>
            <Text style={this.styles.Title}>Nome da Vacina</Text>
            </View>
          <TextInput 
          placeholder="Digite o nome da vacina já aplicada" 
          style={this.styles.input}
          />


            <View style={this.styles.TitleWidth}>
              <Text style={this.styles.Title}>Data da Vacina</Text>
            </View>
            <View style={this.styles.buttoncenter}>
              <DataSelect></DataSelect>
            
              <MyButton style={{...this.styles.button, backgroundColor: '#E3FFE9'}} 
                title="Adicionar Vacina"
                title_style={{fontSize: 16}}
                onPress={this.AdicionarVacina}
              />
            </View>
            <VaccineList></VaccineList>
            
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
    },
    Title: {
      fontSize: 16,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },
    TitleWidth: {
      width: 160,
      paddingTop: 20,
    },
    button: {
      marginTop: 20,
      maxHeight: 40,
      maxWidth: 100,

    },
    buttoncenter: {
      alignItems: 'center',
    },
  })
}

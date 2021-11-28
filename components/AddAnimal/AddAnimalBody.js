import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import MainField from '../MainField';
import { TextInput } from 'react-native-gesture-handler';
import SexSelection from './SexSelection';
import SelectionMom from './SelectionMom';
import SelectionDad from './SelectionDad';
import DataSelect from './DataSelect';
import VaccineAnimal from './VaccineAnimal';



export default class AddAnimalBody extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <View style={this.styles.container}>
        <View>
          <MainField title="Nome do Animal">
            <TextInput 
            placeholder="Digite o Nome do Animal" 
            style={this.styles.input}
            />
          </MainField>

          <MainField title="Caracteristicas">
            <TextInput 
            placeholder="Digite as caracteristicas do animal" 
            style={this.styles.input}
            />
          </MainField>
          
          <MainField title="Sexo do Animal">
            <SexSelection></SexSelection>
          </MainField>

          <MainField title="Selecione a Mãe">
            <Text>
              OBSERVAÇÃO: Para selecionar a mãe, deve-se cadastrar o animal anteriormente!
            </Text>
            <SelectionMom></SelectionMom>
          </MainField>
          
          <MainField title="Selecione o Pai">
            <Text>
              OBSERVAÇÃO: Para selecionar o Pai, deve-se cadastrar o animal anteriormente!
            </Text>
            <SelectionDad></SelectionDad>
          </MainField>

          <MainField title="Numero do Brinco">
            <TextInput 
            placeholder="Digite o numero do brinco livre" 
            style={this.styles.input}
            keyboardType="numeric"
            />
          </MainField>

          <MainField title="Cor do Animal">
            <TextInput 
            placeholder="Digite a cor do animal" 
            style={this.styles.input}
            />
          </MainField>

          <MainField title="Data de Nascimento">
            <DataSelect></DataSelect>
          </MainField>

          <VaccineAnimal></VaccineAnimal>

          

        </View>
        
      </View>
    )
  }
  height = Dimensions.get('window').height
  styles = StyleSheet.create({
    check: {
      fontSize: 50,
    },
    Title: {
      fontSize: 20,
    },
    container: {
      minWidth: Dimensions.get('window').width * 0.9,
      maxWidth: Dimensions.get('window').width * 0.9,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00D870',
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 1,
      padding: 20,
      marginTop: 10,
      paddingBottom: 300,
    },
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

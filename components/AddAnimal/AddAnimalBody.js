import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import MainField from '../MainField';
import { TextInput } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';
import SelecaoSexo from './SelecaoSexo';
import SelectionMom from './SelectionMom';
import SelectionDad from './SelectionDad';


export default class AddAnimalBody extends Component {
  constructor(props){
    super(props);
  }


  render() {
    
    //const [Selected, setSelected] = useState(false)
    return (
      <View style={this.styles.container}>
        <View style={this.styles.Register}>

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
          <CheckBox
            style={this.styles.check}
            title="Macho"
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
          //  checked={Selected}
          //  onPress={() => setSelected(!Selected)}
          />
          <CheckBox
            style={this.styles.check}
            title="Fêmea"
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
          //  checked={Selected}
          //  onPress={() => setSelected(!Selected)}
          />
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

          <MainField title="Data de Nascimento">
            <TextInput 
            placeholder="Digite a data de nascimento" 
            style={this.styles.input}
            keyboardType="numeric"
            />
          </MainField>









          
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
      backgroundColor: '#04D26F',
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 1,
      padding: 20,
      marginTop: 10,
    },
    input: {
      marginTop: 10,
      padding: 10,
      width: 300,
      backgroundColor: '#CFFFDA',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 10,
    }
   
  })
}

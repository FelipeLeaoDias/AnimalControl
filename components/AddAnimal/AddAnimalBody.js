import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import MainField from '../MainField';
import { TextInput } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';

export default class AddAnimalBody extends Component {
  constructor(props){
    super(props);
  }

  render() {

    const [isSelected, setSelected] = useState(false)
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
            title="Macho"
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={isSelected}
            onPress={() => setSelected(!isSelected)}
          />

          </MainField>

          
        </View>
        
        
      </View>
    )
  }
  height = Dimensions.get('window').height
  styles = StyleSheet.create({
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
      margin: 10,
      
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

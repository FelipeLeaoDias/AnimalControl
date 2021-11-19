import React, {Component} from 'react'
import {ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions} from 'react-native'
import MyButton from '../ButtonComponent'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class RegisterBody extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <KeyboardAwareScrollView>
      <View style={this.style.container}>
      <View style={{marginVertical: 10,}}>
          <Text style={this.style.form}>CPF/CNPJ</Text>
          <TextInput keyboardType="numeric"
          required email autoCapitalize='none'
          style={this.style.input}
      /> 
        </View>
        <View >
          <Text style={this.style.form}>Usuário</Text>
          <TextInput keyboardType='default'  
          required autoCapitalize="none"
          style={this.style.input}
      /> 
        </View>
        <View >
          <Text style={this.style.form}>Email</Text>
          <TextInput keyboardType='email-address'  
          required email autoCapitalize="none"
          style={this.style.input}
      /> 
        </View>
        <View >
          <Text style={this.style.form}>Senha</Text>
          <TextInput keyboardType='default'  
          secureTextEntry required autoCapitalize="none"
          style={this.style.input}
      /> 
        </View>
        <View >
          <Text style={this.style.form}>Confirmar Senha</Text>
          <TextInput keyboardType='default'  
          secureTextEntry required autoCapitalize="none"
          style={this.style.input}
      /> 
        </View>


        <View style={{marginVertical:15}}>
          <MyButton title="Cadastrar" style={{maxHeight:50}}/>
        </View>
      </View>
      </KeyboardAwareScrollView>

    )
  }

  style = StyleSheet.create({
    container:{
      // padding: 20,
      // marginTop: this.props.height? this.props.height: Dimensions.get('window').height - Dimensions.get('window').height *1.3,
      maxHeight: 400,
      alignItems: 'center',
      width: this.props.width ? this.props.width : Dimensions.get('window').width,
      alignContent: 'space-between',
    },
    input:{
      borderColor:"#000",
      borderWidth:0.3,
      borderRadius:2,
      paddingHorizontal: 5,
      width: this.props.width ? this.props.width : Dimensions.get('window').width * 0.7,
    },
    form:{
      fontSize: 18,
    },
  })
}

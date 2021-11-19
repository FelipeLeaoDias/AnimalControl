import React, {Component} from 'react'
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions} from 'react-native'
import MyButton from '../ButtonComponent'

export default class LoginBody extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={this.style.container}>
        <View style={{marginVertical: 10,}}>
          <Text style={this.style.form}>Login</Text>
          <TextInput keyboardType="email-address"
          required email autoCapitalize='none'
          style={this.style.input}
      /> 
        </View>
        <View >
          <Text style={this.style.form}>Senha</Text>
          <TextInput keyboardType='default'  
          secureTextEntry required autoCapitalize="none"
          style={this.style.input}
      /> 
        <View style={{marginTop: 5,}}>
          <TouchableOpacity>
            <Text  style={{fontSize:12}}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
      </View>
        </View>
        <View style={{marginVertical:15}}>
          <MyButton title="Entrar" 
          style={{maxHeight: 50}}
          onPress={() => {this.props.navigation.navigate('Main')}}
        />
        </View>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Register')}}>
            <Text style={{fontSize:14}}>Não possui uma conta? Cadastre-se</Text>
          </TouchableOpacity>
      </View>

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

import React,{Component} from 'react'
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native'
import MainField from '../MainField'
import ImageButton from '../ImageButton'
import MyButton from '../ButtonComponent'
import {Ionicons} from 'react-native-vector-icons'

export default class MainFooterComponent extends Component {
  constructor(props){
    super(props);
  }

  width= Dimensions.get('window').width
  render(){
    return (
      <MainField title="Administração">
        <View style={this.styles.container}>
          <ImageButton 
            source={require('../../assets/ExtratoGeral.png')} text="Extrato Geral"
          />
          <ImageButton 
            onPress={() => {this.props.navigation.navigate('Productivity')}} 
            source={require('../../assets/Produtividade.png')} text="Produtividade"/>
        </View>
        <View style={this.styles.container}>
          <ImageButton source={require('../../assets/Cronograma.png')} text="Cronograma"/>
        </View>
      </MainField>
    )
  }
  styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      justifyContent: 'space-evenly',
      margin: this.width * 0.05
    }
  })
}

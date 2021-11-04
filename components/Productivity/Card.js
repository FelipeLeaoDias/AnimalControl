import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

export default class Card extends Component {
  constructor(props){
    super(props);
  }

  width = Dimensions.get('window').width

  render(){
    return(
      <View style={this.styles.container}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.props.data.title}</Text>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Descrição:</Text>
          <Text>{this.props.data.description}</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Data:</Text>
          <Text>{this.props.data.date}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>R$ {this.props.data.price}</Text>
        </View>
      </View>
    )
  }

  styles = StyleSheet.create({
    container: {
      borderColor: 'black',
      borderWidth: 1,
      marginTop: 15,
      minWidth: this.width * 0.7,
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderRadius: 10,
    }
  })
}

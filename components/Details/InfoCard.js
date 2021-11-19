import React, {Component} from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

export default class InfoCard extends Component {
  constructor(props){
    super(props);
  }

  image = require('../../assets/cow.png')

  render() {
    return(
      <View style={this.styles.container}>
        <View style={{marginRight: 10}}>
          <Image  source={this.image}/>
        </View>
        <View style={{marginLeft: 10, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={this.styles.text}>Pérola</Text>
            <Text style={this.styles.text}>16/03/20</Text>
            <Text style={this.styles.text}>Fêmea</Text>
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20
    },
    text: {
      marginBottom: 10,
      fontSize: 20,
    }
  })

}

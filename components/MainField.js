import React,{Component} from 'react'
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native'

export default class MainField extends Component {
  constructor(props){
    super(props)
  }
  width = Dimensions.get('window').width
  height = Dimensions.get('window').height

  render(){
    return (
      <View style={this.styles.container}>
        <View style={this.styles.title_container}>
          <Text style={{fontSize: 20}}>{this.props.title}</Text>
        </View>
        <View>
          {this.props.children}
        </View>
      </View>

    )
  }
styles= StyleSheet.create({
    container:{
      margin: this.width *0.05
    },
    title_container: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    }
  })

}



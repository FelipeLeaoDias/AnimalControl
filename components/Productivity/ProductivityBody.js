import React, {Component} from 'react'
import {View,Text, FlatList, TouchableOpacity, Dimensions, StyleSheet} from 'react-native'

import MainField from '../MainField'
import Card from './Card'

export default class ProductivityBody extends Component {
  constructor(props){
    super(props)
  }
  
  height= Dimensions.get('window').height;
  data = [
    {
      key: 1, 
      data:{
        title: "Compra de Cerca", 
        description: "Compra de 150 pilares de cerca", 
        date:"04/03/2020", 
        price: -3500.00
      }
    },
    {
      key:2,
      data:{
        title: "Venda de leite", 
        description: "Venda do extrato do leite", 
        date:"04/03/2020", 
        price: 5000.00
      }
    },
    {
      key: 3, 
      data:{
        title: "Compra de Gado", 
        description: "Compra de 1 Boi", 
        date:"04/03/2020", 
        price: -5500.00
      }
    },
  ]
  render(){
    return(
      <View>
        <View style={{borderColor: 'black', borderWidth: 1}}>
          <MainField title="Extrato">
            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 5, paddingHorizontal: 5}}>
              <TouchableOpacity>
                <Text style={{fontSize: 16}}>Geral</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{fontSize: 16}}>Entrada</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{fontSize: 16}}>Saida</Text>
              </TouchableOpacity>
            </View>
          </MainField>
        </View>
       <FlatList style = {this.styles.listContainer} data={this.data}
        renderItem={itemData => (
          <Card data={itemData.item.data}/>
        )} contentContainerStyle={{alignItems: 'center'}}/> 
      </View>
    )
  }

  styles = StyleSheet.create({
    listContainer: {
      minHeight: this.height - 257,
      maxHeight: this.height - 257,
      // maxHeight: this.height - 100,
      alignContent: 'center',
      // justifyContent: 'center',
    }
  })
}

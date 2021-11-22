import React, {Component} from 'react'
import {View, StyleSheet, FlatList, TouchableOpacity, Dimensions} from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';

import ScreenBody from '../components/ScreenBody'
import BaseFooter from '../components/BaseFooter'
import MainField from '../components/MainField'


export default class AnimalsScreen extends Component {
  constructor(props){
    super(props)
  }

  height = Dimensions.get('window').height;

  data = [
    {
      key: '1',
      data: ["b1", "b2", "b3", "b4"]
    },
    {
      key: '2',
      data: ["b1", "b2", "b3", "b4"]
    }

  ]

  render(){
    return(
      <View>
        <ScreenBody>
          <MainField title="Animais Registrados">
            <Table 
              borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}
              style={{marginTop: 10}}
            >
              <Row 
                data={["Nome", "Brinco", "Cor", "Nascimento"]} 
                style={this.styles.header} 
                textStyle={this.styles.text}/>
            </Table>
            <FlatList 
              style={this.styles.flatlist}
              data={this.data}
              renderItem={itemData => (
               <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details')}>
                  <Row 
                    data={itemData.item.data} 
                    style={this.styles.row}
                    textStyle={{textAlign: 'center'}}
                  />
                </TouchableOpacity>
              </Table>
              )}
            />
          </MainField>
          <BaseFooter title2="Adicionar" navigation={this.props.navigation.navigate('AddAnimal')}/>
        </ScreenBody>
      </View>
    )
  }

 styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  // dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
  flatlist: {
    minHeight: Dimensions.get('screen').height - 338,
    maxHeight: Dimensions.get('screen').height - 338,
  },
});
}

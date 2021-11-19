import React, {Component} from 'react'
import {Dimensions, FlatList, View, StyleSheet} from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';

export default class VaccineCard extends Component {
  constructor(props){
    super(props);
  }

  data = [
    ["Brucelose", "20/06/20"], ["Clostridioses", "28/10/20"],
    ["Brucelose", "20/06/20"], ["Clostridioses", "28/10/20"],
    ["Brucelose", "20/06/20"], ["Clostridioses", "28/10/20"],
    ["Brucelose", "20/06/20"], ["Clostridioses", "28/10/20"],
    ["Brucelose", "20/06/20"], ["Clostridioses", "28/10/20"],
  ]

  render(){
    return(
      <View>
        <Table 
          borderStyle={{borderWidth: 1, borderColor: '#000'}}
          style={{marginTop: 10}}
        >
          <Row 
            data={["Vacina", "Data"]} 
            style={this.styles.header} 
            textStyle={this.styles.text}/>
        </Table>
        <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
          {
            this.data.map((rowData) => (
              <Row
                data={rowData}
                textStyle={this.styles.text}
                style={{height: 40}}
              />
            ))
          }
        </Table> 
      </View>
    );
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

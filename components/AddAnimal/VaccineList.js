import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';



export default class VaccineList extends Component {
  constructor(props){
    super(props);
  }
  data = [
    ["Brucelose", "20/06/20"], 
    ["Clostridioses", "28/10/20"],
  ]
  render(){
    return(
      <View style={{marginTop: -250}}>
        <Table 
          borderStyle={{borderWidth: 1, borderColor: '#000'}}
          style={{marginTop: 10}}
        >
          <Row 
            data={["Vacina", "Data"]} 
            style={this.styles.header} 
            textStyle={this.styles.text}/>
        </Table>
        <Table borderStyle={{borderWidth: 1, borderColor: '#000'}}>
          {
            this.data.map((rowData) => (
              <Row
                data={rowData}
                textStyle={this.styles.text}
                style={{height: 40, backgroundColor: '#E3FFE9'}}
              />
            ))
          }
        </Table> 
      </View>
    );
  }
 styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#000' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },

});
}
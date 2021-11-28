import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker'
export default class DataSelect extends Component {
  constructor(props){
   super(props);
   this.state = {date:"27-11-2021"}
  };


  render() {
    return (
      <View style={this.styles.buttoncenter}>
      <View style={this.styles.Conteiner}>
        <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        format="DD-MM-YYYY"
        minDate="01-01-2000"
        maxDate="31-12-2050"
        
        customStyles={{
          dateIcon: {
            position: 'absolute',
            right: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            borderRadius: 10,
          }
       
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>
      </View>
    )


  }
  
  styles = StyleSheet.create({
  
    Conteiner: {
      marginTop: 10,
      width: 202,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#E3FFE9',
      borderRadius: 10,
      borderColor:"black",
      borderWidth:1,
      
    },
    buttoncenter: {
      alignItems: 'center',
    },
  })
}
// import React,{Component} from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainScreen from '../screens/MainScreen'

const MainNavigator = createStackNavigator({
    // Login:{
    //     navigationOptions: {
    //         headerShown: false,
    //       },
    //     screen:LoginScreen,
    // },
    // Register:{
    //   navigationOptions: {
    //       headerShown: false,
    //       // title:'Registrar'
    //     },
    //   screen:RegisterScreen,
    // },
    Main: {
        navigationOptions: {
            headerShown: false,
          },
        screen: MainScreen,
    }
})


export default createAppContainer(MainNavigator);

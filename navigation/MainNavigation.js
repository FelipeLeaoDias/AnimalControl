// import React,{Component} from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainScreen from '../screens/MainScreen'
import ProductivityScreen from '../screens/ProductivityScreen'
import AnimalsScreen from '../screens/AnimalsScreen'
import AnimalDetailsScreen from '../screens/AnimalDetailsScreen.js'

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
    // Main: {
    //     navigationOptions: {
    //         headerShown: false,
    //       },
    //     screen: MainScreen,
    // },
    // Productivity: {
    //     navigationOptions: {
    //         headerShown: false,
    //       },
    //     screen: ProductivityScreen,
    // },
    Animal: {
        navigationOptions: {
            headerShown: false,
          },
        screen: AnimalsScreen,
    },
    Details: {
        navigationOptions: {
            headerShown: false,
          },
        screen: AnimalDetailsScreen,
    }
})


export default createAppContainer(MainNavigator);

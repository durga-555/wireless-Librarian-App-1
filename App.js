import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createAppContainer} from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SearchScreen from './Screens/SearchScreen';
import TransactionScreen from './Screens/TransactionScreen';


export default class App extends React.Component {
  render() {
    return (
        <Appcontainer/>
      )
  }
}

const TabNavigator = createBottomTabNavigator({
  Search : {screen:SearchScreen},
  Transaction :{screen:TransactionScreen} 
})
const Appcontainer = createAppContainer(TabNavigator)
import React from 'react';
import { createAppContainer,createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/Home'
import DetailScreen from './screens/DetailNewsApi'

const RootStack = createStackNavigator({
  Home:{
    screen: HomeScreen
  }, 
  DetailNewsApi:{
    screen: DetailScreen
  }
},{
  initialRouteName: 'Home'
})

export default createAppContainer(RootStack);

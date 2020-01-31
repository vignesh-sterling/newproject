import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import login from './App';
import uiScreen from './uiScreen'

export default  RootStack = StackNavigator(
  {
    login: { screen: login },
    uiScreen:{screen:uiScreen},
   
  },
  {
    headerMode: 'none',

  },
);



import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Header from './Shared/Header';

//  Redux
import { Provider } from 'react-redux';
import store from './Redux/store';

//Navigation
import Main from './Navigators/Main';

//Screens
//import ProductContainer from './screens/Products/ProductContainer';
import ProductContainer from './screens/products/ProductContainer';


LogBox.ignoreAllLogs(true); //Para ignorar los logs

export default function App() {
  return (
    <Provider  store={store}>
      <NavigationContainer>
        <Header />
        <Main/>
      </NavigationContainer>
    </Provider>
  ); 
}


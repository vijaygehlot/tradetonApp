import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import DrawerNav from './src/navigation/DrawerNav';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

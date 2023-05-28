import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import About from '../screens/About';
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerTitle: 'Strategies'}}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;

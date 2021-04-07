import 'react-native-gesture-handler';
import React, {useContext} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from 'styled-components';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Control from '../screens/Control';

import {Ball} from './styles';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          background: theme.background,
          border: theme.purple,
          text: theme.foreground,
          card: theme.background,
          notification: theme.red,
          primary: theme.pink,
        },
      }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName = 'home';

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Control') {
              iconName = 'remote-tv';
            }

            return (
              <MaterialCommunityIcons name={iconName} size={30} color={color} />
            );
          },
          tabBarLabel: ({color, focused}) => {
            return focused && <Ball color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Control" component={Control} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

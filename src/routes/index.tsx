import 'react-native-gesture-handler';
import React, {useContext} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import {ThemeContext} from 'styled-components';

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
          text: theme.cyan,
          card: theme.background,
          notification: theme.red,
          primary: theme.pink,
        },
      }}>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

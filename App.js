import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AllMoviesScreen from './src/screens/AllMoviesScreen';
import LatestMoviesScreen from './src/screens/LatestMoviesScreen';
import UpcomingMoviesScreen from './src/screens/UpcomingMoviesScreen';

const Tabs = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 20,
          },
        }}>
        <Tabs.Screen name="All" component={AllMoviesScreen} />
        <Tabs.Screen name="Latest" component={LatestMoviesScreen} />
        <Tabs.Screen name="Upcoming" component={UpcomingMoviesScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

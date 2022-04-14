import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MapsScreen from '../screens/MapsScreen';
import APIScreen from '../screens/APIScreen';
import CardsRoutes from './Cards';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          return route.name === 'Карта' ? (
            <IconFontAwesome
              name="map-o"
              size={20}
              color={'black'}
              style={{ marginTop: 3 }}
            />
          ) : route.name === 'Погода' ? (
            <MaterialCommunityIcons
              name="weather-cloudy"
              size={20}
              color={'black'}
              style={{ marginTop: 3 }}
            />
          ) : route.name === 'Карточки' ? (
            <MaterialCommunityIcons
              name="cards"
              size={20}
              color={'black'}
              style={{ marginTop: 7 }}
            />
          ) : (
            ''
          );
        },
        tabBarLabelStyle: { fontSize: 15, marginBottom: 2 },
        headerTitle: 'Cards',
      })}
    >
      <Tab.Screen name="Карта" component={MapsScreen} />
      <Tab.Screen name="Погода" component={APIScreen} />
      <Tab.Screen name="Карточки" component={CardsRoutes}/>
    </Tab.Navigator>
  );
};

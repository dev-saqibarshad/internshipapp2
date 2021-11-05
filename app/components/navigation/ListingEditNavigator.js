import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListEditingScreen from '../../screens/ListingEditScreen';
import MapSC from '../../screens/MapSC';

const Stack = createNativeStackNavigator();

const ListEditingNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerTitleAlign: 'center',
      }}
      name="ListingEdit"
      component={ListEditingScreen}></Stack.Screen>
    <Stack.Screen options={{headerShown: false}} name="Map" component={MapSC} />
  </Stack.Navigator>
);

export default ListEditingNavigator;

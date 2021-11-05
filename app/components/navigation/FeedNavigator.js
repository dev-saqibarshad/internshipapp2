import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListingsScreen from '../../screens/ListingsScreen';
import ListingDetailScreen from '../../screens/ListingDetailScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{presentation: 'card'}}>
    <Stack.Screen name="Listings" component={ListingsScreen}></Stack.Screen>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="ListingDetails"
      component={ListingDetailScreen}></Stack.Screen>
  </Stack.Navigator>
);

export default FeedNavigator;

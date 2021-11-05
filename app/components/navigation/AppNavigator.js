import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../../screens/AccountScreen';
import ListEditingScreen from '../../screens/ListingEditScreen';
import ListingsScreen from '../../screens/ListingsScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewListingButton from './NewListingButton';
import ListEditingNavigator from './ListingEditNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            size={size}
            color={color}
            name="home"></MaterialCommunityIcons>
        ),
      }}
      name="Feed"
      component={FeedNavigator}></Tab.Screen>
    <Tab.Screen
      options={({navigation}) => ({
        headerShown: false,
        tabBarButton: () => (
          <NewListingButton
            onPress={() =>
              navigation.navigate('ListingsEdit')
            }></NewListingButton>
        ),
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            size={size}
            color={color}
            name="plus-circle"></MaterialCommunityIcons>
        ),
      })}
      name="ListingsEdit"
      component={ListEditingNavigator}></Tab.Screen>
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            size={size}
            color={color}
            name="account"></MaterialCommunityIcons>
        ),
      }}
      name="Account"
      component={AccountNavigator}></Tab.Screen>
  </Tab.Navigator>
);

export default AppNavigator;

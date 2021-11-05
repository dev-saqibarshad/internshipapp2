import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, Text, Button, Image, Platform, Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Constants} from 'react-native-unimodules';
import {
  request,
  PERMISSIONS,
  setPermissionResult,
} from 'react-native-permissions';

import ImageCropPicker from 'react-native-image-crop-picker';

import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import AppTextInput from './app/components/AppTextInput';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListEditingScreen from './app/screens/ListingEditScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import MapSC from './app/screens/MapSC';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './app/components/navigation/AuthNavigator';
import NavigationTheme from './app/components/navigation/NavigationTheme';
import AppNavigator from './app/components/navigation/AppNavigator';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OfflineNotice from './app/components/OfflineNotice';

const Stack = createNativeStackNavigator();

export default function App() {
  const netInfo = useNetInfo();

  // const requestPermission = () => {
  //   request(
  //     Platform.OS === 'ios'
  //       ? PERMISSIONS.IOS.CAMERA
  //       : PERMISSIONS.ANDROID.CAMERA,
  //   )
  //     .then(result => {
  //       setPermissionResult(result);
  //     })
  //     .catch(err => console.log('permission denied'));
  // };

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  return (
    <View style={{flex: 1}}>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </View>
  );
}

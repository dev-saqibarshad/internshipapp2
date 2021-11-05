import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {
  Alert,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

export default function WelcomeScreen({navigation}) {
  // const navigation = useNavigation();

  handlePress = () => {
    Alert.alert('Hello');
  };

  return (
    <ImageBackground
      blurRadius={30}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <AppText style={styles.logoText}>Sell what you dont need.</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          color="red"
          onPress={() => navigation.navigate('Login')}
          title="login"></AppButton>
        <AppButton
          color="grey"
          onPress={() => navigation.navigate('Register')}
          title="register"></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
  logoContainer: {
    top: 150,
    position: 'absolute',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});

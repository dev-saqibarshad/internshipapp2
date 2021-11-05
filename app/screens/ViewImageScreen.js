import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Icon
        style={styles.closeButton}
        name="close"
        size={50}
        color="white"></Icon>
      <Icon
        style={styles.deleteButton}
        name="delete"
        size={40}
        color="white"></Icon>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  closeButton: {
    width: 50,
    height: 50,

    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteButton: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    right: 30,
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListItemDeleteAction({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.swipe}>
      <Icon style={styles.icon} name="trash-can" size={30} color="white"></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  swipe: {
    backgroundColor: 'red',
    width: 70,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Icon({
  color = 'white',
  backgroundColor = 'black',
  size = 70,
  name,
}) {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor, width: size, height: size, borderRadius: size / 2},
      ]}>
      <Icons name={name} size={size / 2} color={color}></Icons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

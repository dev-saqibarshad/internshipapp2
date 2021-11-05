import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

export default function CategoryPickerItem({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.conatiner}>
      <View style={styles.inner}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}></Icon>
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  inner: {},
  conatiner: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '33%',
  },

  label: {
    marginTop: 10,
    textAlign: 'center',
  },
});

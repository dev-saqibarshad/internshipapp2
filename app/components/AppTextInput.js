import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/styles';

export default function AppTextInput({width, iconName, ...otherProps}) {
  return (
    <View style={[styles.container, {width}]}>
      {iconName && (
        <Icons style={styles.icon} name={iconName} color="black" size={25} />
      )}
      <TextInput style={[styles.textInput, defaultStyles]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10,
  },
  container: {
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#F8BBD0',
    flexDirection: 'row',
    padding: 5,
    width: '100%',
    marginVertical: 5,
    minHeight: 50,
  },
  textInput: {
    color: '#880E4F',
    paddingRight: 20,
    paddingLeft: 10,
  },
});

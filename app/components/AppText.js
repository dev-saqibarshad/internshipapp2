import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

export default function AppText({children, style, ...otherProps}) {
  return (
    <Text numberOfLines={1} {...otherProps} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 16,
        fontFamily: 'Avenir',
      },
      android: {
        fontSize: 14,
        fontFamily: 'roboto',
      },
    }),
    color: 'black',
  },
});

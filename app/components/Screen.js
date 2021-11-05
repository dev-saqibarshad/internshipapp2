import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default function Screen({children, style}) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,

    // paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
});

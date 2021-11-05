import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import AppText from './AppText';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import {Constants} from 'react-native-unimodules';

export default function OfflineNotice() {
  const netInfo = useNetInfo();
  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.constainer}>
        <AppText style={{color: 'white'}}>No Internet Connection</AppText>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: 'red',
    height: 50,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    top: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
  },
});

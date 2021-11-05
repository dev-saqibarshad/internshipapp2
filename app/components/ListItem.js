import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import AppText from './AppText';

import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({
  renderRightActions,
  onPress,
  image,
  iconComponent,
  title,
  subtitle,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="#FF80AB" onPress={onPress}>
        <View style={styles.container}>
          {iconComponent}
          {image && (
            <Image style={styles.profilePicture} source={image}></Image>
          )}

          <View style={styles.textConstainer}>
            <AppText numberOflines={1} style={styles.name}>
              {title}
            </AppText>
            {subtitle && (
              <AppText numberOflines={2} style={styles.list}>
                {subtitle}
              </AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#f8f4f4',
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textConstainer: {
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  list: {
    color: 'grey',
  },
});

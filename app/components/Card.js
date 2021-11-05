import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import AppText from './AppText';

export default function Card({title, subTitle, image, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: image}}></Image>
        <View style={styles.descContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.price}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    borderRadius: 15,
    backgroundColor: '#F8BBD0',
    marginVertical: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#f8f4f4',
  },
  descContainer: {
    padding: 10,
  },
  price: {
    fontWeight: 'bold',
    color: 'tomato',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

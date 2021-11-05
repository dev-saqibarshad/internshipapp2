import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

export default function ListingDetailScreen({route}) {
  const listing = route.params;
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: listing.images.length !== 0 ? listing.images[0].url : '',
        }}></Image>
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
      </View>
      <ListItem
        image={require('../assets/background.jpg')}
        title="Muhammad Saqib"
        subtitle="10 Listings"></ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    color: 'tomato',
    marginVertical: 5,
  },

  container: {
    //  flex: 1,
  },
  textContainer: {
    padding: 20,
  },

  image: {
    width: '100%',
    height: 300,
    backgroundColor: 'grey',
  },
});

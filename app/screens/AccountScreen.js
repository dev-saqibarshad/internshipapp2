import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const menuItems = [
  {
    title: 'My listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: 'orange',
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: 'tomato',
    },
    targetScreen: 'Messages',
  },
];

export default function AccountScreen({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <ListItem
          image={require('../assets/chair.jpg')}
          title="Muhammad Saqib"
          subtitle="saqibarshad1k@gmail.com"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menu => menu.icon.toString()}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) => (
            <ListItem
              onPress={() => navigation.navigate(item.targetScreen)}
              title={item.title}
              iconComponent={
                <Icon
                  size={40}
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}></Icon>
              }></ListItem>
          )}></FlatList>
      </View>
      <ListItem
        title="Log Out"
        iconComponent={
          <Icon size={40} name="logout" backgroundColor="black"></Icon>
        }></ListItem>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

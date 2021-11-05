import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'Muhammad Saqib',
    description: 'Hello',
    image: require('../assets/background.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/background.jpg'),
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('../assets/background.jpg'),
  },
  {
    id: 4,
    title: 'T4',
    description: 'D4',
    image: require('../assets/background.jpg'),
  },
  {
    id: 5,
    title: 'T5',
    description: 'D5',
    image: require('../assets/background.jpg'),
  },
  {
    id: 6,
    title: 'T6',
    description: 'D6',
    image: require('../assets/background.jpg'),
  },
  {
    id: 7,
    title: 'T7',
    description: 'D7',
    image: require('../assets/background.jpg'),
  },
  {
    id: 8,
    title: 'T8',
    description: 'D8',
    image: require('../assets/background.jpg'),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id));
  };

  return (
    // <Screen>
    <FlatList
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({item}) => (
        <ListItem
          onPress={() => {
            console.log('Pressed');
          }}
          title={item.title}
          subtitle={item.description}
          image={item.image}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={() => {
        return <ListItemSeparator></ListItemSeparator>;
      }}
      refreshing={refreshing}
      onRefresh={() => {
        setMessages(initialMessages);
      }}></FlatList>
    // </Screen>
  );
}

const styles = StyleSheet.create({
  swipe: {
    backgroundColor: 'red',
    width: 70,
  },
});

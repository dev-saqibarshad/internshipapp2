import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  TouchableNativeFeedback,
  SafeAreaView,
} from 'react-native';
import {set} from 'react-native-reanimated';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import ListItemSeparator from './ListItemSeparator';
import PickerItem from './PickerItem';

export default function AppPicker({
  PickerItemComponent = PickerItem,
  items,
  numberOfColumns,
  placeholder,
  iconName,
  selectedItem,
  onSelectItem,
  ...otherProps
}) {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setShow(true)}>
        <View style={styles.container}>
          {iconName && (
            <Icons
              style={styles.icon}
              name={iconName}
              color="black"
              size={25}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.selected}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.notSelected}>{placeholder}</AppText>
          )}

          <Icons name="chevron-down" color="black" size={25} />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={show} animationType="slide">
        <SafeAreaView>
          <Button onPress={() => setShow(false)} title="Close"></Button>
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({item}) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setShow(false);
                  onSelectItem(item);
                }}></PickerItemComponent>
            )}
            //  ItemSeparatorComponent={ListItemSeparator}
          ></FlatList>
        </SafeAreaView>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  container: {
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#F8BBD0',
    flexDirection: 'row',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  textInput: {
    color: '#880E4F',
  },
  selected: {
    flex: 1,
  },
  notSelected: {
    flex: 1,
    color: 'grey',
  },
  model: {
    paddingTop: 20,
  },
});

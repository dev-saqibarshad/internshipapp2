import React, {useRef} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppText from './AppText';
import ImageInput from './ImageInput';

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  const scrollView = useRef();

  return (
    <View style={styles.con}>
      <ScrollView
        indicatorStyle="white"
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        ref={scrollView}
        horizontal>
        <View style={styles.container}>
          {imageUris.map(uri => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}></ImageInput>
            </View>
          ))}
          {imageUris.length < 5 ? (
            <View style={styles.image}>
              <ImageInput
                onChangeImage={({uri}) => onAddImage(uri)}></ImageInput>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  con: {
    backgroundColor: 'grey',
    borderRadius: 30,
    padding: 10,
    // alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  container: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  image: {
    marginLeft: 5,
  },
});

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Platform,
} from 'react-native';

import ImageCropPicker from 'react-native-image-crop-picker';
import {InstagramLikePicker} from 'react-native-instagram-like-picker';

import Icon from './Icon';

export default function ImageInput({imageUri, onChangeImage}) {
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete the image?', [
        {
          text: 'Yes',
          onPress: () => onChangeImage(null),
        },
        {
          text: 'No',
        },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImageCropPicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
      });

      if (result) {
        Platform.OS === 'ios' ? (img = result.sourceURL) : (img = result.path);
        console.log(result.path);
        onChangeImage({
          uri: img,
        });
      } else if (!result) {
        Alert.alert('Image selection was canceeled.');
      }
    } catch (error) {
      console.log('Error reading the image.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image
            style={styles.image}
            source={{
              uri: imageUri,
            }}></Image>
        ) : (
          <Icon
            size={40}
            color="black"
            name="camera"
            backgroundColor="#f4f8f8"></Icon>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f8f8',
    borderRadius: 20,
    width: 70,
    height: 70,

    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

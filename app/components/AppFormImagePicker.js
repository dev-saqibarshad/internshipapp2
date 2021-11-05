import {useFormikContext} from 'formik';
import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import ImageInputList from './ImageInputList';
import TextErrorMessage from './TextErrorMessage';

export default function AppFormImagePicker({name}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();

  const handleAdd = uri => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemove = uri => {
    setFieldValue(
      name,
      values[name].filter(imageUri => imageUri !== uri),
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}></ImageInputList>
      <TextErrorMessage
        visible={touched[name]}
        error={errors[name]}></TextErrorMessage>
    </>
  );
}

const styles = StyleSheet.create({});

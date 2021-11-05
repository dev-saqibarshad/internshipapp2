import {useFormikContext} from 'formik';
import React from 'react';
import {View, Text} from 'react-native';
import AppPicker from './AppPicker';
import TextErrorMessage from './TextErrorMessage';

export default function AppFormPicker({
  PickerItemComponent,
  items,
  name,
  placeholder,
  numberOfColumns,
}) {
  const {setFieldValue, values, errors, touched} = useFormikContext();

  return (
    <>
      <AppPicker
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        items={items}
        placeholder={placeholder}
        onSelectItem={item => setFieldValue(name, item)}
        selectedItem={values[name]}></AppPicker>

      <TextErrorMessage
        visible={touched[name]}
        error={errors[name]}></TextErrorMessage>
    </>
  );
}

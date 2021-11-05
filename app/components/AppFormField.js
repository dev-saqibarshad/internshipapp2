import React from 'react';
import {View, Text} from 'react-native';

import {useFormikContext} from 'formik';

import AppTextInput from './AppTextInput';
import TextErrorMessage from './TextErrorMessage';

export default function AppFormField({width, name, ...otherProps}) {
  const {
    setFieldValue,
    values,
    setFieldTouched,
    handleChange,
    errors,
    touched,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        width={width}
        onBlur={() => {
          setFieldTouched(name);
        }}
        {...otherProps}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}></AppTextInput>
      <TextErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

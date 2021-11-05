import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppForm from '../components/AppForm';
import * as Yup from 'yup';
import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function RegisterScreen() {
  return (
    <Screen style={styles.conatiner}>
      <AppForm
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}>
        <AppFormField
          name="name"
          autoCorrect={false}
          iconName="account"
          placeholder="Name"></AppFormField>
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          iconName="email"
          placeholder="Email"
          textContentType="email"
          keyboardType="email-address"></AppFormField>
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          iconName="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry></AppFormField>
        <SubmitButton title="register"></SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    padding: 10,
  },
});

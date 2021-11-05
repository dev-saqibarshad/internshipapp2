import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppForm from '../components/AppForm';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-red.png')}></Image>
      <AppForm
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
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
        <SubmitButton title="login"></SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
});

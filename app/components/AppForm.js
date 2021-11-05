import {Formik} from 'formik';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function AppForm({
  children,
  validationSchema,
  initialValues,
  onSubmit,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {() => {
        return <>{children}</>;
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({});

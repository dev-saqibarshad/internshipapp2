import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import AppForm from '../components/AppForm';
import * as Yup from 'yup';
import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppFormPicker from '../components/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import AppFormImagePicker from '../components/AppFormImagePicker';
import listingsApi from '../api/listings';
import AppButton from '../components/AppButton';
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(2).label('Title'),
  price: Yup.number().required().min(10).max(100000).label('Price'),
  category: Yup.object().required().nullable().label('Category'),
  description: Yup.string().required().min(20).max(100).label('Description'),
  images: Yup.array().min(1, 'Please select atleast 1 image.').max(5),
});

const items = [
  {
    value: 1,
    label: 'furniture',
    backgroundColor: 'yellow',
    icon: 'email',
  },
  {
    value: 2,
    label: 'cars',
    backgroundColor: 'red',
    icon: 'account',
  },
  {
    value: 3,
    label: 'accessory',
    backgroundColor: 'green',
    icon: 'apps',
  },
  {
    value: 4,
    label: 'phones',
    backgroundColor: 'blue',
    icon: 'lock',
  },
  {
    value: 5,
    label: 'furniture',
    backgroundColor: 'orange',
    icon: 'email',
  },
  {
    value: 6,
    label: 'cars',
    backgroundColor: 'pink',
    icon: 'account',
  },
  {
    value: 7,
    label: 'accessory',
    backgroundColor: 'black',
    icon: 'apps',
  },
  {
    value: 8,
    label: 'phones',
    backgroundColor: 'grey',
    icon: 'lock',
  },
];

export default function ListEditingScreen({navigation}) {
  const [uploadVisible, setUploadVisible] = useState(false);

  const [progress, setProgress] = useState(0);

  const location = useLocation();
  console.log(location + 'this is before');

  const handleSubmit = async (listing, {resetForm}) => {
    setProgress(0);
    console.log(progress);
    setUploadVisible(true);
    const result = await listingsApi.addListings(
      {...listing, location},
      progress => setProgress(progress),
    );

    if (!result.ok) {
      setUploadVisible(false);
      return Alert.alert(result.problem);
    }

    resetForm();
  };

  return (
    <Screen style={styles.conatiner}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}></UploadScreen>
      <ScrollView>
        <AppForm
          initialValues={{
            title: '',
            price: '',
            category: null,
            description: '',
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <AppFormImagePicker name="images"></AppFormImagePicker>

          <AppFormField
            name="title"
            placeholder="Title"
            maxLength={255}></AppFormField>
          <AppFormField
            name="price"
            maxLength={6}
            placeholder="Price"
            keyboardType="numeric"
            width={120}></AppFormField>
          <AppFormPicker
            name="category"
            items={items}
            placeholder="Category"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}></AppFormPicker>
          <AppFormField
            maxLength={255}
            numberOfLines={5}
            name="description"
            placeholder="Description"
            multiline></AppFormField>
          <AppButton
            onPress={() => navigation.navigate('Map', location)}
            color="blue"
            title="Show my location"></AppButton>
          <SubmitButton title="post"></SubmitButton>
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    paddingHorizontal: 10,
  },
});

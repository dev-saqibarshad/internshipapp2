import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const GooglePlacesInput = ({getDest, handleRegion, caldistance}) => {
  const ref = useRef();
  useEffect(() => {
    ref.current?.setAddressText('');
  }, []);
  return (
    <GooglePlacesAutocomplete
      disableScroll={false}
      ref={ref}
      style={styles.container}
      styles={{
        textInput: {
          backgroundColor: '#fffff9',
          height: 44,
          borderRadius: 2,
          paddingVertical: 5,
          paddingHorizontal: 10,
          margin: 10,
          fontSize: 15,
          flex: 1,
          color: 'black',
        },
        row: {
          backgroundColor: '#FFFFFF',
          padding: 13,
          height: 44,
          flexDirection: 'row',
        },
      }}
      placeholder="Search"
      fetchDetails={true}
      //  getDest={destination}
      onPress={(data, details) => {
        getDest({
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
        });
        handleRegion(details);
      }}
      query={{
        key: 'AIzaSyDtdGbEkhzzxUlZ-XH50fuZ0Vuc9Soywes',
        language: 'en',
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

export default GooglePlacesInput;

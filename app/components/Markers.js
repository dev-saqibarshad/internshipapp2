import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';

export default function Markers(markers) {
  const [marks, setmarks] = useState([]);

  return (
    <Marker
      draggable
      coordinate={{
        latitude: location.latitude,
        longitude: location.longitude,
      }}>
      <MaterialIcons
        size={40}
        name="location-pin"
        color="#1E88E5"></MaterialIcons>
    </Marker>
  );
}

const styles = StyleSheet.create({});

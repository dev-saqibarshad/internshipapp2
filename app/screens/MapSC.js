import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from '../components/Icon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../components/AppButton';
import MapViewDirections from 'react-native-maps-directions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import GooglePlacesInput from '../components/GooglePlacesInput';
import {getDistance} from 'geolib';
import AppText from '../components/AppText';

export default function MapSC({navigation, route}) {
  const map = useRef();
  const [distance, setDistance] = useState();
  const [time, setTime] = useState();
  const [destination, setdestination] = useState(null);
  const [currentloc, setCurrentLoc] = useState();
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDtdGbEkhzzxUlZ-XH50fuZ0Vuc9Soywes';

  const handleRegionChange = mapData => {
    if (map) {
      map.current.animateToRegion({
        latitude: mapData.geometry.location.lat,
        longitude: mapData.geometry.location.lng,
        latitudeDelta: 0.007,
        longitudeDelta: 0.007,
      });
    }
  };

  const centerloc = () => {
    if (map) {
      map.current.animateToRegion({
        latitude: route.params.latitude,
        longitude: route.params.longitude,
        latitudeDelta: 0.007,
        longitudeDelta: 0.007,
      });
    }
  };

  const location = route.params;

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={map}
        // showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          mode="WALKING"
          strokeWidth={3}
          origin={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="orange"
          onReady={result => {
            setDistance(result.distance);
            setTime(result.duration);
          }}
        />

        {destination && (
          <Marker
            coordinate={{
              latitude: destination.latitude,
              longitude: destination.longitude,
            }}>
            <MaterialIcons
              size={40}
              name="location-pin"
              color="red"></MaterialIcons>
          </Marker>
        )}

        {/* <View style={styles.distanddur}>
          <MaterialIcons
            style={styles.item}
            size={40}
            name="directions"></MaterialIcons>
          <Text style={styles.item}>{`${distance} KM`}</Text>
          <MaterialIcons
            style={styles.item}
            size={40}
            name="access-time"></MaterialIcons>
          <Text style={styles.item}>{`${time} mins`}</Text>
        </View> */}

        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}>
          <MaterialIcons
            size={40}
            name="location-pin"
            color="#1E88E5"></MaterialIcons>
        </Marker>
      </MapView>
      <View style={styles.btn}>
        <TouchableOpacity onPress={centerloc}>
          <MaterialIcons
            color="black"
            size={30}
            name="my-location"></MaterialIcons>
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <MaterialIcons
          onPress={() => navigation.navigate('ListingEdit')}
          style={styles.back}
          color="black"
          size={30}
          name="arrow-back"></MaterialIcons>
        <GooglePlacesInput
          handleRegion={handleRegionChange}
          getDest={dest => {
            setdestination(dest);
          }}></GooglePlacesInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 20,
  },
  distanddur: {
    position: 'absolute',
    flexDirection: 'row',
    top: 120,
    bottom: 30,
    alignItems: 'center',
    alignSelf: 'center',
    // flex: 1,
  },
  search: {
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    top: Platform.OS === 'ios' ? 40 : 10,
    paddingHorizontal: 10,
  },
  back: {},
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '90%',
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    right: 20,
    // zIndex: 100,
  },
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    height: 100,
    width: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex: 1,
  },
});

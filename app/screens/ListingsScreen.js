import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import routes from '../components/navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import AppActivity from '../components/AppActivity';
import useApi from '../hooks/useApi';
import OfflineNotice from '../components/OfflineNotice';

export default function ListingsScreen({navigation}) {
  const [refreshing, setRefreshing] = useState(false);

  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {Platform.OS === 'android' ? <OfflineNotice></OfflineNotice> : null}
      {!getListingsApi.loading && getListingsApi.error && (
        <>
          <AppText style={{padding: 20}} color="red">
            Couldn't get data.
          </AppText>
          <AppButton
            color="red"
            title="retry"
            onPress={getListingsApi.request}></AppButton>
        </>
      )}
      <AppActivity visible={getListingsApi.loading}></AppActivity>
      {!getListingsApi.loading && getListingsApi.data && (
        <FlatList
          //  style={styles.screen}

          refreshing={refreshing}
          onRefresh={() => {
            getListingsApi.request();
          }}
          data={getListingsApi.data}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({item}) => (
            <Card
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              image={item.images.length !== 0 ? item.images[0].url : ''}
              title={item.title}
              subTitle={'Rs. ' + item.price}></Card>
          )}></FlatList>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
});

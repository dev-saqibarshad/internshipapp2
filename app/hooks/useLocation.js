import {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    const loc = await Geolocation.getCurrentPosition(info =>
      setLocation({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      }),
    );

    console.log(loc);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

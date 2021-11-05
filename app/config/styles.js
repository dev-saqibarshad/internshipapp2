import {PlatformColor} from 'react-native';

export default {
  ...Platform.select({
    ios: {
      fontSize: 20,
      fontFamily: 'Avenir',
    },
    android: {
      fontSize: 16,
      fontFamily: 'roboto',
    },
  }),
};

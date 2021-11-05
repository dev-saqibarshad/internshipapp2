import React from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import AppText from '../components/AppText';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

export default function UploadScreen({onDone, progress = 0, visible = false}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar progress={progress} color="red" width={200} />
        ) : (
          <LottieView
            onAnimationFinish={onDone}
            autoPlay
            loop={false}
            source={require('../assets/animations/done.json')}></LottieView>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

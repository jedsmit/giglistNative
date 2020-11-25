import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import TitleText from '../components/TitleText';

const CreateSetlistScreen = props => {
  return (
    <ImageBackground
      source={require('../assets/drums-background.jpg')}
      style={styles.image}
      resizeMode='cover'
    >
      <View style={styles.container}>
        <TitleText text='Create a setlist' />
      </View>
    </ImageBackground>
  );
};

CreateSetlistScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CreateSetlistScreen;

import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
} from 'react-native';

import UserListsModal from '../components/UserListsModal';
import Footer from '../components/Footer';
import TitleText from '../components/TitleText';

const WelcomeScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require('../assets/drums-background.jpg')}
      style={styles.image}
      resizeMode='cover'
    >
      <View style={styles.container}>
        <TitleText text='Welcome to Giglist' />

        {/* Buttons disappear when modal is active */}
        {!modalVisible ? (
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.buttonText}>Your Setlists</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'CreateSetlist',
                });
              }}
            >
              <Text style={styles.buttonText}>Create a Setlist +</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <UserListsModal
          isVisible={modalVisible}
          closeModal={handleModalClose}
        />
      </View>
      <Footer />
    </ImageBackground>
  );
};

WelcomeScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  button: {
    color: 'red',
    width: '80%',
    marginBottom: 20,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'gold',
  },
});

export default WelcomeScreen;

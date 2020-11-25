import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function TitleText(props) {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    paddingTop: 100,
  },
  text: {
    color: 'gold',
    fontSize: 40,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    textShadowRadius: 10,
    textShadowColor: 'black',
  },
});

export default TitleText;

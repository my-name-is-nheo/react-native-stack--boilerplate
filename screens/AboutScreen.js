import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function AboutScreen({navigation: {navigate}}) {
  return (
    <View style={styles.about}>
      <Text>About Screen</Text>
      <Button title="Go to Map Page" onPress={() => navigate('Map')} />
      <Button title="Go to Camera Page" onPress={() => navigate('Camera')} />
    </View>
  );
}

const styles = StyleSheet.create({
  about: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

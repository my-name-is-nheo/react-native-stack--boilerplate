import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.323,
        longitude: -122.0322,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922,
      },
    };
  }
  render() {
    return (
      <MapView style={styles.container} initialRegion={this.state.region} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AsyncScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBoxText: '',
      storedText: '',
    };
  }

  onPressSave = async () => {
    try {
      await AsyncStorage.setItem(
        '@AsyncStorageExample:someKey',
        this.state.inputBoxText,
      );
      this.setState({storedText: this.state.inputBoxText});
    } catch (error) {
      console.log('Error in saving data');
    }
  };
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@AsyncStorageExample:someKey');
      return value;
    } catch (error) {
      console.log('Error in Fetching Data');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textField}
          placeholder="Type here!"
          onChangeText={(text) => this.setState({inputBoxText: text})}
        />
        <Button
          onPress={this.onPressSave}
          title="Save"
          color="blue"
          accessibilityLabel="Click will save to database"
        />

        <Text style={styles.header}>Text from local Storage: </Text>
        <Text style={styles.text}>{this.state.storedText}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Georgia',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 40,
  },
  text: {
    fontFamily: 'Georgia',
    fontSize: 18,
    fontStyle: 'italic',
    paddingTop: 10,
  },
  textField: {
    height: 40,
    width: 300,
    borderColor: '#C0C0C0',
    borderBottomWidth: 1,
  },
});

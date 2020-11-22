import React from 'react';
import {View, Text, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
export default class CameraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {avatarSource: ''};
  }
  handleCameraAction = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        this.setState({
          avatarSource: source,
        });
      }
    });
  };
  render() {
    return (
      <View>
        <Button title="Open Camera" onPress={this.handleCameraAction} />
      </View>
    );
  }
}

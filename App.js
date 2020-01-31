// @flow
import React, { Component } from "react";
import {
  View, Text, TouchableOpacity, Keyboard, BackHandler, ImageBackground, TextInput,
  ScrollView, Alert, KeyboardAvoidingView, Image, Dimensions, AsyncStorage
} from 'react-native';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import styles from './styles';

const DEVICE_WIDTH = Dimensions.get('screen').width;
const DEVICE_HEIGHT = Dimensions.get('screen').width;



class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      visible: false,
      storeEmail: '',
      storePassword: ''

    };
  }

  handleEmail = (value) => {

    this.setState({ email: value });

  }
  handlePassword = (value) => {

    this.setState({ password: value });

  }

  handleSubmit = async () => {
    const { email, password } = this.state
if(email&&password){
  AsyncStorage.setItem('email', JSON.stringify(email));
  AsyncStorage.setItem('password', JSON.stringify(password));
  Alert.alert(
    'Alert',
    'Store the data successfully',
    [
      { text: 'OK', onPress: () => {this.props.navigation.navigate('uiScreen') } }
    ],
    { cancelable: false }
  );
}else{
  Alert.alert(
    'Alert',
    'enter the login details',
    [
      { text: 'OK', onPress: () => { } }
    ],
    { cancelable: false }
  );
}
    
  }
  modelOpen = async () => {
    const email = await AsyncStorage.getItem('email')
    const password = await AsyncStorage.getItem('password')
    this.setState({
      storeEmail: email,
      storePassword: password,
      visible: true
    })
  }
  render() {
    const {
      email,
      password,

    } = this.state;
    return (
      <ImageBackground source={require('./assets/login.png')} style={{ resizeMode: 'cover', flex: 1 }}>
        <Image
          style={{
            width: DEVICE_WIDTH / 10, height: DEVICE_HEIGHT / 10, top: DEVICE_WIDTH / 5,
            marginHorizontal: 10, alignSelf: 'center', marginVertical: 50
          }}
          source={require('./assets/logo-hfc.png')}
        />
        <View style={styles.container}>
          <TouchableOpacity onPress={() => { this.modelOpen() }}>
            <Text style={{ color: "#072018", fontSize: 13, marginLeft: DEVICE_WIDTH / 70 }}>email</Text>
          </TouchableOpacity>
          <TextInput
            param="email"
            placeholder={'email'}
            autoCapitalize="none"
            returnKeyType="done"
            value={email}
            onChangeText={this.handleEmail}
            textInputStyle={styles.textInputStyle}
            autoCorrect={false}

          />
          <Text style={{ color: "#072018", fontSize: 13, marginLeft: DEVICE_WIDTH / 70 }}>Password</Text>
          <TextInput
            param="password"
            placeholder="Password"
            returnKeyType="done"
            autoCapitalize="none"
            value={password}
            onChangeText={this.handlePassword}
            textInputStyle={styles.textInputStyle}
            autoCorrect={false}
            maxLength={10}
          /></View>
        <View style={styles.documentFooter}>
          <TouchableOpacity onPress={() => { this.handleSubmit() }}
            disabled={this.state.buttonState}
            style={{
              flex: 3, backgroundColor: '#87cefa', width: DEVICE_WIDTH / 53, height: DEVICE_WIDTH / 13, top: DEVICE_WIDTH / 8,
              alignSelf: 'center', marginHorizontal: DEVICE_WIDTH / 4, marginVertical: 5, alignItems: 'center'
            }}>
            <Text style={{ fontSize: 18, color: 'white', justifyContent: 'center', alignItems: 'center' }}>Sign IN</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Dialog
            visible={this.state.visible}
            footer={
              <DialogFooter>
                <DialogButton
                  text="CANCEL"
                  onPress={() => { this.setState({ visible: false }) }}
                />

              </DialogFooter>
            }
          >
            <DialogContent>
              <Text onPress={() => {
                this.setState({
                  visible: false,
                  email: this.state.storeEmail,
                  password: this.state.storePassword
                })
              }}>{this.state.storeEmail}</Text>
            </DialogContent>
          </Dialog>
        </View>
      </ImageBackground>
    );
  }
}




export default Login;

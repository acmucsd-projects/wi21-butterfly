import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../assets/theme'


export default function LoginSignup({ navigation }) {

  const navSignUp = () => {
    navigation.navigate('SignUp');
  }

  const navLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}> 
      <Image style={styles.logo} source={require('../assets/logo_white.png')} />
      <TouchableOpacity style={styles.loginbutton}  onPress={navLogin}> 
        <Text style={styles.buttontextlogin} >Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupbutton}  onPress={navSignUp}>
        <Text style={styles.buttontextsignup} >Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ghostButton}>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.orange,
  },
  title: {
    flex: 1,
    marginTop: 100,
    marginBottom: -50,
    color: '#000000',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 55,
    lineHeight: 66,
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    marginTop: '25%',
  },
  loginbutton: {
    backgroundColor: "white",
    marginBottom: 25,
    borderRadius: 23,
    width: '62%',
    height: '7%',
    alignItems: "center",
    alignSelf: 'center',
    justifyContent: 'center'
  },
  signupbutton: {
    backgroundColor: colors.orange,
    marginBottom: 25,
    borderRadius: 23,
    borderWidth: 2.75,
    borderColor: "white",
    width: '62%',
    height: '7%',
    alignItems: "center",
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttontextlogin: {
    color: colors.orange,
    alignSelf: 'center',
    fontFamily: 'OpenSans',
  },
  buttontextsignup: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'OpenSans',
  },
  ghostButton: {
    marginBottom: '50%',
  }

});

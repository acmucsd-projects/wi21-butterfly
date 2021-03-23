import React from 'react';
import {Text, View, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { colors } from '../assets/theme'

export default function LoginSignup({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Cocial</Text>
      <Image style={styles.logo} source={require('../assets/cat.jpg')} />
      <TouchableOpacity style={styles.loginbutton} onPress={() => navigation.navigate('Login')} >
        <Text style={styles.buttontextlogin} >Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupbutton}>
        <Text style={styles.buttontextsignup}>Sign Up</Text>
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
    // fontWeight: 'bold',
    // fontSize: 45,
    color: '#000000',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 55,
    lineHeight: 66,
  },
  logo: {
    flex: 2,
    resizeMode: 'center',
    marginBottom: 20,
  },
  loginbutton: {
    backgroundColor: "white",
    marginBottom: 25,
    padding: 20,
    borderRadius: 10,
    width: 208,
    height: 58,
  },
  signupbutton: {
    backgroundColor: colors.blue,
    marginBottom: 25,
    padding: 20,
    borderRadius: 10,
    width: 208,
    height: 58,
  },
  buttontextlogin: {
    color: 'black',
    alignSelf: 'center',
  },
  buttontextsignup: {
    color: 'white',
    alignSelf: 'center'
  },
  ghostButton: {
    marginBottom: 110,
  }

});

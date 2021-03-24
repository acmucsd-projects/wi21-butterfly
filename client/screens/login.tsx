import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
 
export default function Login({ navigation }) {

  // const goBackScreen = () => {
  //   navigation.goBack();
  // }

  const navLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Dashboard'}],
    });
    // navigation.navigate('Dashboard');
  }

  return (
    <View style = { styles.container }> 
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
        <Text style = {styles.title}>Cocial</Text>
        </View>
        <View style={styles.inputEmailView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
          />
        </View>
 
        <View style={styles.inputPasswordView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          />
        </View>
 
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.loginBtn} onPress={navLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize : 60,
    alignSelf: 'center',
    fontWeight : "bold",
    color : "#FF7171",
    marginTop : '10%',
  },
  container: {
    flex : 1,
    backgroundColor: "#FEBB5B",
  },
  inputEmailView: {
    backgroundColor: "#FFFFFF",
    width: '70%',
    height: "7%",
    marginTop: '20%',
    alignSelf : 'center',
    justifyContent: "center",
    alignItems: "center",
  },
  inputPasswordView: {
    backgroundColor: "#FFFFFF",
    width: '70%',
    height: "7%",
    marginTop: '10%',
    alignSelf : 'center',
    justifyContent: "center",
    alignItems: "center",
  },
  TextInput: {
    alignItems: 'center',
  },
  forgot_button: {
    height: '15%',
    width: '50%',
    marginTop: '5%',
    marginLeft : '36%',
  },
  loginBtn: {
    width: '70%',
    borderRadius: 25,
    height: '7%',
    alignSelf : 'center',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: '5%',
    backgroundColor: "#FF7171",
  },
 
});
 
 
 
 
 
 
 
 


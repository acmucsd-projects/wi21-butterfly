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
import axios from "axios";
 
export default function Login({navigation}: {navigation: any}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotButton, setForgotButton] = useState(false);
  const [loginButton, setLoginButton] = useState(false);
  return (
    <View style = { styles.container }> 
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
        <Text style = {styles.title}>Cocial</Text>
        </View>
        <View style={styles.inputEmailView}>
          <TextInput
            onChangeText={email => setEmail(email)}
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
          />
        </View>
 
        <View style={styles.inputPasswordView}>
          <TextInput
            onChangeText={password => setEmail(password)}
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          />
        </View>
 
        <TouchableOpacity onPress={forgotButton => setForgotButton(true)}>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.loginBtn} onPress={() =>{
          axios({
            method: 'POST',
            url: 'http://100.115.49.93:8082/api/students/login', /* change this to prod */
            data: {
              email: 'chicken@gmail.com', 
              password: 'chicken123'
            }
          }).then( (response) => {
            // request succesful
            const json = response.data;

            console.log(json.success)
            navigation.navigate('Dashboard')
          })
          .catch( (error) => {
            // oop
            // handle error
            alert("Network Error")
            console.log(error);
          });
        } } >
          <Text style={{color: "#FEBB5B", fontSize: 25}}>Login</Text>
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
    color : "#FEBB5B",
    marginTop : '10%',
  },
  container: {
    flex : 1,
    backgroundColor: "#FFFFFF",
  },
  inputEmailView: {
    backgroundColor: "#FFFFFF",
    width: '70%',
    height: "7%",
    marginTop: '20%',
    alignSelf : 'center',
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FEBB5B",
  },
  inputPasswordView: {
    backgroundColor: "#FFFFFF",
    width: '70%',
    height: "7%",
    marginTop: '10%',
    alignSelf : 'center',
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FEBB5B",
  },
  TextInput: {
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
  },
  forgot_button: {
    height: '15%',
    width: '50%',
    marginTop: '5%',
    marginLeft : '36%',
    color : "#FEBB5B",
  },
  loginBtn: {
    width: '70%',
    borderRadius: 25,
    height: '8%',
    alignSelf : 'center',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: '5%',
    borderColor: "#FEBB5B",
    borderWidth: 3,
  },
 
});
 
 
 
 
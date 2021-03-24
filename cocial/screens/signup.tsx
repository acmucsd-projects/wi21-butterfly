import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Switch } from 'react-native';
// import DatePicker from 'react-native-date-picker';
import { colors } from '../assets/theme'

export default function Signup() {
  const [value, setValue] = useState(false);

  const clickHandler = () => {
    if(!value){
      alert(name + " " + email + " " + password);
      setValue(true);
    }
    else
    alert("Signed Up: " + name + " " + email + " " + password);
    
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState =>
     !previousState);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [college, setCollege] = useState('');
  const [birthday, setBirthday] = useState('');


  return (
    
    <><View style={styles.header}>
      <Text style={styles.title}>Signup</Text>
    </View>

      <View style={styles.container}>
        <View style={styles.inputContainers}>
          <TextInput
            placeholder='name'
            style={styles.input}
            onChangeText={(val) => setName(val)} />

          <TextInput
            textContentType='emailAddress'
            placeholder='email'
            keyboardType='email-address'
            style={styles.input}
            onChangeText={(val) => setEmail(val)} />

          <TextInput
            textContentType='password'
            placeholder='password'
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(val) => setPassword(val)} />

          <TextInput
            placeholder='birthday (MM/DD/YY)(CHANGE)'
            style={styles.input}
            onChangeText={(val) => setPassword(val)} />
        </View>

          <Text>College Dropdown (CHANGE)</Text>

          <View style={styles.switchContainer}>
            <Switch
            trackColor={{ false: "#767577", true: "#99DE9F" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
            <Text style={styles.switchText}>I agree to the Terms and Services</Text>
          </View>


          <View style={styles.buttonContainer}>
            <View style={styles.buttonText}>
            <Button color = 'white' title='signup' onPress={clickHandler} />
            </View>
          </View>

      </View></>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 50,
  },
  title: {
    color: '#FEBB5B',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    paddingHorizontal: "7%",
    // marginHorizontal: 50,
    backgroundColor: '#FFFFFF',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputContainers: {
    alignSelf: 'center',
  },
  input: {
    marginBottom: 75,

    paddingHorizontal: 2,
    paddingVertical: 2,

    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    color: 'gray',
    width: 250,
 },
  buttonContainer: {
    backgroundColor: '#FEBB5B',
    alignSelf: 'center',
    width: "70%",
    height: "7%",
    // paddingVertical: 20,
    borderRadius: 45,
    // justifyContent: 'center',
    
    // 
  },
  switchContainer: {
    flexDirection: "row",
    alignSelf: 'center',
    marginBottom: 10,
    // justifyContent: 'flex-start',
  },
  switchText:{
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontWeight: 'bold'
    // justifyContent: 'flex-end',
    
  },
  buttonText:{
    paddingVertical: 7,
    paddingHorizontal: 10,
    // justifyContent: 'flex-end',
  },
  
});
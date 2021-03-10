import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import DatePicker from 'react-native-date-picker'

export default function Signup() {
  const [value, setValue] = useState(false);

  const clickHandler = () => {
    if(!value){
      alert('Successful Sign Up');
      setValue(true);
    }
    else
    alert('Signed Up');
    
  }

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


        <View style={styles.buttonContainer}>
          <Button color = 'white' title='Sign Up' onPress={clickHandler} />
        </View>

        

        <Text>
          name: {name}, email: {email}, password: {password} college: {college} birthday: {birthday}
        </Text>
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
    backgroundColor: '#FFFFFF',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    backgroundColor: 'black',
    marginHorizontal: 100,
    marginVertical: 12,
    borderRadius: 10,
  },
  header: {
    height: 80,
    paddingTop: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
 },
});
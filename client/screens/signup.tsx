import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Switch } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../assets/theme'

export default function Signup({ navigation }) {
  const [value, setValue] = useState(false);

  const clickHandler = () => {
    if(!value){
      alert(name + " " + email + " " + password);
      setValue(true);
      
    }
    else
    alert("Signed Up: " + name + " " + email + " " + password);
    navigation.navigate('Dashboard'); 
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState =>
     !previousState);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [college, setCollege] = useState('');
  const [birthday, setBirthday] = useState('');

  // const setCollege = (item) => {
  //   setOnCampus(item.value);
  // }

  const navDash = () => {
    navigation.navigate('Dashboard');
  }

  return (
    

      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        
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
            placeholder='birthday (MM/DD/YY)'
            keyboardType={'default'}
            style={styles.input}
            onChangeText={(val) => setPassword(val)} />

            <DropDownPicker
                items={[
                    {label: 'UC San Diego', value: 'UCSD'},
                    {label: 'UC Los Angeles', value: 'UCLA'},
                    {label: 'UC Berkeley', value: 'UCB'},
                    {label: 'UC Irvine', value: 'UCI'},
                    {label: 'UC Santa Cruz', value: 'UCSC'},
                    {label: 'UC Santa Barbara', value: 'UCSB'},
                    {label: 'UC Davis', value: 'UCD'},
                    {label: 'UC Riverside', value: 'UCR'},
                    {label: 'UC Merced', value: 'UCM'},
                    
                ]}
                defaultNull = {true}
                placeholder="college"
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                dropDownStyle={styles.dropdownextend}
                placeholderStyle={{color: "grey"}}
                labelStyle={styles.dropdownText}
                arrowSize={20}
                onChangeItem={(item) => setCollege(item)}
            />
          
          <View style={styles.switchContainer}>
            <Switch
            trackColor={{ false: "#767577", true: "#99DE9F" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
            <Text style={styles.switchText}>I agree to the Terms and Services</Text>
          </View>



            <TouchableOpacity style={styles.buttonContainer} onPress={navDash}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
          </View> 
        
      </View> 
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: "7%",
    // marginHorizontal: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: '25%',
  },
  title: {
    flex: 1,
    color: '#FEBB5B',
    textAlign: 'center',
    paddingTop: '10%',
    fontSize: 25,
    fontWeight: 'bold',
  },
  
  inputContainers: {
    flex: 6,
    // alignSelf: 'center',
    width: '75%',
    justifyContent: 'flex-start',
    paddingBottom: '25%',
  },
  input: {
    marginBottom: 75,

    paddingHorizontal: 2,
    paddingVertical: 2,

    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    color: 'gray',
    // width: 250,
 },
  buttonContainer: {
    // flex: 1,
    backgroundColor: '#FEBB5B',
    alignItems: 'center',
    alignSelf: 'center',
    width: "75%",
    height: "30%",

    borderRadius: 45,

  },
  buttonText:{
    paddingTop: '7%',
    alignItems: 'center',
    color: '#FFFFFF',
    // justifyContent: 'center',
    fontSize: 20,
  },
  switchContainer: {
    // flex: 1,
    flexDirection: "row",
    alignSelf: 'center',
    marginBottom: '15%',
  },
  switchText:{
    paddingHorizontal: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
    // justifyContent: 'flex-end',
    
  },
  
  dropdownContainer:{
    height: '9.5%',
    // width: "60%",
    marginBottom: '15%',
    // marginTop: '2%',
  },
  dropdown: { 
    borderTopLeftRadius: 25, borderTopRightRadius: 25,
    borderBottomLeftRadius: 25, borderBottomRightRadius: 25,
    borderWidth: 1.2,
    borderColor: "black",
  },
  dropdownextend: {
    borderBottomLeftRadius: 25, borderBottomRightRadius: 24,
    borderWidth: 1.5,
    borderColor: "black"
  },
  dropdownText: {
    textAlign:"center",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 15,
  },
});
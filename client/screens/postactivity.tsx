import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard,
   TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import * as ImagePicker from 'expo-image-picker';

import { colors } from '../assets/theme'


export default function PostActivity({navigation}) {
  const [title, setTitle] = useState('');
  const [descrip, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleImagePress = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
    }

    else {
      await ImagePicker.launchImageLibraryAsync();
    }
  };

  const setTitlee = (val) => {
    setTitle(val);
  }
  
  const setDescript = (val) => {
    setDescription(val);
  }

  const setTagss = (val) => {
    setTags(val);
  }

  const navMore = () => {
    navigation.navigate('PostActivityMore');
  }

  return (
  
  <KeyboardAwareScrollView style={{flex:1, backgroundColor:"white"}} automaticallyAdjustContentInsets={false} enableOnAndroid={true}  viewIsInsideTabBar={true}>
      <TouchableWithoutFeedback onPress={() => {
      console.log('dismissed keyboard')
      Keyboard.dismiss(); }}>

        <View style={styles.container}>
          <Text style={styles.title}>post</Text>
          
          <TextInput style={styles.input} onChangeText={setTitlee} placeholder='Title' />

          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttontext} onPress={handleImagePress}>photo</Text>
          </TouchableOpacity>

          <TextInput style={styles.inputDescription} placeholder='Description' 
            multiline={true} numberOfLines={8} onChangeText={setDescript}/>
          <TextInput style={styles.input} placeholder='Tags' onChangeText={setTagss} multiline={true} />

          <TouchableOpacity style={styles.button} onPress={navMore}>
            <Text style={styles.buttontext} >more</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.postbutton} >
            <Text style={styles.postbuttontext} >Post Event</Text>
          </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
   </KeyboardAwareScrollView>
  ); 
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    marginTop: '7%',
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'flex-start',
    marginLeft: '7%',
    fontFamily: 'OpenSans'
  },
  input: {
      marginBottom: 10,
      marginTop: '5%',
      color: 'black',
      width: '85%',
      borderBottomWidth: 1.5,
      borderBottomColor: 'black',
      fontFamily: 'OpenSans',
      fontSize: 17
  },
  inputDescription: {
    marginBottom: 10,
    marginTop: '5%',
    padding: 10,
    color: 'black',
    width: '85%',
    borderWidth: 1.5,
    borderRadius: 22,
    borderBottomColor: 'black',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontFamily: 'OpenSans',
    fontSize: 17
  },
  checkboxContainer:{
    flexDirection: "row",
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  label:{
    margin: 7,
  },
  button: {
    marginTop:'5%',
    backgroundColor: 'white',
    margin: 15,
    padding: '5%',
    borderRadius: 22,
    width: '50%',
    height: '8%',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: "black",
  },
  buttontext: {
    color: 'black',
    alignSelf: 'center',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16
  },
  postbutton: {
    backgroundColor: colors.orange,
    margin: 15,
    padding: '5%',
    borderRadius: 22,
    width: '50%',
    height: '8%',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.orange,
  },
  postbuttontext: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16
  }
})
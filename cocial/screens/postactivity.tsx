import React, { useState } from 'react';
import {Text, View, StyleSheet, FlatList, Button, TextInput, CheckBox, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { colors } from '../assets/theme'

export default function PostActivity() {
  const [isSelectedCampus, setSelectionC] = useState(false);
  const [isSelectedPrivate, setSelectionP] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => {
      console.log('dismissed keyboard')
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Text style={styles.title}>Post an Activity</Text>
        
        {/* <View style={styles.inputcontainer}> */}
          <TextInput style={styles.input} placeholder='Title' />
          {/* <Text style={styles.label}>Title</Text> */}
        {/* </View> */}

        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttontext} >Upload</Text>
        </TouchableOpacity>

        <TextInput style={styles.input} placeholder='Description' multiline={true} />
        <TextInput style={styles.input} placeholder='Tags' multiline={true} />
        <TextInput style={styles.input} placeholder='Location' />
        <TextInput style={styles.input} placeholder='Time/Date' />
        <TextInput style={styles.input} placeholder='Number of People' />
        <View style={styles.checkboxContainer}>
          <CheckBox
          value={isSelectedCampus}
          onValueChange={setSelectionC}
          style={styles.checkbox}
          />
          <Text style={styles.label}>On Campus?</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelectedPrivate}
            onValueChange={setSelectionP}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Private Event?</Text>
        </View>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttontext} >Post Event</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  ); 
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: "#FEBB5B",
  },
  title: {
    marginTop: 50,
    color: '#000000',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 25,
    // lineHeight: ,

  },
  inputcontainer: {
    // flexDirection: "row",
  },
  input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      color: 'gray',
      width: 250,
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
    backgroundColor: colors.blue,
    margin: 15,
    padding: 20,
    borderRadius: 2,
    width: 130,
    height: 20,
    justifyContent: 'center'
  },
  buttontext: {
    color: 'white',
    alignSelf: 'center',
  }
})
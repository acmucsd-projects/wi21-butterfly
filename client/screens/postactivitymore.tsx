import React, { useState } from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { colors } from '../assets/theme'


export default function PostActivityMore() {

  const [location, setLocation] = useState("");
  const [timedate, setTimeDate] = useState("");
  const [numPeople, setNumPeople] = useState("");

  const [OnCampus, setOnCampus] = useState("Null");
  const [Private, setPrivacy] = useState("Null");

  const setLocationn = (val) => {
    setLocation(val);
  }
  const setTimeDatee = (val) => {
    setTimeDate(val);
  }
  const setNumPeoplee = (val) => {
    setNumPeople(val);
  }

  const setOnOffCampus = (item) => {
    setOnCampus(item.value);
  }

  const setPriv = (item) => {
    setPrivacy(item.value);
  }

  return (
        <View style={styles.container}>
            
            <TextInput style={styles.input} multiline={true} onChangeText={setLocationn} placeholder='location' />
            <TextInput style={styles.input} multiline={true} onChangeText={setTimeDatee} placeholder='time/date' />
            <TextInput style={styles.input} multiline={true} onChangeText={setNumPeoplee} placeholder='# of people' />

            <DropDownPicker
                items={[
                    {label: 'On Campus', value: 'On Campus'},
                    {label: 'Off Campus', value: 'Off Campus'},
                ]}
                defaultNull= {true}
                placeholder="On/Off Campus?"
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                dropDownStyle={styles.dropdownextend}
                placeholderStyle={{color: "grey"}}
                labelStyle={styles.dropdownText}
                arrowSize={20}
                onChangeItem={(item) => setOnOffCampus(item)}
            />
            <DropDownPicker
                items={[
                    {label: 'Public', value: 'Public'},
                    {label: 'Private', value: 'Private'},
                ]}
                defaultNull= {true}
                placeholder="Public or Private Event?"
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                dropDownStyle={styles.dropdownextend}
                labelStyle={styles.dropdownText}
                arrowSize={20}
                placeholderStyle={{color: "grey"}}
                onChangeItem={item => setPriv(item.value)}
            />
        </View>
  ); 
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white",
  },
  title: {
    marginTop: '11%',
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'flex-start',
    marginLeft: '7%',
    fontFamily: 'OpenSans'
  },
  input: {
      marginBottom: '12%',
      marginTop: '1.5%',
      color: 'black',
      width: '85%',
      borderBottomWidth: 1.5,
      borderBottomColor: 'black',
      fontFamily: 'OpenSans',
      fontSize: 17
  },
  dropdownContainer:{
    height: '9.5%',
    width: "60%",
    marginBottom: '8%',
    marginTop: '5%',
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
  }

})
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
export default function Friends() {
  return (
    <View style={styles.container}>
      <Text style={styles.friends}>friends</Text>
      <TouchableOpacity style={styles.msgBtn}>
        <MaterialCommunityIcons name="message" size={24} color="#FEBB5B"/>
      </TouchableOpacity>     
      <View style={styles.searchInput}>
      <AntDesign name='search1' size = {18}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Search"
          placeholderTextColor="#003f5c"
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    width: '80%',
    height: "15%",
    marginTop: '7%',
    alignSelf : "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FEBB5B",
  },
  TextInput: {
    alignItems: 'center',
  },
  msgBtn: {
    width: 75,
    borderRadius: 25,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: '70%',
    marginTop: '0%',
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#FEBB5B",
  },
  results: {
    fontSize: 30,
    fontWeight : "bold",
    color : "#FF7171",
    marginTop : '7%',
    marginLeft : '10%',
  },
  friends: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FEBB5B",
    marginTop: '10%',
    marginLeft: '5%',
  },
});
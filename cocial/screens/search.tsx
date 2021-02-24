import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.viewBtn}>
        <Text style={{color:"#003f5c"}}>View</Text>
      </TouchableOpacity>
      <View style={styles.searchInput}>
        <TextInput
          style={styles.TextInput}
          placeholder="Search"
          placeholderTextColor="#003f5c"
        />
      </View>
      <View>
        <Text style={styles.results}>Results</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEBB5B",
  },
  innerContainer: {
    backgroundColor: "#FEBB5B",
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: '80%',
    height: "7%",
    marginTop: '15%',
    alignSelf : "center",
    justifyContent: "center",
    alignItems: "center",
  },

  TextInput: {
    alignItems: 'center',
  },
  viewBtn: {
    width: 100,
    borderRadius: 25,
    height: '7%',
    alignItems: "center",
    justifyContent: "center",
    marginLeft: '10%',
    marginTop: '7%',
    backgroundColor: "#FF7171",
  },
  results: {
    fontSize: 30,
    fontWeight : "bold",
    color : "#FF7171",
    marginTop : '7%',
    marginLeft : '10%',
  }
});
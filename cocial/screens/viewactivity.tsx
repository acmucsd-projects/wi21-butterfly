import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

export default function viewActivity({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
        <Text style={styles.viewText}>View</Text>
      <View style={styles.searchBtn}>
        <TouchableOpacity>
          <Text style={{ color: "#003f5c", fontWeight: "bold", fontSize: 30 }}>Search for events</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.attending}>Events I'm Attending</Text>
        <Text style={styles.interested}>Interested Events</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  viewText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF7171",
    marginTop: '5%',
    marginLeft: '5%',
  },
  searchBtn: {
    backgroundColor: "#FF7171",
    width: '80%',
    height: "7%",
    marginTop: '5%',
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  attending: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF7171",
    marginTop: '7%',
    marginLeft: '10%',
  },
  interested: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF7171",
    marginTop: '70%',
    marginLeft: '10%',
  }
});
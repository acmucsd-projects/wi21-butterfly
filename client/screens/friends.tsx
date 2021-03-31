import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
var axios = require('axios');
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign, Entypo } from '@expo/vector-icons'
const person1Image = require('../assets/person1.jpg');
const person2Image = require('../assets/person2.jpg');
const person3Image = require('../assets/person3.jpg');

export default function Friends() {
  const [search, setSearch] = useState("");
  const [friends, setFriendOne] = useState([
    {name: "Jay", id: 1, message: 'Hey!', image: person1Image  },
    {name: "Jack", id: 1, message: 'When can you meet up?', image: person2Image},
    {name: "Mary", id: 1, message: 'Yea, I\'m down!', image: person3Image},
  ]);

  const Item = ({item}) => {
    return (
        <TouchableOpacity style={styles.activityBox}>
          <View style={styles.row}>
            <View style={styles.column}>     
              <Text style={styles.activityTitle}>{item.name} </Text>
              <Text style={styles.messageText}>{item.message} </Text>          
            </View>
          <Image style={styles.image} source={item.image} />
        </View>
        </TouchableOpacity>
    );
  }
  

  var config = {
    method: 'get',
    url: 'http://100.115.49.93:8082/api/students',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    const json = response.data;
    console.log(json[0]['friends']);
  })
  .catch(function (error) {
    console.log(error);
  });


  
  return (
    
    <View style={styles.container}>
      <Text style={styles.friends}>friends</Text>
      {/* {<TouchableOpacity style={styles.msgBtn}>
        <MaterialCommunityIcons name="message" size={24} color="#FEBB5B"/>
      </TouchableOpacity>} */}
      <View style={styles.searchInput}>
        <AntDesign name='search1' size = {18}/>
          <TextInput
            onChangeText={search => setSearch(search)}
            style={styles.TextInput}
            placeholder="  Search Friends"
            placeholderTextColor="#003f5c"
          />
      </View>
      <FlatList
        data = {friends}
        renderItem={Item}
      />
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: "#FFFFFF",
    width: '80%',
    height: "7%",
    marginTop: '7%',
    alignSelf : "center",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: "#FEBB5B",
    borderRadius : 13
  },

  TextInput: {
    width: '80%',
    alignItems: 'center',
    justifyContent: "center",
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
  friends: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FEBB5B",
    marginTop: '10%',
    marginLeft: '5%',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  // item: {
  //   // backgroundColor: 'black',
  //   marginTop: '5%',
  //   alignSelf: 'center',
  //   borderWidth: 2,
  //   height: '100%',
  //   borderRadius: 25,
  //   borderColor: "#FEBB5B",
  //   alignContent: 'center',
  //   justifyContent: "center"
  // },

  activityBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: '5%',
    alignSelf: 'center',
    borderWidth: 2,
    height: '80%',
    borderRadius: 25,
    borderColor: "#FEBB5B",
  },
  activityTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    // alignSelf: 'center',
    paddingBottom: 7,
  },
  messageText: {
    fontSize: 15,
    fontWeight: 'bold',
    // alignSelf: 'center',
    paddingBottom: 7,
  },
  image: {
    resizeMode: 'cover',
    width: 75,
    marginRight: '20%',
    height: 100,
    justifyContent: 'flex-end',
    // alignSelf: 'flex-end',
    borderRadius: 20,
  },  
  
});
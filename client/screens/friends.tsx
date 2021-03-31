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
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign, Entypo } from '@expo/vector-icons'

export default function Friends() {
  const [search, setSearch] = useState("");
  const [friendOne, setFriendOne] = useState([
    {name: "Jay", id: 1, message: 'Hey!', image: '../assets/person1.jpg'  },
  ]);
  const [friendTwo, setFriendTwo] = useState([
    {name: "Jack", id: 1, message: 'When can you meet up?'},
  ]);
  const [friendThree, setFriendThree] = useState([
    {name: "Mary", id: 1, message: 'Yea, I\'m down!'},
  ]);
  const Item = ({item}) => {
    return (
      //<TouchableOpacity style={styles.item}>
          <TouchableOpacity style={styles.activityBox}>
            <View>
              <Text style={styles.activityTitle}>{item.name} </Text>
              <Text style={styles.messageText}>{item.message} </Text>
            </View>
              <Image style={styles.image} source={require('../assets/person1.jpg')} />
          </TouchableOpacity>
        //</TouchableOpacity>
    );
  }
  const ItemTwo = ({item}) => {
    return (
      //<TouchableOpacity style={styles.item}>
      <TouchableOpacity style={styles.activityBox}>
        <View>
          <Text style={styles.activityTitle}>{item.name} </Text>
          <Text style={styles.messageText}>{item.message} </Text>
        </View>
          <Image style={styles.image} source={require('../assets/person2.jpg')} />
    </TouchableOpacity>
  //</TouchableOpacity>
    );
  }
  const ItemThree = ({item}) => {
    return (
      //<TouchableOpacity style={styles.item}>
      <TouchableOpacity style={styles.activityBox}>
        <View>
          <Text style={styles.activityTitle}>{item.name} </Text>
          <Text style={styles.messageText}>{item.message} </Text>
        </View>
          <Image style={styles.image} source={require('../assets/person3.jpg')} />
    </TouchableOpacity>
  //</TouchableOpacity>
    );
  }
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
        data = {friendOne}
        renderItem={Item}
      />
      <FlatList
        data = {friendTwo}
        renderItem={ItemTwo}
      />
      <FlatList
        data = {friendThree}
        renderItem={ItemThree}
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
    flexDirection: 'row',
    alignContent: 'center',
    width: '70%',
    marginTop: '5%',
    alignSelf: 'center',
    borderWidth: 2,
    height: '90%',
    borderRadius: 25,
    borderColor: "#FEBB5B",
  },
  activityTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 7,
  },
  messageText: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 7,
  },
  image: {
    resizeMode: 'cover',
    width: '20%',
    marginLeft: '10%',
    height: '80%',
    alignSelf: 'center',
    borderRadius: 20,
  },  
});
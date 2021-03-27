import React, { useState } from 'react';

import {Text, View, Image, StyleSheet, TouchableWithoutFeedback, Keyboard, FlatList, TextInput, TouchableOpacity} from 'react-native';

import { colors } from '../assets/theme'
import { AntDesign, Entypo } from '@expo/vector-icons';


export default function Search() {
 
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([
    {name: "Skateboarding", date: "Mon, Mar 1 AT 3PM", location: "Carmel Valley Skate Park", id: 1},
  ]);

  const changeHandler = (val) => {
    setSearch(val);
  } 

  const Item = ({item}) => {
    return (
      <TouchableOpacity style={styles.item}>
        <View style={styles.activityBox}>
        <View style={styles.activityText}>
        <Text style={styles.activityTitle}>{item.name} </Text>
        <Text ><AntDesign name="clockcircle" size={15} color="black" /> {item.date} </Text>
        <Text ><Entypo name="location-pin" size={18} color="black" />{item.location} </Text>
        </View>
        <Image style={styles.image} source={require('../assets/skateboarder.jpg')} />
        </View>
      </TouchableOpacity>
    );
  }
  
  const List = () => {
    return (
      <FlatList
        data={searchResults}
        renderItem={Item}
        keyExtractor={item => item.id}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      console.log('dismissed keyboard')
      Keyboard.dismiss();
    }}>
      <View style={styles.container}> 
        <Text style={styles.title}>Search</Text>
        <View style={styles.searchSection}>
          <AntDesign name='search1' style={styles.searchIcon} size = {18}/>
          <TextInput style={styles.searchInput} placeholder="Search" onChange={changeHandler} />
        </View>

        <Text style={styles.resultText}>Results</Text>

        <View style={styles.list}>
          <List />
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  resultText: {
    marginTop: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    marginLeft: 5,
    fontFamily: 'OpenSans',
    fontSize: 17,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  list: {
    paddingVertical: 30,
    justifyContent: 'flex-start',
    flex: 1
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: "#E3E3E3",
    width: '90%',
    height: 52,
    borderRadius: 30,
    marginTop: '5%'
  },
  searchInput: {
    flex: 1,
    borderRadius: 25,
    width: '100%',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: 'black',
    fontFamily: 'OpenSans'
  },
  searchIcon: {
    padding: 10,
    paddingLeft: 17
  },
  item: {
    marginVertical: 12,
    alignSelf: 'center',
    borderWidth: 2,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  activityBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activityText: {
    fontSize: 14,
    flexDirection: 'column',
    paddingVertical: 10,
    
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 7,
  },
  image: {
    resizeMode: 'center',
    width: 75,
    height: 75,
    borderRadius: 20,
  },
});

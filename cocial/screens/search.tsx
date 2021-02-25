import React, { useState } from 'react';
import {Text, View, Image, StyleSheet, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

const data = [
  {id: '1', text: 'One'},
  {id: '2', text: 'Two'},
  {id: '3', text: 'Three'},
  {id: '4', text: 'Four'},
  {id: '5', text: 'Five'},
  {id: '6', text: 'Six'},
  {id: '7', text: 'Seven'},
  {id: '8', text: 'Eight'},
  {id: '9', text: 'Nine'},
  {id: '10', text: 'Ten'},
  {id: '11', text: 'Eleven'},
  {id: '12', text: 'Twelve'},
  {id: '13', text: 'Thirteen'},
  {id: '14', text: 'Fourteen'},
  {id: '15', text: 'Fifteen'},
  {id: '16', text: 'Sixteen'},
  {id: '17', text: 'Seventeen'},
  {id: '18', text: 'Eighteen'},
]

const Item = ({item}) => {
  return (
    <View style={[styles.item, styles.shadow]}>
      <Text>{item.text}</Text>
    </View>
  );
}

const List = () => {
  return (
    <FlatList
      // contentContainerStyle={styles.list}
      data={data}
      renderItem={Item}
      keyExtractor={item => item.id}
    />
  );
}

export default function Search() {
 
  const [search, setSearch] = useState('');

  const changeHandler = (val) => {
    setSearch(val);
  } 

  return (
    // <TouchableWithoutFeedback onPress={() => {
    //   console.log('dismissed keyboard')
    //   Keyboard.dismiss();
    // }}>
      <View style={styles.container}> 
        <SearchBar
          placeholder="Search"
          onChangeText={changeHandler}
          value={search}
        />
        <Text style={styles.resultText}>Results</Text>
        <View style={styles.list}>
          <List />
        </View>
      </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 28
  },
  resultText: {
    marginTop: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 5,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 3.5,
    flexDirection: 'row',
    flex: 1,
    width: 500,
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
  }
});

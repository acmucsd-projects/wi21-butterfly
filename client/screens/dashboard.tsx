import React, { useState } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';

import { StyleSheet , Image, Text, View, Button, FlatList} from 'react-native';

export default function Dashboard() {
    const [newActives, setNewActives] = useState([
      {name: "Skateboarding", date: "Mon, Mar 1 AT 3PM", location: "Carmel Valley Skate Park", id: 1},

    ]);

    const [friendActives, setFriendActives] = useState([
      {name: "Grocery Run", date: "SAT, Mar 6 AT 12PM", location: "H-Mart", id: 1},

    ]);

    const [recActives, setRecActives] = useState([
      {name: "Hang Gliding", date: "SUN, Mar 8 AT 5PM", location: "Torrey Pines Gliderport", id: 1},

    ]);

    const Item = ({item}) => {
      return (
        <View style={styles.item}>
            <View style={styles.activityBox}>
            <View style={styles.activityText}>
            <Text style={styles.activityTitle}>{item.name} </Text>
            <Text ><AntDesign name="clockcircle" size={15} color="black" /> {item.date} </Text>
            <Text ><Entypo name="location-pin" size={18} color="black" />{item.location} </Text>
            </View>
            <Image style={styles.image} source={require('../assets/skateboarder.jpg')} />
            </View>
          </View>
      );
    }
const clickHandler = () => {
    alert();
  }
  return (


    <View style={styles.container}>

       <View style={styles.header}>
         <Text style={styles.title}>Cocial</Text>
         <View style={styles.profileContainer}>
           <Button color = 'black' title='Profile' onPress={clickHandler} />
         </View>
       </View>

      <Text style={styles.actHeader}>New Activites</Text>
      <FlatList
        data = {newActives}
        renderItem={Item}
      />

      <Text style={styles.actHeader}>Friend Activites</Text>
      <FlatList
        data = {friendActives}
        renderItem={Item}
      />


      <Text style={styles.actHeader}>Recommended Activites</Text>
      <FlatList style={styles.shadow}

        data = {recActives}
        renderItem={Item}
        keyExtractor={item => item.id}
      />

    </View>
    //   <View style={styles.body}>
    //     <Text>New Activites</Text>
    //       <View style={styles.box}>
    //           <Button color = 'black' title='Skateboarding' onPress={clickHandler} />
    //         </View>
    //     <Text>Friend Activites</Text>
    //       <View style={styles.box}>
    //           <Button color = 'black' title='Grocery Run' onPress={clickHandler} />
    //         </View>
    //     <Text>Recommended Activites</Text>
    //       <View style={styles.box}>
    //           <Button color = 'black' title='Handgliding @ Gliderport' onPress={clickHandler} />
    //         </View>
    //   </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 50,
    backgroundColor: '#FFFFFF',
    // alignItems: 'center',
    // justifyContent: 'flex-start'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'baseline',
    alignContent: 'center',
    justifyContent: 'space-between',
    // height: 80,
    paddingTop: 50,
  },
  title: {
    // textAlign: 'center',
    color: "#FEBB5B",
    fontSize: 20,
    fontWeight: 'bold',
  },
  actHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    backgroundColor: "#FEBB5B",
    borderRadius: 25,
  },


  item: {
    // backgroundColor: 'black',
    marginVertical: 12,
    alignSelf: 'center',
    borderWidth: 2,
    paddingHorizontal: 15,
    borderRadius: 25,

  },

  activityBox: {
    flexDirection: 'row',
    // alignItems: 'center',
    // alignContent: 'space-between',
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
    // flex: 2,
    resizeMode: 'center',
    // marginBottom: 20,
    width: 75,
    height: 75,
    // padding: 5,
    // alignContent: 'center',
    borderRadius: 20,
  },
  // box:{
  //   backgroundColor: 'white',
  //   color: "black",
  //   alignSelf: 'center',
  //   justifyContent: "center",
  //   height: "20%",
  //   width: "100%",
  //   borderWidth: 2,
  //   paddingHorizontal: 25,
  //   borderRadius: 5,
  // },


  // buttonContainer: {
  //   backgroundColor: 'black',
  //   marginVertical: 12,
  //   alignSelf: 'center',
  //   borderWidth: 2,
  //   paddingHorizontal: 20,
  //   borderRadius: 10,
  // },
  
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
});
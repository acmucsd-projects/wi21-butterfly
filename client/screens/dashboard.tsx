import React, { useState } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';

import { StyleSheet , Image, Text, View, Button, FlatList, TouchableOpacity, requireNativeComponent} from 'react-native';

import { colors } from '../assets/theme'

const skateboarding = require('../assets/skateboarder.jpg');
const surfing = require('../assets/surfing.jpg');
const studying = require('../assets/studying.jpg');
const groceries = require('../assets/groceries.jpg');
const hanggliding = require('../assets/hanggliding.jpg');

export default function Dashboard({navigation}) {
    const [newActives, setNewActives] = useState([
      {name: "Skateboarding", date: "Mon, Mar 1 AT 3PM", location: "Carmel Valley Skate Park", id: 1, image: skateboarding},
      {name: "Surfing", date: "Mon, Mar 1 AT 3PM", location: "Torrey Pines", id: 2, image: surfing},
      {name: "Studying", date: "Tues, Mar 2 AT 9PM", location: "Geisel Library", id: 3, image: studying},
    ]);

    const [friendActives, setFriendActives] = useState([
      {name: "Grocery Run", date: "SAT, Mar 6 AT 12PM", location: "H-Mart", id: 1, image: groceries},
      {name: "Skateboarding", date: "Mon, Mar 1 AT 3PM", location: "Carmel Valley Skate Park", id: 2, image: skateboarding},
    ]);

    const [recActives, setRecActives] = useState([
      {name: "Hang Gliding", date: " SUN, Mar 8 AT 5PM", location: "Torrey Pines Gliderport", id: 1, image: hanggliding},

    ]);


    const Item = ({item}) => {
      return (
        <TouchableOpacity style={[styles.item]} onPress={tempNavViewAct}>
            <View style={styles.activityBox}>
              <View style={styles.activityText}>
              <Text style={styles.activityTitle}>{item.name} </Text>
              <Text ><AntDesign name="clockcircle" size={15} color="black" /> {item.date} </Text>
              <Text ><Entypo name="location-pin" size={18} color="black" />{item.location} </Text>
              </View>
              <Image style={styles.image} source={item.image} />
            </View>
          </TouchableOpacity>
      );
    }
const clickHandler = () => {
    alert();
  }

  const tempNavViewAct = () => { //DELETE AFTER
    navigation.navigate('ActivityPage');
  }

  const profileNav = () => { //DELETE AFTER
    navigation.navigate('Profile');
  }
  return (


    <View style={styles.container}>

       <View style={styles.header}>
         <Text style={styles.title}>cocial</Text>
         <TouchableOpacity style={styles.button} onPress={profileNav}>
          <Text style={styles.buttontext}>profile</Text>
         </TouchableOpacity>
       </View>
    
    
      <View style={styles.mainPage}>
      <View style={styles.activityLabel}>
        <Text style={styles.actHeader}>New Activites</Text>
        <FlatList
          data = {newActives}
          renderItem={Item}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <View style={styles.activityLabel}>
        <Text style={styles.actHeader}>Friend Activites</Text>
        <FlatList
          data = {friendActives}
          renderItem={Item}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <View style={styles.activityLabel}>
        <Text style={styles.actHeader}>Recommended Activites</Text>
        <FlatList

          data = {recActives}
          renderItem={Item}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      </View>
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
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    marginTop: '10%',
    flexDirection: 'row',
    alignItems: 'baseline',
    // alignContent: 'center',
    // justifyContent: 'space-evenly',
    // height: 80,
    // paddingTop: 50,
  },
  title: {
    flex: 1,
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: '7%',
    fontFamily: 'GlacialIndifference-Bold',
  },
  mainPage: {
    flex: 15,
    alignContent: 'space-around',
  },
  button: {
    backgroundColor: "#FEBB5B",
    borderRadius: 30,
    width: '20%',
    alignSelf: 'flex-end',
    marginRight: '7%',
    height: '75%',
    borderWidth: 1.5,
    borderColor: "black",
  },
  buttontext: {
    color: 'black',
    marginTop: '5%',
    alignSelf: 'center',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
  },

  item: {

    marginVertical: 12,
    alignSelf: 'center',
    width: '85%',
    borderWidth: 2,
    paddingHorizontal: 15,
    borderRadius: 25,
  },

  activityLabel: {
    flex: 1,
  },
  actHeader: {
    marginLeft: '7%',
    paddingVertical: '5%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  activityBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activityText: {
    flex: 3,
    fontSize: 14,
    flexDirection: 'column',
    paddingVertical: 15,
    
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  image: {
    flex: 1,
    borderRadius: 20,
    width: 50,
    height: 75,
    marginTop: '2%',
    resizeMode: 'cover',
    

    
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
});
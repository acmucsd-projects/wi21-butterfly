import React, { useState } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

import { StyleSheet , Image, Text, View, Button, FlatList, TouchableOpacity} from 'react-native';

import { colors } from '../assets/theme'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function Profile({navigation}) {


    const [AttendStat, setAttendStat] = useState('');


    const clickHandler = () => {
        alert();
    }

    const navDashboard = () => { //DELETE AFTER
      navigation.navigate('Dashboard');
    }


  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navDashboard}>
        <Text style={styles.header}><Ionicons name={'chevron-back'} size={30} color={colors.orange} />cocial</Text>
        </TouchableOpacity>
      </View>
    
    <View style={styles.item}>

        <Image style={styles.image} source={require('../assets/lara.png')} />
        
        <View style={styles.activityText}>
        <Text style={styles.activityTitle}>Lara Conanizado </Text>

        <Text style={styles.activityText}>Hello World!</Text>
        <Text style={styles.activityText}><FontAwesome5 name="user-friends" size={18} color="black" />100 Friends</Text>
        <Text style={styles.activityText}><FontAwesome5 name="graduation-cap" size={18} color="black" />University of California San Diego </Text>
        <Text style={styles.activityText}><Entypo name="location-pin" size={18} color="black" />San Diego, California </Text>
          </View>
        <View style={{flex: 4, marginLeft: '0%', borderColor: 'black', borderTopWidth:1}}>
          <View style={styles.activityText2}>
          < Text style={styles.infoTitle}>Events</Text>


          <View style={styles.activityRow}>
            <View style={styles.activityColumn}>
            <Text style={styles.simActivityTitle}>Grocery Run </Text>
            <Text style={{marginTop: '7%'}}><AntDesign name="clockcircle" size={15} color="black" />SAT, MAR 6 AT 12PM</Text>
            <Text><Entypo name="location-pin" size={18} color="black" />H-Mart </Text>
          </View>
          
          <Image style={styles.imageSimActivity} source={require('../assets/GroceryRun.png')} />

          </View>
              
          </View>
        </View>
    </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    marginTop: '8%',
    flexDirection: 'row',
    fontSize: 30,
    fontFamily: 'GlacialIndifference-Bold',
    fontWeight: 'bold',
    color: colors.orange,
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
    flex: 16,
    marginVertical: 12,
    alignSelf: 'center',
    width: '90%',
    borderWidth: 1,
    // paddingHorizontal: 15,
    borderRadius: 20,
  },

  activityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  activityColumn: {
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginVertical: '5%'
  },
  activityText: {
    marginVertical: '4%',
    // flex: 3,
    fontSize: 14,
    flexDirection: 'column',
    alignItems: 'center',

    
  },
  activityText2: {
    // flex: 1,
    marginTop: '2%',
    marginLeft: '2%',
    // flex: 3,
    fontSize: 14,
    flexDirection: 'column',
    
  },
  infoTitle: {
    fontSize: 18,
    // fontWeight: 'bold',


  },
  simActivityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    
  },


  info: {
    fontSize: 14,
    fontFamily: "OpenSans-SemiBold",
    marginRight: '7%',
    paddingBottom: '5%',
  },
  image: {
    flex: 3,
    borderRadius: 50,
    width: '100%',
    resizeMode: 'contain',
  },
  imageSimActivity: {
    borderRadius: 20,
    width: 75,
    height: 75,
    resizeMode: 'cover',
    // alignSelf: 'flex-start',
    marginRight: '7%',
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

  dropdownContainer:{
    height: '70%',
    width: "35%",
    marginRight: '7%',
  },
  dropdown: { 
    borderTopLeftRadius: 25, borderTopRightRadius: 25,
    borderBottomLeftRadius: 25, borderBottomRightRadius: 25,
    borderWidth: 1,
    borderColor: "black",
  },
  dropdownextend: {
    borderBottomLeftRadius: 25, borderBottomRightRadius: 25,
    borderWidth: 1,
    borderColor: "black",
  },
  dropdownText: {
    // borderTopColor: 'black',
    // borderTopWidth: 1,
    // borderBottomColor: 'black',
    // borderBottomWidth: 1,
    textAlign:"center",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 13,
    
  }
});
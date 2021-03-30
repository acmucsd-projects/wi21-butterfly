import React, { useState } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

import { StyleSheet , Image, Text, View, Button, FlatList, TouchableOpacity} from 'react-native';

import { colors } from '../assets/theme'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Dashboard({navigation}) {


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
        <Text style={styles.header}><Ionicons name={'chevron-back'} size={30} color={colors.orange} />icon</Text>
        </TouchableOpacity>
      </View>
    
    <View style={styles.item}>

        <Image style={styles.image} source={require('../assets/cat.jpg')} />
        
        <View style={styles.activityText}>
        <Text style={styles.activityTitle}>ITEM TEXT </Text>
          <View style={styles.activityRow}>
          <View style={styles.activityColumn}>
            <Text style={{marginTop: '7%'}}><AntDesign name="clockcircle" size={15} color="black" /> ITEM DATE </Text>
            <Text style={{marginTop: '7%'}}><Entypo name="location-pin" size={18} color="black" />ITEM LOCATION </Text>
            </View>
            <DropDownPicker
                    items={[
                        {label: 'attending', value: 'Attending'},
                        {label: 'interested', value: 'Interested'},
                    ]}
                    defaultNull = {true}
                    placeholder="-"
                    containerStyle={styles.dropdownContainer}
                    style={styles.dropdown}
                    dropDownStyle={styles.dropdownextend}
                    placeholderStyle={{color: "grey"}}
                    labelStyle={styles.dropdownText}
                    arrowSize={13}
                    onChangeItem={(item) => setAttendStat(item)}
                />
          </View>
          
          
          <Text style={styles.infoTitle}>Info</Text>
          <Text style={styles.info}>Hey y’all! Come skate with us this Monday! We welcome all levels and experiences, so stop by and make some friends!</Text>
        </View>
        <View style={{flex: 3, marginLeft: '0%', borderColor: 'black', borderTopWidth:1}}>
          <View style={styles.activityText}>
          < Text style={styles.activityTitle}>Similar Activities</Text>


          <View style={styles.activityRow}>
            <View style={styles.activityColumn}>
            <Text style={styles.simActivityTitle}>SIMILAR ACTIVITY NAME </Text>
            <Text style={{marginTop: '7%'}}><AntDesign name="clockcircle" size={15} color="black" /> DATE</Text>
            <Text><Entypo name="location-pin" size={18} color="black" />LOCATION </Text>
          </View>
          
          <Image style={styles.imageSimActivity} source={require('../assets/cat.jpg')} />

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
    fontFamily: "OpenSans",
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
    marginVertical: '5%'
  },
  activityText: {
    marginLeft: '7%',
    // flex: 3,
    fontSize: 14,
    flexDirection: 'column',
    
  },
  activityText2: {
    marginTop: '7%',
    
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '14%',
    marginBottom: '2%',

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
    borderRadius: 20,
    width: '100%',
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
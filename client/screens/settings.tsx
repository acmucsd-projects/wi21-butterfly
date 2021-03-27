import React from 'react';
import { StyleSheet , Text, View, TouchableOpacity} from 'react-native';
import { colors } from '../assets/theme'
import { MaterialIcons } from "@expo/vector-icons";


export default function Settings({navigation}) {

  const navNoti = () => {
    navigation.navigate('Notifications');
  }
  const navDisp = () => {
    navigation.navigate('Display');
  }
  const navPriv = () => {
    navigation.navigate('Privacy');
  }
  const navHelp = () => {
    navigation.navigate('Help');
  }
  const navLogout = () => {
    navigation.navigate('Logout');
  }
  return (

    <View style={styles.container}>

      <Text style={styles.title}>Settings</Text>

      <TouchableOpacity style={[styles.button, styles.shadow]} onPress={navNoti}>
        <Text style={styles.text}>Notifications</Text>
        <MaterialIcons name="keyboard-arrow-right" size={37} color='black'/>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.shadow]} onPress={navDisp}>
        <Text style={styles.text}>Display</Text>
        <MaterialIcons name="keyboard-arrow-right" size={37} color='black'/>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.shadow]} onPress={navPriv}>
        <Text style={styles.text}>Privacy</Text>
        <MaterialIcons name="keyboard-arrow-right" size={37} color='black'/>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.shadow]} onPress={navHelp}>
        <Text style={styles.text}>Help</Text>
        <MaterialIcons name="keyboard-arrow-right" size={37}  color='black'/>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.shadow]} onPress={navLogout}>
        <Text style={styles.text}>Logout</Text>
        <MaterialIcons name="keyboard-arrow-right" size={37} color='black'/>
      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  header: {
    height: 80,
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
    alignSelf: 'flex-start',
    marginLeft: '7%',
    marginTop: '15.2%',
    marginBottom: '5%',
    color: colors.orange,
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 22,
    width: '87%',
    height: '8%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    marginLeft: '5.2%',
    // marginRight: '53%',
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
    fontSize: 16
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 90,
    shadowRadius: 90,
    
    elevation: 5,
    overflow: 'hidden'
  },
});
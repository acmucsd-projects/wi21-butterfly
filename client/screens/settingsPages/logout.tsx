import React from 'react';
import { StyleSheet , Text, View, TouchableOpacity} from 'react-native';
import { colors } from '../../assets/theme'


export default function Logout({ navigation }) {

    const navReturn = () => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Dashboard'}],
      });
    }
    const navLogout = () => {
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginSignup'}],
      });
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Would you like to log out?</Text>
      <View style={styles.logoutcontainer}>
        <TouchableOpacity style={[styles.button, styles.shadow]} onPress={navLogout}>
            <Text style={styles.text}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.shadow]} onPress={navReturn}>
            <Text style={styles.text}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginTop: '30%',
    marginBottom: '5%',
    color: colors.orange,
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'bold'
  },
  logoutcontainer:{
      flexDirection: 'row',
      flex: 1,
  },
  button: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 22,
    width: '37%',
    height: '12%',
    flexDirection: 'column', 
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
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
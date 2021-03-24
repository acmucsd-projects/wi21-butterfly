import React from 'react';
import { StyleSheet , Text, View, Button} from 'react-native';

export default function Dashboard() {

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
         
      <View style={styles.body}>
        <Text>New Activites</Text>
          <View style={styles.box}>
              <Button color = 'black' title='Skateboarding' onPress={clickHandler} />
            </View>
        <Text>Friend Activites</Text>
          <View style={styles.box}>
              <Button color = 'black' title='Grocery Run' onPress={clickHandler} />
            </View>  
        <Text>Recommended Activites</Text>
          <View style={styles.box}>
              <Button color = 'black' title='Handgliding @ Gliderport' onPress={clickHandler} />
            </View>    
      </View>
      
    

    </View>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
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
  body: {
    // flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    // padding: 10,
    // fontWeight: 'bold',
  },
  box:{
    backgroundColor: 'white',
    color: "black",
    alignSelf: 'center',
    justifyContent: "center",
    height: "20%",
    width: "100%",
    borderWidth: 2,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: 'black',
    marginVertical: 12,
    alignSelf: 'center',
    borderWidth: 2,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  profileContainer: {
    backgroundColor: "#FEBB5B",
    borderRadius: 25,
  },
});
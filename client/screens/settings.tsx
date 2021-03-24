import React from 'react';
import { StyleSheet , Text, View, Button} from 'react-native';

export default function Settings() {

  const clickHandler = () => {
    alert();
  }
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>    

      <View style={styles.buttonContainer}>
          <Button color = 'white' title='Notifications' onPress={clickHandler} />
      </View>
      <View style={styles.buttonContainer}>
          <Button color = 'white' title='Display' onPress={clickHandler} />
      </View>
      <View style={styles.buttonContainer}>
          <Button color = 'white' title='Privacy' onPress={clickHandler} />
      </View>
      <View style={styles.buttonContainer}>
          <Button color = 'white' title='Help' onPress={clickHandler} />
      </View>
      <View style={styles.buttonContainer}>
          <Button color = 'white' title='Logout' onPress={clickHandler} />
      </View>

    </View>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 50,
    // backgroundColor: '#FFFFFF',
    // alignItems: 'center',
    // justifyContent: 'flex-start'
  },
  secondContainter: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-end'
  },
  header: {
    height: 80,
    paddingTop: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: 'black',
    marginVertical: 12,
    alignSelf: 'center',
    borderWidth: 2,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
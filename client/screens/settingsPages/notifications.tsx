import React, { useState } from 'react';
import { StyleSheet , Text, View, TouchableOpacity, Switch } from 'react-native';

import { colors } from '../../assets/theme'
import { MaterialIcons } from "@expo/vector-icons";


export default function Notifications() {
    const [newPost, setNewPost] = useState(false);
    const [newEvent, setNewEvent] = useState(false);
    const [newFriend, setNewFriend] = useState(false);
    const [newMessage, setNewMessage] = useState(false);

    const newPostToggle = () => setNewPost(previousState => !previousState);
    const newEventToggle = () => setNewEvent(previousState => !previousState);
    const newFriendToggle = () => setNewFriend(previousState => !previousState);
    const newMessageToggle = () => setNewMessage(previousState => !previousState);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.shadow]} activeOpacity={1}>
        <Text style={styles.text}>New Post</Text>
        <View style={{marginRight:'3%'}}>
        <Switch
            trackColor={{ false: "#767577", true: "#99DE9F" }}
            thumbColor={newPost? "#f4f3f4" : "#f4f3f4"}
            onValueChange={newPostToggle}
            value={newPost}
        />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.shadow]} activeOpacity={1}>
        <Text style={styles.text}>Events</Text>
        <View style={{marginRight:'3%'}}>
        <Switch
            trackColor={{ false: "#767577", true: "#99DE9F" }}
            thumbColor={newEvent ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={newEventToggle}
            value={newEvent}
        />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.shadow]} activeOpacity={1}>
        <Text style={styles.text}>Friends</Text>
        <View style={{marginRight:'3%'}}>
        <Switch
            trackColor={{ false: "#767577", true: "#99DE9F" }}
            thumbColor={newFriend ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={newFriendToggle}
            value={newFriend}
        />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.shadow]} activeOpacity={1}>
        <Text style={styles.text}>Message</Text>
        <View style={{marginRight:'3%'}}>
        <Switch
            trackColor={{ false: "#767577", true: "#99DE9F" }}
            thumbColor={newMessage ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={newMessageToggle}
            value={newMessage}
        />
        </View>
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
  title: {
    fontSize: 22,
    alignSelf: 'flex-start',
    marginLeft: '7%',
    marginTop: '13%',
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
    height: '9.4%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    marginLeft: '5.2%',
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
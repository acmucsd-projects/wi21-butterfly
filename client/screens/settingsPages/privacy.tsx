import React from 'react';
import { StyleSheet , Text, View} from 'react-native';
import { colors } from '../../assets/theme'


export default function Privacy() {

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Privacy</Text> */}
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
});
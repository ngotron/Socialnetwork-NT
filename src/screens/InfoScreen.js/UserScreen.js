import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const UserScreen = () => {
  return (
    <View>
      <View style={styles.UserScreen_avt}>
        <Image
          style={styles.avt}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Vladimir_Putin_17-11-2021_%28cropped%29.jpg',
          }}
        />
        <Text style={styles.user_Name}>Ngo TRon</Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.addFriend_Btn}>
          <Text
            style={{
              color: '#ffffff',
              fontWeight: '700',
              alignItems: 'center',
            }}>
            Add Friend
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  UserScreen_avt: {
    padding: 10,
    alignItems: 'center',
  },

  avt: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'black',
  },
  addFriend_Btn: {
    backgroundColor: '#FFBF00',
    width: 120,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#000000',
  },

  user_Name: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000000'
  }
});

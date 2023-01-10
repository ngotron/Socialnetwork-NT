import React, {useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import UploadImage from '../../components/UploadImage';

import storage from '@react-native-firebase/storage';

import {Alert, Platform} from 'react-native';
import UploadImage from '../../components/UploadImage';

const AdminScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  // const [avt] = useGlobalState('avt');

  // const saveAvt = async () => {
  //   const permission = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
  //   const permissionW = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
  //   const permissionA = await request(PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION);
  //   if (permission == RESULTS.GRANTED && permissionW == RESULTS.GRANTED && permissionA == RESULTS.GRANTED) {
  //     if (avt) {
  //       const reference = firebase.storage().ref(`/avt/${avt.name}`);
  //       const realPath = await RNGRP.getRealPathFromURI(avt.uri)
  //       reference
  //         .putFile(`${avt.uri}`)
  //         .catch(e => console.log('upload img error: ', e.message));
  //       console.log('save successfully: ', avt.name);
  //       console.log("img path: ", realPath);
  //       return;
  //     }
  //     console.log("avt null, can't save");
  //   }
  // };

  const [image, setImage] = useState(null);

  const UploadAvt = async () => {
    const filename = image.substring(image.lastIndexOf('/') + 1);
    const uploadUri =
      Platform.OS === 'ios' ? image.replace('file://', '') : image;
    const task = storage().ref(filename).putFile(uploadUri);
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
    Alert.alert('Photo uploaded!');
    setImage(null);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.AdminScreen_avt}>
          <Image
            style={styles.avt}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Vladimir_Putin_17-11-2021_%28cropped%29.jpg',
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '70%',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.add_Btn}>
            <Text
              style={{
                color: '#ffffff',
                fontWeight: '700',
                alignItems: 'center',
              }}>
              Add New Post
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.add_Btn}>
            <Text
              style={{
                color: '#ffffff',
                fontWeight: '700',
                alignItems: 'center',
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <UploadImage />
            <View>
              <Text style={styles.label}>Edit your name</Text>
              <TextInput style={styles.text_Input} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '60%',
              }}>
              <Pressable style={[styles.buttonSave]} onPress={UploadAvt}>
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>

              <Pressable
                style={[styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Edit your profile</Text>
      </Pressable>
    </View>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  AdminScreen_avt: {
    width: '30%',
  },
  avt: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'black',
  },
  add_Btn: {
    backgroundColor: '#FFBF00',
    width: 120,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#000000',
  },
  edit_Btn: {
    backgroundColor: '#ffffff',
    width: 280,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFBF00',
    marginLeft: 100,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#00000099',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 350,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#ffffff',
    width: 280,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFBF00',
    marginLeft: 120,
  },
  buttonClose: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#DC0000',
    height: 25,
    width: 60,
  },
  buttonSave: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#',
    borderColor: '#FFBF00',
    height: 25,
    width: 60,
  },
  textStyle: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
  },

  label: {
    fontSize: 20,
    fontWeight: '700',
    left: 20,
    color: '#000',
  },
  text_Input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#FFBF00',
    color: '#000000',
    width: 300,
    borderRadius: 10,
  },
});

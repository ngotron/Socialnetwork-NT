import {faCamera, faPhotoVideo} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
const AddNewPost = ({navigation}) => {
  const [imageData, setImageData] = useState(null);
  const [caption, setCaption] = useState('');
  // const openCamera = async () => {
  //   setImageData(result);
  //   console.log(result);
  // };

  async function addPost() {
    await firestore()
      .collection('Posts')
      .add({
        content: caption,
        img: imageData,
      })
      .then(() => {
        navigation.navigate('MyTab');
        alert('Create Neww Item Successfully!');
      })
      .catch(error => {
        alert(error.message);
      });
  }

  function ButtonSave() {
    addPost();
  }

  function choosePic() {
    ImagePicker.openPicker({
      width: 400,
      height: 500,
      cropping: true,
    }).then(image => {
      const imageName = image.path.substring(image.path.lastIndexOf('/') + 1);
      const bucketFile = `images/${imageName}`;
      const pathToFile = image.path;
      console.log('Link cua ptt: ', pathToFile);
      let reference = storage().ref(bucketFile);
      let task = reference.putFile(pathToFile);
      // setImage(pathToFile);
      task
        .then(() => {
          console.log('Image uploaded!');
          setImageData(pathToFile);
        })
        .catch(e => console.log('uploading image error => ', e));
    });
  }

  return (
    <View>
      {imageData && (
        <Image
          source={{uri: imageData.uri}}
          style={{width: 200, height: 200}}
        />
      )}
      <View style={styles.container}>
        <TextInput
          style={styles.text_InputPost}
          value={caption}
          // onChangeText={() => {
          //   setCaption();
          // }}
          onChangeText={caption => setCaption(caption)}
          placeholder="Type your caption..."
        />
      </View>

      <TouchableOpacity style={styles.select_Img}>
        <FontAwesomeIcon
          icon={faCamera}
          size={24}
          resizeMode="contain"
          color="grey"
        />
        <Text style={styles.select_Text}>Open Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.select_Img} onPress={() => choosePic()}>
        <FontAwesomeIcon
          icon={faPhotoVideo}
          size={24}
          resizeMode="contain"
          color="grey"
        />
        <Text style={styles.select_Text}>Open Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.upload_Btn}
        onPress={() => {
          ButtonSave();
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontWeight: '700',
            alignItems: 'center',
          }}>
          Upload
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  text_InputPost: {
    width: '90%',
    height: 140,
    margin: 12,
    borderWidth: 0.2,
    borderColor: '#FFBF00',
    color: '#000000',

    borderRadius: 10,
  },
  select_Img: {
    marginTop: 15,
    width: '100%',
    borderBottomWidth: 0.2,
    borderBottomColor: '#FFBF00',
    flexDirection: 'row',

    flexBasis: 45,
    marginTop: 30,
  },
  select_Text: {
    fontSize: 20,
  },
  upload_Btn: {
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
});

export default AddNewPost;

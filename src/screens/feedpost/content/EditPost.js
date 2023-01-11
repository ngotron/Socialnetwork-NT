import {faCamera, faPhotoVideo} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const EditPost = ({navigation, route}) => {
  const {item} = route.params || {};
  console.log('item ', item);
  const [caption, onChangeCaption] = useState(item.content);
  const [img, onChangImg] = useState(item.img);

  /////Update, edit///

  async function updatePost() {
    console.log('id up :', item.id);
    await firestore()
      .collection('Posts')
      .doc(item.id)
      .update({
        content: caption,
        img: img,
      })
      .then(() => {
        navigation.navigate('MyTab');
        alert('Update Item Successfully!');
      })
      .catch(error => {
        alert(error.message);
      });
  }
  function choosePic() {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      const imageName = image.path.substring(image.path.lastIndexOf('/') + 1);
      const bucketFile = `images/${imageName}`;
      const pathToFile = image.path;
      let reference = storage().ref(bucketFile);
      let task = reference.putFile(pathToFile);
      task
        .then(() => {
          console.log('Image uploaded to the bucket!');
          onChangImg(pathToFile);
        })
        .catch(e => console.log('uploading image error => ', e));
    });
  }
  return (
    <View>
      <View>
        {img && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}>
            <Image
              source={{uri: img}}
              style={{
                width: 200,
                height: 200,

                justifyContent: 'center',
              }}
              value={img}
            />
          </View>
        )}

        <View style={styles.container}>
          <TextInput
            style={styles.text_InputPost}
            value={caption}
            onChangeText={onChangeCaption}
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
            updatePost();
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
    </View>
  );
};

export default EditPost;

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

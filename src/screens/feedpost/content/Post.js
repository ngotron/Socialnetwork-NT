import {
  faBookmark,
  faComment,
  faEllipsis,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useRef} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import useFirestoreCollection from '../../../hooks/useFirestoreCollection';
const collection = firestore().collection('Posts_Test');
const pageSize = 10;
const page = 1;
const Post = ({navigation}) => {
  const {data, loading, error, refresh} = useFirestoreCollection(
    collection,
    pageSize,
    page,
  );
  console.log(
    'id link: ',
    data.map(i => i.id),
  );

  const refRBSheet = useRef();
  useEffect(() => {
    refresh();
  }, [collection]);
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  ///////delete/////
  async function deleteItem(id) {
    await firestore()
      .collection('Posts_Test')
      .doc(id)
      .delete()
      .then(() => {
        alert('Deleted Item Successfully!');
        navigation.navigate('MyTab');
      })
      .catch(error => {
        alert(error.message);
      });
  }

  const Item = ({item}) => {
    return (
      <View>
        {/* {data.map(item => (
          <Text>{item.id}</Text>
        ))} */}
        <View style={styles.post} key={item.id}>
          <View style={styles.post_user}>
            <View style={styles.post_img}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('User');
                }}></TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('User');
                }}></TouchableOpacity>
              <Text style={styles.post_txt}>Sponsored</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
              <FontAwesomeIcon icon={faEllipsis} />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={styles.img_post}
          source={{
            uri: item.img,
          }}
        />
        <View>
          <Text>{item.content}</Text>
          {/* <Text>{item.id}</Text> */}
        </View>
        <View style={styles.postInfor}>
          <View style={styles.postInfor_icon}>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faPaperPlane} />
          </View>
          <View>
            <FontAwesomeIcon icon={faBookmark} />
          </View>
        </View>

        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          customStyles={{
            wrapper: {
              backgroundColor: '#00000099',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
            container: {
              backgroundColor: 'white',
            },
          }}
          height={300}>
          <View style={styles.rbSheet_Container}>
            <TouchableOpacity
              style={styles.del_Btn}
              onPress={() => {
                deleteItem(item.id);
              }}>
              <Text>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.edit_Btn}
              onPress={() => navigation.navigate('UpdatePost', {item})}>
              <Text>Edit Post</Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </View>
    );
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator color="#000" size="large" />
      ) : (
        <FlatList
          style={styles.container}
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          onRefresh={refresh}
          renderItem={Item}
          refreshing={loading}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopColor: '#DCDCDC',
    borderTopWidth: 1,
    marginTop: 10,
    height: '100%',
  },
  post_user: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  post: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    padding: 10
    
    
  },
  post_img: {
    marginRight: 10,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  post_title: {
    fontSize: 15,
    fontWeight: '600',
  },
  img_post: {
    resizeMode: 'cover',
    height: 300,
    width: '100%',
  },
  postInfor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  postInfor_icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
  },
  postLike: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  postLike_txt: {
    fontWeight: '600',
    fontSize: 16,
  },
  postComment: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  postComment_use: {
    fontWeight: '600',
    fontSize: 16,
    marginRight: 5,
  },
  postComment_txt: {
    fontSize: 13,
    marginTop: 3,
  },
  containerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
  bottomSheet_container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rbSheet_Container: {
    alignItems: 'center',
  },
  del_Btn: {
    backgroundColor: '#ffffff',
    width: 280,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFBF00',
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
  },
});
export default Post;

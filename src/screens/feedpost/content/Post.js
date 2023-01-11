import {
  faBookmark,
  faComment,
  faEllipsis,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import firestore from '@react-native-firebase/firestore';
import {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useFirestoreCollection from '../../../hooks/useFirestoreCollection';
const Post = () => {
  const collection = firestore().collection('Posts');
  const pageSize = 10;
  const page = 1;
  const {data, loading, error, refresh} = useFirestoreCollection(
    collection,
    pageSize,
    page,
  );

  useEffect(() => {
    refresh();
  }, []);
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const Item = ({item}) => {
    return (
      <View
      // style={styles.container}
      >
        <View style={styles.post}>
          <View style={styles.post_user}>
            <View style={styles.post_img}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('User');
                }}></TouchableOpacity>
            </View>
            <View>
              {}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('User');
                }}></TouchableOpacity>
              <Text style={styles.post_txt}>Sponsored</Text>
            </View>
          </View>
          <View>
            <FontAwesomeIcon icon={faEllipsis} />
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
          <Text>{item.id}</Text>
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
      </View>
    );
  };

  return (
   
    <>
      {loading ? (
        <ActivityIndicator color="#00ff00" size="large" />
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
    </>
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
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
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
});
export default Post;

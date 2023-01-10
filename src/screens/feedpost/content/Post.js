import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getAllPosts} from '../../../firebase/post.fb';
const Post = ({navigation}) => {
  const [myData, setMydata] = useState([]);
  useEffect(() => {
    getDatabase();
    
  }, []);

  const getDatabase = async () => {
    const posts = await getAllPosts();
    console.log("posts", posts);
    try {
      // Colection Lưu trữ danh sách tài liệu=> Cho phép tham chiếu đến testing
      // Tham chiếu đến một tài liệu = doc
      const data = await firestore()
        .collection('Posts')
        .doc()
        .get();
      console.log(data.id);
      setMydata(data._data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.post_user}>
          <View style={styles.post_img}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('User');
              }}>
              <Image style={styles.img} source={{uri: myData.avt}} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('User');
              }}>
              <Text style={styles.post_title}>{myData.name}</Text>
            </TouchableOpacity>
            <Text style={styles.post_txt}>Sponsored</Text>
          </View>
        </View>
        <View>
          <FontAwesomeIcon icon={faEllipsis} />
        </View>
      </View>
      <Image style={styles.img_post} source={{uri: myData.postImg}} />
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
      <View style={styles.postLike}>
        <Text style={styles.postLike_txt}>100 Likes</Text>
      </View>
      <View style={styles.postComment}>
        <Text style={styles.postComment_use}>Usename</Text>
        <Text style={styles.postComment_txt}>
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt... more
        </Text>
      </View>
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

import firestore from '@react-native-firebase/firestore';
import {useEffect, useRef, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';

const Comments = ({route}) => {
  const {postId, comments, userId} = route.params;
  const [comment, setComment] = useState('');
  const [listComment, setListComment] = useState([]);
  const inputRef = useRef();
  useEffect(() => {
    firestore()
      .collection('Posts')
      .doc(postId)
      .get()
      .then(res => {
        setListComment(res._data.comments);
      });
  }, []);

  const postComments = () => {
    listComment.push({
      comment: comment,
      userId: userId,
      postId: postId,
    });
    console.log(listComment);
    firestore()
      .collection('Posts')
      .doc(postId)
      .update({
        comments: listComment,
      })
      .then(() => {
        console.log('Comment successffuly!');
      });
    inputRef.current.clear();
  };

  const Item = ({item}) => {
    return (
      <View key={item.id} style={styles.listComment}>
        <Image
          style={styles.imgComment}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeVKKhcw5BVb33-sIFbVwBxpGvFjAORNkHA&usqp=CAU',
          }}
        />
        <Text style={styles.txtComment}>{item.comment}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={listComment}
        keyExtractor={item => item.id}
        renderItem={Item}
      />
      <View
        style={{
          width: '100%',
          height: 60,
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <TextInput
          ref={inputRef}
          style={{width: '78%', marginLeft: 20}}
          placeholder="Type comment here..."
          value={comment}
          onChangeText={comment => setComment(comment)}
        />
        <Text
          style={styles.postComments}
          onPress={() => {
            postComments();
          }}>
          Send
        </Text>
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  listComment: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  imgComment: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginLeft: 10,
    marginRight: 15,
  },
  txtComment: {
    fontSize: 18,
    fontWeight: '600',
  },
  postComments: {
    marginRight: 20,
    fontSize: 20,
  },
});

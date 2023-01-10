import firestore from '@react-native-firebase/firestore';

const POSTS_COLLECTION = 'Posts';

export const getAllPosts = async () => {
  const docs = await (
    await firestore().collection(POSTS_COLLECTION).get()
  ).docs;
  return docs.map(doc => ({...doc.data(), id: doc.id}));
};



import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Test = () => {
  const [myData, setMydata] = useState([])
  useEffect(() => {
    getDatabase();
  }, [])
  const getDatabase = async () => {
    try {
      // Colection Lưu trữ danh sách tài liệu=> Cho phép tham chiếu đến testing
      // Tham chiếu đến một tài liệu = doc
      const data = await firestore().collection('test').doc('ZlderPROtoKupYye7SvD').get();
      console.log(data._data)
      setMydata(data._data)
    } catch (error) {
      console.log(error)
    }
  }
  return (

    <View>
      <Text>Test</Text>
      <Text>Name:{myData.age}</Text>
      <Text>Age: {myData.name}</Text>
      {/* <Text>Hobby: {myData.hobby.map((list) => ` ${list} `)}</Text> */}
    </View>
  )
}
export default Test

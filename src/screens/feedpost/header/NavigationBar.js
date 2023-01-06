import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Post from '../content/Post';
// import Post from '../content/Post';

const Navigation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header_bar}>
        <View style={styles.header_logo}>
          <Text style={styles.header_txt}>Instagram</Text>
          <FontAwesomeIcon style={{ alignSelf: 'center' }} icon={faAngleDown} />
        </View>
        <View style={styles.header_icon}>
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faFacebookMessenger} />
          <FontAwesomeIcon icon={faSquarePlus} />
        </View>
      </View>
      <View style={styles.header_story}>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <View style={styles.story_acc}>
            <View style={styles.story_account}>
              <Image
                style={styles.story_img}
                source={{
                  uri: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9',
                }}
              />
              <FontAwesomeIcon style={styles.story_icon} icon={faPlus} />
            </View>
            <Text>Ruffles</Text>
          </View>
          <View style={styles.story_acc}>
            <View style={styles.story_account}>
              <Image
                style={styles.story_img}
                source={{
                  uri: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9',
                }}
              />
            </View>
            <Text>Ruffles</Text>
          </View>
          <View style={styles.story_acc}>
            <View style={styles.story_account}>
              <Image
                style={styles.story_img}
                source={{
                  uri: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9',
                }}
              />
            </View>
            <Text>Ruffles</Text>
          </View>
          <View style={styles.story_acc}>
            <View style={styles.story_account}>
              <Image
                style={styles.story_img}
                source={{
                  uri: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9',
                }}
              />
            </View>
            <Text>Ruffles</Text>
          </View>
          <View style={styles.story_acc}>
            <View style={styles.story_account}>
              <Image
                style={styles.story_img}
                source={{
                  uri: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9',
                }}
              />
            </View>
            <Text>Ruffles</Text>
          </View>
        </ScrollView>
      </View>
      <Post navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  header_bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  header_txt: {
    fontSize: 30,
  },
  scrollView: {
    horizontal: 'false',
    marginHorizontal: 20,
  },
  header_logo: {
    flexDirection: 'row',
  },
  header_icon: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  story_img: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  header_story: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  story_acc: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 7,
  },
  story_account: {
    position: 'relative',
  },
  story_icon: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    padding: 5,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 20,
  },
});
export default Navigation;

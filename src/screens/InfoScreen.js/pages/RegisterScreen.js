import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import auth from "@react-native-firebase/auth";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import SplashScreen from './SplashScreen';

const RegisterScreen = ({ navigation }) => {
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errortext, setErrortext] = useState("");

  const onRegisterPress = () => {
    setErrortext("");
    if (!email) {
      alert("Please enter email");
      return
    }
    if (!password) {
      alert("Please enter password");
      return
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('User account created & signed in!');
        alert('Registration Successful. Please Login to proceed!')
        if (user) {
          <SplashScreen />
          navigation.replace("Login")
        }
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
          if (initializing) setInitializing(false);
        }
        if (error.code === 'auth/invalid-email') {
          setErrortext(error.message = "That email address is invalid!");
          console.log('That email address is invalid!');
        } else if (error.code === "auth/user-not-found")
          setErrortext("No User Found");
        else {
          setErrortext(
            "Please check your email id or password"
          );
        }
        console.error(error);
      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.container_logo}>
        <Text style={styles.logo}>Instagram</Text>
        <View>
          <TextInput
            style={styles.Login_user}
            placeholder="Enter your email address"
            value={email}
            onChangeText={(email) => setName(email)}
          />
          <TextInput
            style={styles.Login_password}
            placeholder="Enter your password"
            value={password}
            secureTextEntry={true}
            onChangeText={(password) => { setPassword(password) }}
          />
        </View>
        <TouchableOpacity
          style={styles.Login_button}
          onPress={() => onRegisterPress()}
        >
          <Text style={styles.Login_txt}>Register</Text>
        </TouchableOpacity>
        {errortext != "" ? (
          <Text style={styles.errorTextStyle}>
            {errortext}
          </Text>
        ) : null}
        <View>
          <Text style={styles.txt_or}>Or</Text>
        </View>
        <View style={styles.Login_fb}>
          <FontAwesomeIcon
            style={styles.Login_fb_icon}
            icon={faSquareFacebook}
            size={20}
          />
          <Text>Login in with Facebook</Text>
        </View>

        <View style={styles.signup}>
          <Text style={styles.Login_ask}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Login")
            }
          >
            <Text style={styles.Login_signup}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
};
export default RegisterScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_logo: {
    flexDirection: 'column',
    width: '80%',
    height: '70%',
  },
  logo: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 70,
  },
  Login_button: {
    backgroundColor: '#00BFFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  Login_user: {
    borderWidth: 1,
    borderRadius: 5,
    color: 'grey',
    padding: 10,
    marginBottom: 5,
  },
  Login_password: {
    borderWidth: 1,
    borderRadius: 5,
    color: 'grey',
    padding: 10,
    marginBottom: 5,
  },
  Login_txt: {
    color: 'white',
    textAlign: 'center',
  },
  Login_fgPassword: {
    color: 'blue',
    textAlign: 'center',
    marginBottom: 20,
  },
  Login_fb: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 20,
  },
  Login_fb_icon: {
    color: '#4f67b0',
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ask: {
    fontSize: 15,
    textAlign: 'center',
  },
  txt_or: {
    textAlign: 'center',
    marginBottom: 20,
  },
  Login_signup: {
    textAlign: 'center',
    fontWeight: '600',
    alignItems: 'center',
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
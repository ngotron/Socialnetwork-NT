import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import auth from "@react-native-firebase/auth";
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
// const auth = getAuth();
const Login = ({ navigation }) => {
  // const [initializing, setInitializing] = useState(true);
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errortext, setErrortext] = useState("");
  // const [user, setUser] = useState();
  // const auth = getAuth();
  // console.log("Name: " + email, "Password: " + password);
  // console.log('auth: ', auth())
  const onLoginPress = () => {
    // if (!email) {
    //   alert("Please enter email");
    //   return
    // }
    // if (!password) {
    //   alert("Please enter password");
    //   return
    // }
    // auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     console.log("ok")
    //     console.log("Email: " + email)
    //     console.log("Password: " + password)
    //     if (initializing) setInitializing(false);
    //     if (user) navigation.replace("MyTab")
    //   })
    //   .catch((error) => {
    //     console.log("Email: " + email)
    //     console.log("Password: " + password)
    //     if (initializing) setInitializing(false);
    //     // console.log("User: " + userCredential.user)
    //     console.log("Error: " + error)
    //     if (error.code === "auth/invalid-email")
    //       setErrortext(error.message);
    //     else if (error.code === "auth/user-not-found")
    //       setErrortext("No User Found");
    //     else {
    //       setErrortext(
    //         "Please check your email id or password"
    //       );
    //     }
    //   })
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     // const user = userCredential.user;
    //     console.log("successfully")
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
  }
  return (
    <View style={styles.container}>
      <View style={styles.container_logo}>
        <Text style={styles.logo}>Instagram</Text>
        <View>
          <TextInput
            style={styles.Login_user}
            placeholder="Phone number, username or emal address"
            value={email}

            // onChange={(e) => setName(e.target.value)}
            onChangeText={(email) => setName(email)}
          />
          <TextInput
            style={styles.Login_password}
            placeholder="Password"
            value={password}
            // onChange={(e) => setPassword(e.target.value)}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity
          style={styles.Login_button}
          onPress={() => navigation.navigate('MyTab')}
          // onPress={() => onLoginPress()}
        >
          <Text style={styles.Login_txt}>Login</Text>
        </TouchableOpacity>
        {errortext != "" ? (
          <Text style={styles.errorTextStyle}>
            {" "}
            {errortext}{" "}
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
        <View>
          <Text style={styles.Login_fgPassword}>Forgotten your password?</Text>
        </View>
        <View style={styles.signup}>
          <Text style={styles.Login_ask}>Don't have an account?</Text>
          <TouchableOpacity
          // style={styles.Login_button}
          // onPress={() => onLoginPress()}
          >
            <Text style={styles.Login_signup}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
};
export default Login;
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
    marginBottom: 20,
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
});

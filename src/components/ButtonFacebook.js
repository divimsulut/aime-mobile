import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { horizontalScale, moderateScale, verticalScale } from "../constant";
import { IconFacebook } from "../assets";
import { Svg } from "react-native-svg";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as Google from "expo-auth-session/providers/google";
import {
  signInWithCredential,
  GoogleAuthProvider,
  FacebookAuthProvider,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config";
import axios from "axios";
import { useNavigation, CommonActions } from "@react-navigation/native";

const ButtonFacebook = ({ text }) => {
  const navigation = useNavigation();
  const [requestGoogle, responseGoogle, promptAsyncGoogle] =
    Google.useAuthRequest({
      expoClientId:
        "17458371709-8pcua1v57f3qgdaubfifj1unuui125ug.apps.googleusercontent.com",
      androidClientId:
        "17458371709-81l067b2knfkcm16qivc4v431o2q5o0a.apps.googleusercontent.com",
    });
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "957707211936307",
  });
  const [modalGoogle, setModalGoogle] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const [facebookCredential, setFacebookCredential] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getFacebookEmail = async (token) => {
    return await new Promise((resolve, reject) => {
      axios
        .get(`https://graph.facebook.com/me?access_token=${token}&fields=email`)
        .then((res) => {
          console.log("res: ", res.data.email);
          resolve(res.data.email);
        })
        .catch((err) => {
          console.log("err: ", err);
          reject(err);
        });
    });
  };

  useEffect(() => {
    if (responseGoogle?.type === "success") {
      const credential = GoogleAuthProvider.credential(
        responseGoogle.authentication.idToken,
        responseGoogle.authentication.accessToken
      );
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          linkWithCredential(userCredential.user, facebookCredential)
            .then(() => {
              alert("Success Linking");
              setModalGoogle(false);
            })
            .catch((err) => {
              alert("errorLinking: " + err.code);
            });
        })
        .catch((error) => {
          alert("error in google sign in: " + error);
        });
    }
  }, [responseGoogle]);

  useEffect(() => {
    if (response?.type === "success") {
      const access_token = response.authentication.accessToken;
      const credential = FacebookAuthProvider.credential(access_token);
      signInWithCredential(auth, credential).catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          setFacebookCredential(credential);
          getFacebookEmail(access_token).then((email) => {
            console.log("email: ", email);
            setEmail(email);
            fetchSignInMethodsForEmail(auth, email).then((providers) => {
              console.log(providers);
              switch (providers[0]) {
                case "google.com":
                  setModalGoogle(true);
                  break;
                case "password":
                  setModalPassword(true);
                  break;
                default:
                  alert("Providers not found");
                  break;
              }
            });
          });
        }
      });
    }
  }, [response]);
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          console.log("press");
          promptAsync();
        }}
      >
        <View style={styles.button}>
          <Svg height="31.36" width="17" viewBox="0 0 17 31.36">
            <IconFacebook />
          </Svg>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
      <Modal transparent={true} animated="slide" visible={modalGoogle}>
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100%",
            paddingHorizontal: "10%",
          }}
        >
          <View
            style={{
              backgroundColor: "#E5E7E5",
              position: "absolute",
              top: "50%",
              transform: [{ translateY: -100 }],
              alignSelf: "center",
              paddingVertical: "4%",
              paddingHorizontal: "4%",
              alignItems: "center",
              borderRadius: 15,
            }}
          >
            <Text style={{ textAlign: "center" }}>
              User with email{" "}
              <Text style={{ fontFamily: "Poppins-SemiBold" }}>{email}</Text>{" "}
              already exist. Do you want to link your Facebook with Google
              account?
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#08C755",
                borderRadius: moderateScale(20),
                width: horizontalScale(100),
                alignItems: "center",
                paddingVertical: 8,
                marginTop: "4%",
              }}
              disabled={!requestGoogle}
              onPress={() => promptAsyncGoogle()}
            >
              <Text style={{ color: "#E5E7E5" }}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: "#AC253A",
                backgroundColor: "transparent",
                borderRadius: moderateScale(20),
                width: horizontalScale(100),
                alignItems: "center",
                paddingVertical: 8,
                marginTop: "2%",
              }}
              onPress={() => setModalGoogle(false)}
            >
              <Text style={{ color: "#AC253A" }}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal transparent={true} animated="slide" visible={modalPassword}>
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100%",
            paddingHorizontal: "10%",
          }}
        >
          <View
            style={{
              backgroundColor: "#E5E7E5",
              position: "absolute",
              top: "50%",
              transform: [{ translateY: -100 }],
              alignSelf: "center",
              paddingVertical: "4%",
              paddingHorizontal: "4%",
              alignItems: "center",
              borderRadius: 15,
            }}
          >
            <Text style={{ textAlign: "center" }}>
              User with email{" "}
              <Text style={{ fontFamily: "Poppins-SemiBold" }}>{email}</Text>{" "}
              already exist. If you want to link your Facebook with existing
              account, please enter your password.
            </Text>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              style={{
                backgroundColor: "white",
                paddingVertical: 1,
                paddingHorizontal: 10,
                width: 200,
                marginTop: 8,
                borderRadius: 10,
              }}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#08C755",
                borderRadius: moderateScale(20),
                width: horizontalScale(100),
                alignItems: "center",
                paddingVertical: 8,
                marginTop: "4%",
              }}
              // disabled={}
              onPress={() => {
                signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    linkWithCredential(userCredential.user, facebookCredential)
                      .then(() => {
                        alert("Success Linking");
                        setModalPassword(false);
                      })
                      .catch((err) => {
                        alert("errorLinking: " + err.code);
                      });
                  })
                  .catch((err) => {
                    alert("errorSignIn: " + err.code);
                  });
              }}
            >
              <Text style={{ color: "#E5E7E5" }}>Link</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: "#AC253A",
                backgroundColor: "transparent",
                borderRadius: moderateScale(20),
                width: horizontalScale(100),
                alignItems: "center",
                paddingVertical: 8,
                marginTop: "2%",
              }}
              onPress={() => setModalPassword(false)}
            >
              <Text style={{ color: "#AC253A" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ButtonFacebook;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(30),
    backgroundColor: "white",
    paddingVertical: verticalScale(8),
    height: verticalScale(60),
    width: horizontalScale(167),
    alignSelf: "center",
    backgroundColor: "#3498DB",

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.49,
    shadowRadius: 4,

    elevation: 5,
  },
  buttonText: {
    marginLeft: horizontalScale(22),
    fontFamily: "Poppins-Bold",
    fontSize: moderateScale(15),
    color: "white",
  },
});

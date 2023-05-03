import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { horizontalScale, moderateScale, verticalScale } from "../constant";
import { IconGoogle } from "../assets";
import { Svg } from "react-native-svg";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../config";
import { useNavigation, CommonActions } from "@react-navigation/native";

const ButtonGoogle = ({ text }) => {
  const navigation = useNavigation();
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "17458371709-8pcua1v57f3qgdaubfifj1unuui125ug.apps.googleusercontent.com",
    androidClientId:
      "17458371709-81l067b2knfkcm16qivc4v431o2q5o0a.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const credential = GoogleAuthProvider.credential(
        response.authentication.idToken,
        response.authentication.accessToken
      );
      signInWithCredential(auth, credential).catch((error) => {
        alert("error in google sign in: " + error);
      });
    }
  }, [response]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={!request}
      onPress={() => promptAsync()}
    >
      <View style={styles.button}>
        <Svg height="36" width="36" viewBox="0 0 44 44">
          <IconGoogle />
        </Svg>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonGoogle;

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
    marginLeft: horizontalScale(14),
    fontFamily: "Poppins-Bold",
    fontSize: moderateScale(15),
    color: "black",
  },
});

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { horizontalScale, moderateScale, verticalScale } from "../constant";
import { IconGoogle } from "../assets";
import { Svg } from "react-native-svg";
import { googleSignIn } from "../config";
import { useNavigation } from "@react-navigation/native";

const ButtonGoogle = ({ text }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        googleSignIn()
          .then(() => navigation.navigate("Tabs"))
          .catch(() => console.log("error"))
      }
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

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { horizontalScale, moderateScale, verticalScale } from "../constant";
import { IconFacebook } from "../assets";
import { Svg } from "react-native-svg";

const ButtonFacebook = ({ text }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.button}>
        <Svg height="31.36" width="17" viewBox="0 0 17 31.36">
          <IconFacebook />
        </Svg>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
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

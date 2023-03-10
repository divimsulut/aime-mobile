import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { horizontalScale, verticalScale, moderateScale } from "../../constant";

const ButtonNext = ({ text, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ width: horizontalScale(300) }}
      onPress={() => {
        navigation.replace("SignUp");
      }}
    >
      <LinearGradient style={styles.button} colors={["#FFF504", "#C69D0E"]}>
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonNext;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: verticalScale(8),
    borderRadius: moderateScale(18),

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
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(21),
    color: "black",
  },
});

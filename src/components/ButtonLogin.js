import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, verticalScale } from "../constant";

const ButtonLogin = ({ text, signIn }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={signIn}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonLogin;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: verticalScale(8),
    borderRadius: moderateScale(30),
    backgroundColor: "white",
    paddingVertical: verticalScale(8),
    height: verticalScale(55),
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#00284D",

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
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: moderateScale(16),
  },
});

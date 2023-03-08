import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../../constant";
import { ImageGreenChecklist } from "../../../assets";

const PassChanged = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image source={ImageGreenChecklist} style={{ alignSelf: "center" }} />
        <Text style={styles.textHeader}>Password changed</Text>
        <Text style={styles.textDetail}>
          Your password has been changed successfully
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonContainer}
          onPress={() => {
            navigation.replace("SignIn");
          }}
        >
          <Text style={styles.textButton}>Back to signin page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PassChanged;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "rgba(192, 192, 192, 0.2)",
  },
  container: {
    marginHorizontal: horizontalScale(40),
    marginTop: verticalScale(270),
  },
  textHeader: {
    fontFamily: "Poppins-Medium",
    color: "black",
    fontSize: moderateScale(30),
    textAlign: "center",
    alignSelf: "center",
  },
  textDetail: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(15),
    color: "#817575",
    width: horizontalScale(300),
    textAlign: "center",
    alignSelf: "center",
  },
  buttonContainer: {
    backgroundColor: "#00284D",
    height: verticalScale(50),
    borderRadius: moderateScale(30),
    marginTop: verticalScale(25),
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontFamily: "Poppins-Bold",
    fontSize: moderateScale(16),
    color: "white",
  },
});

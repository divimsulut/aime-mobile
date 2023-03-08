import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../constant";
import { ImageGreenChecklist } from "../../../assets";

const SuccessRegister = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Image source={ImageGreenChecklist} />
        </View>
        <Text style={styles.textSuccessfull}>Successfully Registered!</Text>
        <Text style={styles.textDetail}>
          Congratulations, your account is already registered in this
          application
        </Text>

        <View
          style={{
            marginTop: verticalScale(50),
          }}
        >
          {/* Back Button Start */}
          <TouchableOpacity
            onPress={() => {
              navigation.replace("SignIn");
            }}
            activeOpacity={0.8}
            style={styles.buttonBack}
          >
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: moderateScale(16),
                color: "white",
              }}
            >
              Back to Sign In page
            </Text>
          </TouchableOpacity>
          {/* Back Button Start */}
        </View>
      </View>
    </View>
  );
};

export default SuccessRegister;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "rgba(192, 192, 192, 0.2)",
  },
  container: {
    marginHorizontal: horizontalScale(40),
    marginTop: verticalScale(103),
  },
  textSuccessfull: {
    fontFamily: "Poppins-Medium",
    color: "black",
    fontSize: moderateScale(30),
    textAlign: "center",
    marginTop: verticalScale(32),
  },
  textDetail: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(15),
    color: "#464646",
    textAlign: "center",
    alignSelf: "center",
    width: horizontalScale(300),
    marginTop: verticalScale(23),
  },
  textFooter: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(12),
    color: "#817575",
    marginTop: verticalScale(70),
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: verticalScale(80),
    borderRadius: moderateScale(50),
    // backgroundColor: 'red',
  },
  buttonBack: {
    backgroundColor: "#00284D",
    height: verticalScale(50),
    width: horizontalScale(247),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(30),

    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

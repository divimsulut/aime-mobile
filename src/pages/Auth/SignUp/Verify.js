import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../constant";
import { IconBack } from "../../../assets";
import { ImageEmail } from "../../../assets";
import ButtonResendVCode from "./components/ButtonResendVCode";

const Verify = ({ navigation, route }) => {
  const { email } = route.params;
  return (
    <View style={styles.page}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <IconBack />
      </TouchableOpacity>

      <View style={styles.container}>
        {/* Header Start */}
        <Text style={styles.textVerify}>Verify your email</Text>
        <Text style={styles.textDetail}>
          You will need to verify your email to complete registration
        </Text>
        {/* Header End */}

        <View style={styles.imageContainer}>
          <Image source={ImageEmail} />
        </View>
        <Text style={styles.textFooter}>
          An email has been sent to{" "}
          <Text style={{ fontFamily: "Poppins-SemiBold" }}>{email}</Text> with a
          link to verify your account. if you have not received the email after
          few minutes, please check your spam folder.
        </Text>
        <View
          style={{
            marginTop: verticalScale(70),
          }}
        >
          <ButtonResendVCode
            text={"Resend Verification Link"}
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  );
};

export default Verify;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    top: verticalScale(40),
    left: horizontalScale(30),
    // backgroundColor: "green",
  },
  page: {
    flex: 1,
    backgroundColor: "rgba(192, 192, 192, 0.2)",
  },
  container: {
    marginHorizontal: horizontalScale(40),
    marginTop: verticalScale(103),
  },
  textVerify: {
    fontFamily: "Poppins-Medium",
    color: "black",
    fontSize: moderateScale(30),
    textAlign: "center",
  },
  textDetail: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(15),
    color: "#464646",
    textAlign: "center",
    alignSelf: "center",
    width: horizontalScale(300),
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: verticalScale(80),
    borderRadius: moderateScale(50),
  },
  textFooter: {
    alignItems: "center",
    color: "#817575",
    fontSize: moderateScale(12),
    textAlign: "center",
    marginTop: verticalScale(72),
  },
});

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../constant";
import { IconBack } from "../../../assets";
import { ImageEmail } from "../../../assets";
import { getCurrentUser } from "../../../config";
import { sendEmailVerification } from "firebase/auth";
import { ScrollView } from "react-native";

const Verify = ({ navigation, route }) => {
  const { email } = route.params;
  const [countDown, setCountDown] = useState(30);
  const [user, setUser] = useState(null);

  getCurrentUser()
    .then((user) => setUser(user))
    .catch((error) => console.log(error));

  // timeout to resend email
  useEffect(() => {
    let interval = null;

    if (countDown > 0) {
      interval = setInterval(() => {
        setCountDown(countDown - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [countDown]);

  return (
    <ScrollView style={styles.page}>
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
          {countDown === 0 ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                sendEmailVerification(user)
                  .then(() =>
                    alert(
                      "Verification link has been sent to your email address. Check 'Spam' if the email is not in your inbox."
                    )
                  )
                  .catch((error) =>
                    alert(error.code + " Please try again later.")
                  );
                setCountDown(30);
              }}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Resend verification link</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: moderateScale(12),
                  color: "#1E1E1E",
                }}
              >
                Send link again
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: moderateScale(12),
                  color: "#817575",
                  marginLeft: horizontalScale(5),
                }}
              >
                {countDown}
              </Text>
            </View>
          )}
          <View style={{ alignItems: "center", marginTop: verticalScale(30) }}>
            <Text>Email verified?</Text>
            <TouchableOpacity onPress={() => navigation.replace("SignIn")}>
              <Text style={{ color: "#007DE4" }}>Go to login screen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ height: verticalScale(50) }}></View>
    </ScrollView>
  );
};

export default Verify;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    top: verticalScale(40),
    left: horizontalScale(30),
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

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../../constant";
import { IconBack } from "../../../assets";
import { Input } from "../../../components";
import { resetPass } from "../../../config";

const ForgetPass = ({ navigation }) => {
  const [countDown, setCountDown] = useState(0);
  const [email, setEmail] = useState("");

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
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.page}>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: verticalScale(40),
            left: horizontalScale(30),
          }}
          onPress={() => {
            navigation.goBack("SignIn");
          }}
        >
          <IconBack />
        </TouchableOpacity>

        <View style={styles.container}>
          <Text style={styles.textHeader}>Forgat password?</Text>
          <Text style={styles.textDetail}>
            Don't worry! It happens. Please enter the email associated with your
            account.
          </Text>
          <View style={styles.form}>
            <Text style={styles.textLabel}>Email Address</Text>
            <View style={{ marginTop: verticalScale(10) }}>
              <Input
                placeholder="Enter your email address"
                onChangeText={(e) => setEmail(e)}
              />
            </View>
          </View>
          {countDown === 0 ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.buttonContainer}
              onPress={() => {
                resetPass(email)
                  .then(() => {
                    setCountDown(30);
                    alert(
                      "Reset link sent to your email. Please check your inbox or spam folder."
                    );
                  })
                  .catch((err) => alert(err));
              }}
            >
              <Text style={styles.textButton}>Send reset link</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
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
        </View>
        <View style={styles.footer}>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: moderateScale(12),
              color: "#817575",
            }}
          >
            Remember password?{" "}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: moderateScale(12),
                color: "#1E1E1E",
              }}
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default ForgetPass;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "rgba(192, 192, 192, 0.2)",
  },
  container: {
    marginHorizontal: horizontalScale(40),
    marginTop: verticalScale(110),
  },
  textHeader: {
    fontFamily: "Poppins-Medium",
    color: "black",
    fontSize: moderateScale(30),
  },
  textDetail: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(15),
    color: "#817575",
    width: horizontalScale(300),
  },
  form: {
    marginTop: verticalScale(70),
  },
  textLabel: {
    fontFamily: "Poppins-Light",
    fontSize: moderateScale(12),
    color: "black",
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
  footer: {
    marginTop: verticalScale(300),
    alignSelf: "center",
    flexDirection: "row",
  },
});

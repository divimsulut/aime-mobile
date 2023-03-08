import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { React, useRef, useState } from "react";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../constant";
import { IconBack } from "../../../assets";

const OtpPage = ({ navigation }) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "" });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.page}>
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
          <Text style={styles.textHeader}>Please check your email</Text>
          <View>
            <Text style={styles.textDetail}>We've sent a code to</Text>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: moderateScale(15),
                color: "#1E1E1E",
              }}
            >
              yakikato123@gmail.com
            </Text>
          </View>

          {/* OTP code start */}
          <View style={styles.otpContainer}>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="decimal-pad"
                maxLength={1}
                ref={firstInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 1: text });
                  text && secondInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="decimal-pad"
                maxLength={1}
                ref={secondInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 2: text });
                  text
                    ? thirdInput.current.focus()
                    : firstInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="decimal-pad"
                maxLength={1}
                ref={thirdInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 3: text });
                  text
                    ? fourthInput.current.focus()
                    : secondInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="decimal-pad"
                maxLength={1}
                ref={fourthInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 4: text });
                  !text && thirdInput.current.focus();
                }}
              />
            </View>
          </View>
          {/* OTP code end */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonContainer}
            onPress={() => {
              console.log(otp);
              navigation.navigate("ResetPass");
            }}
          >
            <Text style={styles.textButton}>Verify</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: moderateScale(15),
              color: "black",
              alignSelf: "center",
              marginTop: verticalScale(30),
            }}
          >
            Send code again 00:55
          </Text>
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OtpPage;

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
  },
  otpContainer: {
    marginTop: verticalScale(80),
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
  otpBox: {
    borderWidth: moderateScale(2.5),
    borderColor: "#021726",
    width: horizontalScale(67),
    height: verticalScale(67),
    borderRadius: moderateScale(25),
    justifyContent: "center",
  },
  otpText: {
    fontFamily: "Poppins-Bold",
    fontSize: moderateScale(30),
    color: "black",
    textAlign: "center",
    justifyContent: "center",
    padding: 0,
    flex: 1,
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
    marginTop: verticalScale(280),
    alignSelf: "center",
    flexDirection: "row",
  },
});

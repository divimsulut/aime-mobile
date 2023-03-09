import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
} from "react-native";
import React, { useState, useRef } from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../constant";
import { ButtonFacebook, ButtonGoogle, Input } from "../../../components";
import ButtonRegister from "./components/ButtonRegister";

const SignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMess, setErrorMess] = useState("");
  const [errorColor, setErrorColor] = useState("transparent");
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  console.log(fullName, email, password, confirmPass);

  const handleErrorMessage = () => {
    if (password !== confirmPass) {
      setErrorColor("#8F1E2F");
      setErrorMess("Those passwords didn’t match, Try again");
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const animatedStyle = {
    transform: [{ translateX: shakeAnimation }],
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.textHeader}>Lets Get Started</Text>
          <Text style={styles.textWellcome}>
            Find thousand of tourist destination on North Minahasa
          </Text>
          <View style={styles.form}>
            <Text style={styles.textSignup}>Sign Up</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textAlready}>Already have an account?, </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate("SignIn");
                }}
              >
                <Text style={styles.textSign}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Form Start */}
          <View style={{ marginTop: verticalScale(31) }}>
            <Input
              placeholder="Full Name"
              onChangeText={(e) => setFullName(e)}
            />
            <Input placeholder="Email" onChangeText={(e) => setEmail(e)} />
            <Input
              placeholder="Password"
              password
              onChangeText={(e) => setPassword(e)}
              error={errorColor}
            />
            <Input
              placeholder="Re-enter Paswword"
              password
              onChangeText={(e) => setConfirmPass(e)}
              error={errorColor}
            />
          </View>
          {/* Form End */}

          {/* Wrong password */}
          {errorMess ? (
            <Animated.Text
              style={[
                {
                  fontFamily: "Poppins-Regular",
                  fontSize: moderateScale(10),
                  color: "#8F1E2F",
                },
                animatedStyle,
              ]}
            >
              {errorMess}
            </Animated.Text>
          ) : null}

          {/* Register button */}
          <View style={{ marginTop: verticalScale(17) }}>
            <ButtonRegister
              text={"Register"}
              navigation={navigation}
              email={email}
              password={password}
              fullName={fullName}
              confirmPass={confirmPass}
              onError={handleErrorMessage}
            />
          </View>

          <View style={{ alignItems: "center", marginTop: verticalScale(31) }}>
            <Text style={styles.textOr}>Or Log in using</Text>
          </View>
          {/* Button google and facebook */}
          <View style={styles.googleFacebookButtonContainer}>
            <ButtonGoogle text={"Google"} />
            <ButtonFacebook text={"Facebook"} />
          </View>

          {/* Terms and condition */}
          <View style={styles.textFooterContainer}>
            <Text style={styles.textFooter}>
              By clicking register, you agree to our
            </Text>
            <TouchableOpacity>
              <Text style={styles.textPolicy}>Terms, Data Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "rgba(192, 192, 192, 0.2)",
  },
  container: {
    marginHorizontal: horizontalScale(40),
    marginTop: verticalScale(55),
  },
  textHeader: {
    fontFamily: "Poppins-Medium",
    color: "black",
    fontSize: moderateScale(30),
    textAlign: "center",
  },
  textWellcome: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(15),
    color: "#817575",
    textAlign: "center",
    alignSelf: "center",
    width: horizontalScale(280),
  },
  form: {
    marginTop: verticalScale(31),
    marginLeft: horizontalScale(23),
  },
  textSignup: {
    fontFamily: "Poppins-Bold",
    fontSize: moderateScale(22),
    color: "black",
  },
  textAlready: {
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(15),
    color: "black",
  },
  textSign: {
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(15),
    color: "#00284D",
    textDecorationLine: "underline",
  },
  textOr: {
    fontFamily: "Poppins-Regular",
    fontSize: moderateScale(12),
  },
  googleFacebookButtonContainer: {
    alignSelf: "center",
    marginTop: verticalScale(34),
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  textFooterContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(22),
  },
  textFooter: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(16),
    color: "black",
  },
  textPolicy: {
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(16),
    color: "#00284D",
  },
});

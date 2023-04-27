import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  ScrollView,
  Modal,
  ActivityIndicator,
} from "react-native";
import React, { useState, useRef } from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../constant";
import {
  ButtonFacebook,
  ButtonGoogle,
  Input,
  LoadingModal,
} from "../../../components";
import ButtonRegister from "./components/ButtonRegister";

const SignUp = ({ navigation }) => {
  // State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMess, setErrorMess] = useState("");

  // Loading state
  const [isLoading, setIsLoading] = useState(false);
  const loadingState = (state) => {
    setIsLoading(state);
  };

  // Color Error
  const [nameErrorColor, setNameErrorColor] = useState("transparent");
  const [emailErrorColor, setEmailErrorColor] = useState("transparent");
  const [passErrorColor, setPassErrorColor] = useState("transparent");
  const [confirmPassErrorColor, setConfirmPassErrorColor] =
    useState("transparent");

  // Animation
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  console.log(fullName, email, password, confirmPass);

  // regex email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Function shake
  const shake = () => {
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
  };

  // Function handle error message and color
  const handleErrorMessage = () => {
    if (
      fullName === "" &&
      email === "" &&
      password === "" &&
      confirmPass === ""
    ) {
      setErrorMess("All fields must be filled");
      setNameErrorColor("#8F1E2F");
      setEmailErrorColor("#8F1E2F");
      setPassErrorColor("#8F1E2F");
      setConfirmPassErrorColor("#8F1E2F");
      shake();
      return;
    }
    if (fullName === "") {
      setErrorMess("Full name must be filled");
      setNameErrorColor("#8F1E2F");
      setConfirmPassErrorColor("transparent");
      setPassErrorColor("transparent");
      setEmailErrorColor("transparent");
      shake();
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorMess("Email is not valid");
      setEmailErrorColor("#8F1E2F");
      setConfirmPassErrorColor("transparent");
      setPassErrorColor("transparent");
      setNameErrorColor("transparent");
      shake();
      return;
    }
    if (password.length < 8) {
      setErrorMess("Password must be at least 8 characters");
      setPassErrorColor("#8F1E2F");
      setConfirmPassErrorColor("transparent");
      setNameErrorColor("transparent");
      setEmailErrorColor("transparent");
      shake();
      return;
    }
    if (password !== confirmPass) {
      setErrorMess("Those passwords didn’t match, Try again");
      setConfirmPassErrorColor("#8F1E2F");
      setPassErrorColor("transparent");
      setNameErrorColor("transparent");
      setEmailErrorColor("transparent");
      shake();
      return;
    } else {
      setErrorMess("");
      setNameErrorColor("transparent");
      setEmailErrorColor("transparent");
      setPassErrorColor("transparent");
      setConfirmPassErrorColor("transparent");
    }
  };

  const animatedStyle = {
    transform: [{ translateX: shakeAnimation }],
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.page}>
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
              error={nameErrorColor}
            />
            <Input
              placeholder="Email"
              onChangeText={(e) => setEmail(e)}
              error={emailErrorColor}
              keyboardType="email-address"
            />
            <Input
              placeholder="Password"
              password
              onChangeText={(e) => setPassword(e)}
              error={passErrorColor}
            />
            <Input
              placeholder="Re-enter Paswword"
              password
              onChangeText={(e) => setConfirmPass(e)}
              error={confirmPassErrorColor}
            />
          </View>
          {/* Form End */}

          {/* Error Message */}
          {errorMess ? (
            <Animated.Text style={[styles.animatedText, animatedStyle]}>
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
              onError={() => handleErrorMessage()}
              loadingState={loadingState}
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
        {isLoading && <LoadingModal />}
      </ScrollView>
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
  animatedText: {
    fontFamily: "Poppins-Regular",
    fontSize: moderateScale(10),
    color: "#8F1E2F",
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

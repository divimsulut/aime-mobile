import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Animated,
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
  ButtonLogin,
  Input,
  LoadingModal,
} from "../../../components";
import { IconBack } from "../../../assets";
import { signIn } from "../../../config";
import { CommonActions } from "@react-navigation/native";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMess, setErrorMess] = useState("");
  const [errorColor, setErrorColor] = useState("transparent");
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const [isLoading, setIsLoading] = useState(false);
  console.log(email, password);

  const handleSignIn = () => {
    setIsLoading(true);
    signIn({ email, password })
      .then((user) => {
        if (user === "email not verified") {
          alert(
            "Please verify your email. Verification link has sent to your email address. Check 'Spam' if the email is not in your inbox."
          );
          return;
        }
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Tabs" }],
          })
        );
      })
      .catch((error) => {
        // clear input when error
        console.log("error in sign in: ", error);
        setEmail("");
        setPassword("");
        setErrorColor("#AC253A");
        switch (error.code) {
          case "auth/network-request-failed":
            setErrorMess("Network error. Please check your connection!");
            break;

          case "auth/internal-error":
            setErrorMess("Network error. Please check your connection!");
            break;

          default:
            setErrorMess("Email or Password is incorrect");
            break;
        }
        // error.code === "auth/network-request-failed"
        //   ? setErrorMess("Network error. Check your connection!")
        //   : setErrorMess("Email or password is incorrect");
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
      })
      .finally(() => setIsLoading(false));
  };

  const animatedStyle = {
    transform: [{ translateX: shakeAnimation }],
  };

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
            navigation.navigate("SignUp");
          }}
        >
          <IconBack />
        </TouchableOpacity>

        {/* Page Start */}
        <View style={styles.container}>
          <Text style={styles.hello}>Hello Again!</Text>
          <Text style={styles.wellcome}>Wellcome Back You've been missed</Text>
          <View style={styles.form}>
            <Text style={styles.textLogin}>Sign In</Text>

            {/* Form start */}
            <View style={{ marginTop: verticalScale(10) }}>
              <Input
                value={email}
                placeholder="email"
                onChangeText={(e) => setEmail(e)}
                error={errorColor}
              />
              <Input
                placeholder="Password"
                password
                onChangeText={(e) => setPassword(e)}
                error={errorColor}
                value={password}
              />
            </View>
            {/* Form end */}
          </View>

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

          {/* Forget pass text */}
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignSelf: "flex-end",
            }}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("ForgetPass");
            }}
          >
            <Text style={styles.textForgot}>Forgot your password?</Text>
          </TouchableOpacity>

          {/* Button Login */}
          <View style={{ marginTop: verticalScale(30) }}>
            <ButtonLogin
              text={"Sign In"}
              email={email}
              password={password}
              navigation={navigation}
              signIn={handleSignIn}
            />
          </View>

          <Text style={styles.textOr}>Or Sign in using</Text>

          {/* Button google and facebook */}
          <View
            style={{
              alignSelf: "center",
              marginTop: verticalScale(35),
            }}
          >
            <ButtonGoogle text={"Google"} />
          </View>
          <View style={{ marginTop: verticalScale(20) }}>
            <ButtonFacebook text={"Facebook"} />
          </View>
          {/* Button google and facebook end*/}
        </View>
        {isLoading && <LoadingModal />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "rgba(192, 192, 192, 0.2)",
  },
  container: {
    marginHorizontal: horizontalScale(40),
    marginTop: verticalScale(103),
  },
  hello: {
    fontFamily: "Poppins-Regular",
    color: "black",
    fontSize: 30,
    textAlign: "center",
  },
  wellcome: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#817575",
    textAlign: "center",
    alignSelf: "center",
    width: horizontalScale(250),
  },
  form: {
    marginTop: verticalScale(32),
  },
  textLogin: {
    marginLeft: horizontalScale(23),
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "black",
  },
  textForgot: {
    marginTop: verticalScale(10),
    // alignSelf: "flex-end",
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(12),
    color: "#0571B9",
  },
  textOr: {
    marginTop: verticalScale(30),
    alignSelf: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
});

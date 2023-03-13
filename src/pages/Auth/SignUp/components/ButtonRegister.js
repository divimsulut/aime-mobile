import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, verticalScale } from "../../../../constant";
import { createUser } from "../../../../config";

const ButtonRegister = ({
  text,
  navigation,
  email,
  password,
  confirmPass,
  fullName,
  onError,
  loadingState,
}) => {
  // regex email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={async () => {
        if (
          (fullName === "" &&
            email === "" &&
            password === "" &&
            confirmPass === "") ||
          fullName === "" ||
          !emailRegex.test(email) ||
          password.length < 8 ||
          password !== confirmPass
        ) {
          onError(); // show error message
          return;
        }

        loadingState(true); // show loading
        onError(); // reset error message
        await createUser(fullName, email, password, navigation)
          .then(() => {
            loadingState(false); // hide loading
          })
          .catch((error) => {
            onError(error.message); // show error message
            loadingState(false); // hide loading
          });
      }}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonRegister;

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

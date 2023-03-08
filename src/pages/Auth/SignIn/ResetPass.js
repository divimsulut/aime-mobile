import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../../constant";
import { IconBack } from "../../../assets";
import { Input } from "../../../components";

const ResetPass = ({ navigation }) => {
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  console.log(newPass, confirmNewPass);

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
          <Text style={styles.textHeader}>Reset password</Text>
          <Text style={styles.textDetail}>
            Please type something you'll remember
          </Text>
          <View style={styles.form}>
            <Text style={styles.textLabel}>New password</Text>

            {/* Form start */}
            <View style={{ marginTop: verticalScale(10) }}>
              <Input
                placeholder="must be 8 characters"
                password
                onChangeText={(e) => setNewPass(e)}
              />
            </View>
            <Text style={styles.textLabel}>Confirm new password</Text>
            <View style={{ marginTop: verticalScale(10) }}>
              <Input
                placeholder="Re-enter Password"
                password
                onChangeText={(e) => setConfirmNewPass(e)}
              />
            </View>
          </View>
          {/* Form end */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate("PassChanged");
            }}
          >
            <Text style={styles.textButton}>Reset password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResetPass;

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
});

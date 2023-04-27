import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { verticalScale, horizontalScale, moderateScale } from "../constant";
import { IconEye, IconEyeClose } from "../assets";

const Input = ({
  onSubmitPressed = () => {},
  keyboardType = "default",
  error = "transparent",
  password,
  onChange = () => {},
  onFocus = () => {},
  value,
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const IconChose = () => (hidePassword ? <IconEyeClose /> : <IconEye />);
  const { onChangeText, ...rest } = props;

  return (
    <View
      style={{
        marginBottom: verticalScale(20),
        // backgroundColor: "green",
      }}
    >
      <View
        style={[styles.inputContainer, { borderColor: error, borderWidth: 2 }]}
      >
        <TextInput
          {...props}
          onSubmitEditing={onSubmitPressed}
          keyboardType={keyboardType}
          value={value}
          secureTextEntry={hidePassword}
          style={styles.textInput}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
          }}
          onChangeText={onChangeText}
        />
        <View style={styles.iconContainer}>
          {password && (
            <TouchableOpacity
              onPress={() => setHidePassword(!hidePassword)}
              activeOpacity={0.8}
            >
              <IconChose />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    height: verticalScale(50),
    backgroundColor: "white",
    borderRadius: 30,
    // marginVertical: 5,
    // justifyContent: 'space-between',

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,

    elevation: 4,
  },
  textInput: {
    paddingLeft: horizontalScale(44),
    paddingRight: horizontalScale(60),
    fontSize: moderateScale(12),
    fontFamily: "Poppins-Medium",
    color: "rgba(0, 0, 0, 0.5)",
    // backgroundColor: 'green',
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    right: verticalScale(20),
    alignSelf: "center",
    // backgroundColor: 'red',
  },
});

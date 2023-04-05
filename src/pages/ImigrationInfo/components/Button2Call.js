import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Svg } from "react-native-svg";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../constant";
import { IconCar, IconMore2, IconPhone, IconWeb } from "../../../assets";

const Button2Call = () => {
  return (
    <View
      style={{
        borderRadius: moderateScale(10),
        width: horizontalScale(120),
        height: verticalScale(60),
        backgroundColor: "#213545",
        justifyContent: "center",
        alignItems: "center",
      }}
      activeOpacity={0.8}
    >
      <Svg height={26} width={26} viewBox="0 0 26 26">
        <IconPhone />
      </Svg>
      <Text
        style={{
          fontFamily: "Poppins-Medium",
          fontSize: moderateScale(10),
          color: "white",
        }}
      >
        Call Center
      </Text>
    </View>
  );
};

export default Button2Call;

const styles = StyleSheet.create({});

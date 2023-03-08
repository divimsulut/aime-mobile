import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Svg } from "react-native-svg";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../constant";
import { IconCar, IconMore2, IconPhone, IconWeb } from "../../../assets";

const Button4More = () => {
  return (
    <View>
      <View
        style={{
          borderRadius: moderateScale(10),
          width: horizontalScale(86),
          height: verticalScale(50),
          backgroundColor: "#213545",
          justifyContent: "center",
          alignItems: "center",
        }}
        activeOpacity={0.8}
      >
        <Svg height={26} width={26} viewBox="0 0 26 26">
          <IconMore2 />
        </Svg>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: moderateScale(10),
            color: "white",
          }}
        >
          More
        </Text>
      </View>
    </View>
  );
};

export default Button4More;

const styles = StyleSheet.create({});

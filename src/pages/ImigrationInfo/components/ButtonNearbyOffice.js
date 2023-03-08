import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Svg } from "react-native-svg";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../constant";
import { IconCar, IconMore2, IconPhone, IconWeb } from "../../../assets";

const ButtonNearbyOffice = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TouchableOpacity
        style={{
          borderRadius: moderateScale(10),
          width: horizontalScale(86),
          height: verticalScale(50),
          backgroundColor: "#E5CF00",
          justifyContent: "center",
          alignItems: "center",
        }}
        activeOpacity={0.8}
      >
        <Svg height={26} width={26} viewBox="0 0 26 26">
          <IconCar />
        </Svg>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: moderateScale(10),
            color: "black",
          }}
        >
          45 min
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
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
          <IconPhone />
        </Svg>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: moderateScale(10),
            color: "white",
          }}
        >
          Call
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
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
          <IconWeb />
        </Svg>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: moderateScale(10),
            color: "white",
          }}
        >
          Website
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
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
      </TouchableOpacity>
    </View>
  );
};

export default ButtonNearbyOffice;

const styles = StyleSheet.create({});

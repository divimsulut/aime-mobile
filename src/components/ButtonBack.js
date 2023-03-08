import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { horizontalScale, verticalScale } from "../constant";
import { Svg, Path, G, Mask, Defs, ClipPath } from "react-native-svg";

const ButtonBack = ({ navigation, color = "white" }) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        left: horizontalScale(21),
        top: verticalScale(27),
        zIndex: 1,
      }}
      onPress={() => navigation.goBack()}
      activeOpacity={0.7}
    >
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G clipPath="url(#clip0_196_234)">
          <Mask
            id="a"
            style={{
              maskType: "luminance",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={24}
            height={24}
          >
            <Path d="M24 0H0v24h24V0z" fill="#fff" />
          </Mask>
          <G mask="url(#a)">
            <Path
              d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
              fill={color}
            />
          </G>
        </G>
        <Defs>
          <ClipPath id="clip0_196_234">
            <Path fill="#fff" d="M0 0H24V24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </TouchableOpacity>
  );
};

export default ButtonBack;

const styles = StyleSheet.create({});

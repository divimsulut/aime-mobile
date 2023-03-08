import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { verticalScale, horizontalScale, moderateScale } from "../constant";
import { Svg, Path, G, Mask, Defs, ClipPath } from "react-native-svg";

const Header = ({
  intensity = 30,
  label,
  navigation,
  color = "white",
  backgroundColor = "rgba(16, 50, 84, 0.6)",
  backBtn: backBtn = true,
}) => {
  const BackBtn = () => {
    if (backBtn)
      return (
        <TouchableOpacity
          style={styles.backBtnStyle}
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

    return null;
  };

  return (
    <BlurView style={styles.blurContainer} intensity={intensity}>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: backgroundColor,
          paddingTop: verticalScale(10),
        }}
      >
        <BackBtn />
        <Text
          style={{
            fontFamily: "Poppins-ExtraBold",
            fontSize: moderateScale(21),
            color: color,
          }}
        >
          {label}
        </Text>
      </View>
    </BlurView>
  );
};

export default Header;

const styles = StyleSheet.create({
  blurContainer: {
    position: "absolute",
    height: verticalScale(103),
    width: "100%",
    zIndex: 1,
  },
  backBtnStyle: {
    position: "absolute",
    left: horizontalScale(21),
    top: verticalScale(40),
  },
});

import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageBackgroundImage } from "../../assets";
import { verticalScale, horizontalScale, moderateScale } from "../../constant";
import ButtonNext from "./ButtonNext";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground source={ImageBackgroundImage} style={styles.background}>
      <View style={styles.text}>
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins-Bold",
            fontSize: moderateScale(24),
          }}
        >
          AIME
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins-Bold",
            fontSize: moderateScale(46),
            lineHeight: verticalScale(70),
          }}
        >
          Lets explore the wonderful Indonesia.
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins-Regular",
            fontSize: 15,
            marginTop: verticalScale(69),
            width: horizontalScale(300),
          }}
        >
          Find thousand of tourist destination ready for you visit
        </Text>
      </View>
      <View style={styles.button}>
        <ButtonNext text={"Next"} navigation={navigation} />
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: horizontalScale(25),
  },
  // text: {
  //   marginTop: verticalScale(348),
  //   marginLeft: horizontalScale(55),
  // },
  button: {
    marginTop: verticalScale(75),
    // marginHorizontal: horizontalScale(65),
  },
});

import { StyleSheet, Text, View, Image } from "react-native";
import React, { version } from "react";
import { horizontalScale, moderateScale, verticalScale } from "../../constant";
import { ImageLandscape3 } from "../../assets/images";

const FlatImage = ({ item }) => {
  return (
    <View
      style={{
        marginHorizontal: horizontalScale(12),
      }}
    >
      <Image
        source={{ uri: item }}
        style={{
          width: horizontalScale(90),
          height: verticalScale(90),
          borderRadius: moderateScale(10),
        }}
      />
    </View>
  );
};

export default FlatImage;

const styles = StyleSheet.create({});

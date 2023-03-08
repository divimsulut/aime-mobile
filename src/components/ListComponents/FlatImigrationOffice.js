import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { horizontalScale, moderateScale, verticalScale } from "../../constant";
import { Svg } from "react-native-svg";
import { IconPin, IconArrowRight } from "../../assets";

const FlatImigrationOffice = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("OfficeDetail")}
    >
      <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View
          style={{
            width: horizontalScale(216),
            marginLeft: horizontalScale(10),
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: moderateScale(18),
              color: "black",
            }}
          >
            {item.name}
          </Text>
          <View style={{ flexDirection: "row", marginTop: verticalScale(15) }}>
            <Svg width={12} height={12} viewBox="0 0 12 12">
              <IconPin />
            </Svg>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: moderateScale(10),
                color: "black",
              }}
            >
              {item.address}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            right: moderateScale(10),
            bottom: moderateScale(5),
            //   backgroundColor: 'green',
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: moderateScale(10),
              color: "black",
              marginRight: horizontalScale(3),
            }}
          >
            View Detail
          </Text>
          <IconArrowRight />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FlatImigrationOffice;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: verticalScale(134),
    backgroundColor: "white",
    borderRadius: moderateScale(20),
    flexDirection: "row",
    marginVertical: verticalScale(16),
  },
  image: {
    width: horizontalScale(143),
    height: verticalScale(134),
    borderTopLeftRadius: moderateScale(20),
    borderBottomLeftRadius: moderateScale(20),
  },
});

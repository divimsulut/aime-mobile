import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { horizontalScale, moderateScale, verticalScale } from "../../constant";
import { IconArrowRight, IconPin, IconYellowArrow } from "../../assets/icons";
import { Svg } from "react-native-svg";

const FlatCard = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.flatCardContainer}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DestionationDetail")}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailContainer}>
        <View style={{ marginTop: verticalScale(5) }}>
          <Text style={styles.textDestination}>{item.destination}</Text>
          <Text style={styles.textAddress}>{item.location}</Text>
        </View>
        <View style={styles.distanceContainer}>
          <IconPin />
          <Text style={styles.textDistance}>(25.3 km)</Text>
        </View>
      </View>
      <View style={styles.viewAllContainer}>
        <Text style={styles.textViewAll}>View All</Text>
        <IconArrowRight />
      </View>
    </TouchableOpacity>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  flatCardContainer: {
    height: verticalScale(134),
    width: "100%",
    backgroundColor: "white",
    borderRadius: moderateScale(20),
    flexDirection: "row",
    marginBottom: verticalScale(25),

    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  image: {
    width: horizontalScale(143),
    height: verticalScale(134),
    borderTopLeftRadius: moderateScale(20),
    borderBottomLeftRadius: moderateScale(20),
  },
  detailContainer: {
    marginLeft: horizontalScale(10),
    marginRight: horizontalScale(20),
    flex: 1,
  },
  textDestination: {
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(18),
    color: "black",
  },
  textAddress: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(12),
    color: "black",
  },
  distanceContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: verticalScale(15),
    alignItems: "center",
  },
  textDistance: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(10),
    color: "black",
    marginLeft: horizontalScale(2),
  },
  viewAllContainer: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    bottom: verticalScale(16),
    right: horizontalScale(11),
  },
  textViewAll: {
    marginRight: horizontalScale(5),
    fontFamily: "Poppins-Light",
    fontSize: moderateScale(12),
  },
});

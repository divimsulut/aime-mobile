import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageLandScape } from "../../assets";
import { horizontalScale, moderateScale, verticalScale } from "../../constant";

const seperator = 2;
const seperator_color = "rgba(161, 161, 161, 0.1)";

const ItemFavoriteList = ({ item }) => {
  return (
    <View>
      <View style={{ padding: moderateScale(20) }}>
        <View style={styles.item_row}>
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                height: verticalScale(56),
                width: horizontalScale(84),
                borderRadius: 8,
              }}
            />
          </View>

          <View style={{ marginLeft: 15 }}>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: moderateScale(18),
                color: "#E5E7E5",
              }}
            >
              {item.destination}
              {/* {Destination} */}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: moderateScale(12),
                color: "#3B3D3B",
                marginTop: -5,
              }}
            >
              {item.location}
              {/* {Location} */}
            </Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: seperator_color,
            borderBottomWidth: seperator,
            marginTop: 25,
            marginBottom: -5,
          }}
        />
      </View>
    </View>
  );
};

export default ItemFavoriteList;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  item_row: {
    flexDirection: "row",
    alignItems: "center",

    spacebetween: {
      justifyContent: "space-between",
    },
  },
});

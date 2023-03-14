import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconDelete, ImageLandScape } from "../../assets";
import { horizontalScale, moderateScale, verticalScale } from "../../constant";
import { TouchableOpacity } from "react-native-gesture-handler";

const seperator = 2;
const seperator_color = "rgba(161, 161, 161, 0.1)";

const ItemFavoriteList = ({ item }) => {
  return (
    <View>
      <View style={{ padding: moderateScale(20) }}>
        <View style={styles.item_row}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {/* Image Section */}
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

            {/* Text Section */}
            <View
              style={{
                marginLeft: 15,

                width: horizontalScale(220),
              }}
            >
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
                numberOfLines={2}
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: moderateScale(12),
                  color: "#BDBDBD",
                }}
              >
                {item.location}
                {/* {Location} */}
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: moderateScale(10),
                  color: "#525252",
                }}
              >
                Jan 22, 2023 at 10: 15am
              </Text>
            </View>
          </View>

          {/* Delete Section */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#8F1E2F",
              paddingVertical: 5,
              paddingHorizontal: 8,
              borderRadius: 8,
            }}
          >
            <IconDelete />
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: moderateScale(8),
                color: "white",
                marginLeft: 5,
              }}
            >
              Delete
            </Text>
          </TouchableOpacity>
        </View>
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

    borderBottomColor: seperator_color,
    borderBottomWidth: seperator,
    paddingBottom: verticalScale(30),
    justifyContent: "space-between",
  },
});

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { horizontalScale, moderateScale, verticalScale } from "../../constant";
import { DataDestination } from "../../data";
import { Shadow } from "react-native-shadow-2";

const FlatPopularDestination = ({ navigation, data }) => {
  const Component = ({ item }) => {
    return (
      <Shadow offset={[2, 2]} distance={8} startColor="#00000010">
        <View style={styles.container}>
          <Image
            source={{ uri: item.imageURL }}
            style={{ width: "100%", flex: 1 }}
          />
          <View style={styles.bottomContainer}>
            <View style={styles.textContainer}>
              <Text numberOfLines={1} style={styles.textDestination}>
                {item.destinationName}
              </Text>
              <Text numberOfLines={1} style={styles.textLocation}>
                {item.address}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("DestionationDetail", { item: item })
                }
                style={styles.buttonStyle}
                activeOpacity={0.8}
              >
                <Text style={styles.textButton}>View Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Shadow>
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      contentContainerStyle={{
        paddingLeft: horizontalScale(10),
        height: verticalScale(210),
        alignItems: "center",
      }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return <Component item={item} />;
      }}
    />
  );
};

export default FlatPopularDestination;

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(274),
    height: verticalScale(188),
    borderRadius: moderateScale(20),
    overflow: "hidden",
    marginRight: horizontalScale(10),
    backgroundColor: "white",
  },
  bottomContainer: {
    backgroundColor: "#00284D",
    height: verticalScale(59),
    flexDirection: "row",
  },
  textContainer: {
    width: horizontalScale(175),
    paddingVertical: verticalScale(5),
    paddingLeft: horizontalScale(13),
  },
  textDestination: {
    fontFamily: "Poppins-SemiBold",
    // fontSize: moderateScale(18),
    fontSize: 14,
    color: "white",
  },
  textLocation: {
    fontFamily: "Poppins-Regular",
    fontSize: moderateScale(9),
    color: "white",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "#E5CF00",
    width: horizontalScale(85),
    borderRadius: moderateScale(30),
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(10),
    color: "#1E1E1E",
  },
});

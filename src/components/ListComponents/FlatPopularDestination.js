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

const FlatPopularDestination = ({ navigation }) => {
  const Component = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: item.image }}
          style={{ width: "100%", flex: 1 }}
        />
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textDestination}>{item.destination}</Text>
            <Text style={styles.textLocation}>{item.location}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("DestionationDetail")}
              style={styles.buttonStyle}
              activeOpacity={0.8}
            >
              <Text style={styles.textButton}>View Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={DataDestination}
      keyExtractor={(item) => item.key}
      horizontal
      contentContainerStyle={{ paddingLeft: horizontalScale(10) }}
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

    //Shadow
    shadowColor: "#00284D",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  bottomContainer: {
    backgroundColor: "#00284D",
    height: verticalScale(59),
    flexDirection: "row",
  },
  textContainer: {
    width: horizontalScale(175),
    paddingTop: verticalScale(5),
    paddingLeft: horizontalScale(13),
  },
  textDestination: {
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(18),
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
    height: verticalScale(18),
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

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { version } from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../constant";
import { ImageLandScape } from "../../../assets/images";
import { DataNews } from "../../../data";

const FlatNews = () => {
  const Component = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.bottomContainer}>
          <Text style={styles.textTitle}>{item.title}</Text>
          <Text style={styles.textHighlight}>{item.highlight}</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.textButton}>Click here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={DataNews}
      keyExtractor={(item) => item.key}
      numColumns={2}
      renderItem={({ item }) => {
        return <Component item={item} />;
      }}
    />
  );
};

export default FlatNews;

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(190),
    height: verticalScale(218),
    backgroundColor: "#00284D",
    borderRadius: moderateScale(10),
    overflow: "hidden",
    marginHorizontal: horizontalScale(7),
    marginBottom: verticalScale(16),
  },
  image: { width: "100%", flex: 1 },
  bottomContainer: {
    height: verticalScale(132),
    width: "100%",
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(9),
  },
  textTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(12),
    color: "white",
  },
  textHighlight: {
    fontFamily: "Roboto-Regular",
    fontSize: moderateScale(9),
    color: "#B9B7B7",
  },
  buttonContainer: {
    backgroundColor: "#E5CF00",
    width: horizontalScale(58),
    height: verticalScale(16),
    position: "absolute",
    alignSelf: "center",
    bottom: verticalScale(18),
    borderRadius: moderateScale(20),
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontFamily: "Popppins-Medium",
    fontSize: moderateScale(9),
    color: "#1E1E1E",
  },
});

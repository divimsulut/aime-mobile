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

const FlatNewsNew = ({ navigation, newsData }) => {
  const Components = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.bottomContainer}>
          <Text numberOfLines={3} style={styles.textTitle}>
            {item.title}
          </Text>
          {/* <Text style={styles.textHighlight} numberOfLines={1}>
            {item.content}
          </Text> */}
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("News", { item: item })}
        >
          <Text style={styles.textButton}>Read</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      estimatedItemSize={10}
      data={newsData}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Components item={item} />}
    />
  );
};

export default FlatNewsNew;

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(190),
    height: verticalScale(218),
    backgroundColor: "#00284D",
    borderRadius: moderateScale(10),
    overflow: "hidden",
    marginHorizontal: horizontalScale(7),
    marginVertical: verticalScale(8),
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  bottomContainer: {
    height: verticalScale(110),
    paddingBottom: "15%",
    width: "100%",
    // backgroundColor: 'green',
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(9),
  },
  textTitle: {
    color: "white",
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(12),
  },
  textHighlight: {
    color: "#B9B7B7",
    fontFamily: "Poppins-Regular",
    fontSize: moderateScale(9),
  },
  buttonContainer: {
    width: horizontalScale(58),
    // height: verticalScale(16),
    backgroundColor: "#E5CF00",
    position: "absolute",
    bottom: verticalScale(14),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(20),
  },
  textButton: {
    color: "#1E1E1E",
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(9),
  },
});

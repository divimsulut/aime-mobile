import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import { ButtonBack, Header } from "../../components";
import { horizontalScale, moderateScale, verticalScale } from "../../constant";
import { Shadow } from "react-native-shadow-2";
import { BlurView } from "expo-blur";

const News = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        navigation={navigation}
        color={"black"}
        intensity={Platform.OS === "ios" ? 30 : 1}
        backgroundColor={
          Platform.OS === "ios" ? "rgba(255,255,255, 0.2)" : "transparent"
        }
      />
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={{ flex: 1, zIndex: 0 }} />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.headlineshapeContainer}>
            <Shadow distance={moderateScale(50)}>
              <View style={styles.radius}>
                <BlurView intensity={70}>
                  <View style={styles.headlineMainContainer}>
                    <Text style={styles.textDate}>{item.date}</Text>
                    <Text numberOfLines={3} style={styles.textTitle}>
                      {item.title}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <View style={styles.genreContainer}>
                        <Text style={styles.textGenre}>News</Text>
                      </View>
                      <Text style={styles.textAuthor}>
                        Published by {item.author}
                      </Text>
                    </View>
                  </View>
                </BlurView>
              </View>
            </Shadow>
          </View>

          <View style={styles.articleContainer}>
            <Text style={styles.textArticle}>
              {item.content.split(". ").map((item, index) => {
                return (
                  <Text key={index}>
                    {item}
                    {". \n\n"}
                  </Text>
                );
              })}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: verticalScale(378),
    overflow: "hidden",
  },
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    marginTop: verticalScale(-20),
  },
  headlineshapeContainer: {
    position: "absolute",
    top: verticalScale(-78),
    alignSelf: "center",
  },
  radius: { borderRadius: moderateScale(20), overflow: "hidden" },
  headlineMainContainer: {
    width: horizontalScale(330),
    overflow: "hidden",
    paddingHorizontal: horizontalScale(17),
    paddingVertical: verticalScale(10),
  },
  textDate: {
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(12),
    color: "#1E1E1E",
  },
  textTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: moderateScale(18),
    color: "#1E1E1E",
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: moderateScale(20),
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(2),
    borderColor: "#00284D",
  },
  textGenre: {
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(10),
    color: "#00284D",
  },
  textAuthor: {
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(10),
    color: "#00284D",
    marginLeft: horizontalScale(11),
  },
  articleContainer: {
    marginTop: verticalScale(119),
    marginBottom: verticalScale(50),
    marginHorizontal: horizontalScale(20),
  },
  textArticle: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(14),
    color: "black",
    marginLeft: horizontalScale(11),
  },
});

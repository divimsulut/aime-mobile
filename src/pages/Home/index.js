import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  HomeHeader,
  FlatBanner,
  FlatPopularDestination,
  FlatNewsNew,
} from "../../components";
import { horizontalScale, moderateScale, verticalScale } from "../../constant";
import { Svg, Defs, Mask, G, Path, ClipPath } from "react-native-svg";
import axios from "axios";

const HomeNextGen = ({ navigation }) => {
  const [newsData, setNewsData] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://lydian-misty-grass.glitch.me/news")
      // .get("https://alphacast.id/x/ptktp/aime/newsapi.js")
      .then((res) => {
        console.log(res.data);
        const newData = res.data.map((item) => ({
          title: item.title,
          link: item.link,
          author: item.author,
          image: item.image,
          date: item.date,
          content: item.excerpt,
        }));

        setNewsData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <LinearGradient colors={["#12365D", "#021726"]} style={{ flex: 1 }}>
      <View style={{ zIndex: 1 }}>
        <HomeHeader navigation={navigation} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <FlatBanner />
        </View>

        {/* Popular Destination Section */}
        <View style={styles.popularDestinationContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.label}>Popular Destination</Text>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("ExploreDestination")}
                activeOpacity={0.8}
                style={{
                  flexDirection: "row",
                  // backgroundColor: 'green',
                  marginRight: horizontalScale(11),
                  alignItems: "center",
                }}
              >
                <Text style={{ marginRight: horizontalScale(5) }}>
                  View All
                </Text>
                <Svg
                  width={13}
                  height={13}
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <G clipPath="url(#clip0_384_1603)">
                    <Mask
                      id="a"
                      style={{
                        maskType: "luminance",
                      }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={13}
                      height={13}
                    >
                      <Path d="M13 0H0v13h13V0z" fill="#fff" />
                    </Mask>
                    <G mask="url(#a)">
                      <Path
                        d="M3.997 11.38a.677.677 0 00.96 0l4.5-4.5a.54.54 0 000-.765l-4.5-4.5a.677.677 0 10-.96.958L7.92 6.5l-3.927 3.927c-.26.26-.26.693.005.953z"
                        fill="#021726"
                      />
                    </G>
                  </G>
                  <Defs>
                    <ClipPath id="clip0_384_1603">
                      <Path fill="#fff" d="M0 0H13V13H0z" />
                    </ClipPath>
                  </Defs>
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
          <FlatPopularDestination navigation={navigation} />
        </View>

        {/* News Section */}
        <View style={styles.newsContainer}>
          <Text style={styles.label}>Imigration News</Text>
          <View style={{ alignItems: "center" }}>
            <FlatNewsNew navigation={navigation} newsData={newsData} />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeNextGen;

const styles = StyleSheet.create({
  bannerContainer: {
    height: verticalScale(181),
    width: "100%",
    backgroundColor: "#E6E6E6",
    marginTop: verticalScale(260),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
    paddingVertical: verticalScale(20),
  },
  popularDestinationContainer: {
    backgroundColor: "#E6E6E6",
    width: "100%",
    height: verticalScale(298),
    marginVertical: moderateScale(6),
    paddingTop: verticalScale(31),
  },
  newsContainer: {
    backgroundColor: "#E6E6E6",
    paddingTop: verticalScale(15),
    paddingBottom: verticalScale(90),
  },
  label: {
    fontFamily: "Poppins-Bold",
    fontSize: moderateScale(20),
    color: "#1E1E1E",
    marginLeft: horizontalScale(15),
    marginBottom: verticalScale(24),
  },
});

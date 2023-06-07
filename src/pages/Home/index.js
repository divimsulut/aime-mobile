import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  Modal,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  HomeHeader,
  FlatBanner,
  FlatPopularDestination,
  FlatNewsNew,
  LoadingModal,
} from "../../components";
import { horizontalScale, moderateScale, verticalScale } from "../../constant";
import { Svg, Defs, Mask, G, Path, ClipPath } from "react-native-svg";
import axios from "axios";
import { IconRedWarning } from "../../assets";
import { getCurrentUser } from "../../config";
import { bannerGetAPI, newsGetAPI, popularGetAPI, userGetAPI } from "../../api";
import * as SecureStore from "expo-secure-store";

const HomeNextGen = ({ navigation }) => {
  const [newsData, setNewsData] = React.useState([]);
  const [bannerData, setBannerData] = React.useState(null);
  const [popularDestination, setPopularDestination] = React.useState([]);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [initLoading, setInitLoading] = React.useState(false);
  // const [token, setToken] = React.useState("");

  // useEffect(() => {
  //   SecureStore.getItemAsync("token").then((res) => {
  //     setToken(res);
  //   });
  // }, []);

  // check if the user already provide passport data
  useEffect(() => {
    getCurrentUser().then(async (user) => {
      const token = await SecureStore.getItemAsync("token");
      axios
        .get(userGetAPI(user.uid), {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data === "User does not exist") {
            setModal(true);
          } else {
            setModal(false);
          }
        })
        .catch((err) => {
          if (err.response?.data.message === "Unauthorized") {
            setModal(true);
          } else {
            console.log("Error occurred: ", err.message);
          }
        });
    });
  }, []);

  const fetchData = async () => {
    try {
      const responseNewsPromise = axios.get(newsGetAPI);
      const responseBannerPromise = axios.get(bannerGetAPI);
      const responsePopularPromise = axios.get(popularGetAPI);

      const responsePopular = await responsePopularPromise;
      setPopularDestination(responsePopular.data);

      const responseBanner = await responseBannerPromise;
      setBannerData(responseBanner.data.banner);

      const responseNews = await responseNewsPromise;
      setNewsData(responseNews.data);
    } catch (err) {
      console.log(err);
    } finally {
      setInitLoading(false);
    }
  };

  // get the  data
  useEffect(() => {
    setInitLoading(true);
    fetchData();
  }, []);

  return (
    <LinearGradient colors={["#12365D", "#021726"]} style={{ flex: 1 }}>
      <View style={{ zIndex: 1 }}>
        <HomeHeader
          navigation={navigation}
          isRefreshing={isRefreshing}
          onRefreshEnd={() => setIsRefreshing(false)}
        />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={["#12365D", "#021726"]}
            progressViewOffset={verticalScale(10)}
            refreshing={isRefreshing}
            onRefresh={() => {
              setIsRefreshing(true);
              fetchData();
            }}
          />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          {bannerData && <FlatBanner data={bannerData} />}
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
          <FlatPopularDestination
            navigation={navigation}
            data={popularDestination}
          />
        </View>

        {/* News Section */}
        <View style={styles.newsContainer}>
          <Text style={styles.label}>Imigration News</Text>
          <View style={{ alignItems: "center" }}>
            <FlatNewsNew navigation={navigation} newsData={newsData} />
          </View>
        </View>
      </ScrollView>

      <Modal visible={modal} transparent={true}>
        <View style={styles.pageModal}>
          <View style={styles.container}>
            <IconRedWarning />
            <Text style={styles.textMain}>complete your personal data!</Text>
            <Text style={styles.textDescription}>
              To make it easier for us to recognize you, please do data
              equipment before using this application.
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.replace("EditPassport");
                setModal(false);
              }}
              style={styles.bottonContainer}
            >
              <Text style={styles.textButton}>Add Passport Information</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {initLoading && <LoadingModal />}
    </LinearGradient>
  );
};

export default HomeNextGen;

const styles = StyleSheet.create({
  bannerContainer: {
    height: verticalScale(181),
    width: "100%",
    backgroundColor: "#E6E6E6",
    marginTop: "5%",
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
    paddingVertical: verticalScale(20),
  },
  popularDestinationContainer: {
    backgroundColor: "#E6E6E6",
    width: "100%",
    marginVertical: moderateScale(6),
    paddingTop: verticalScale(31),
    paddingBottom: verticalScale(20),
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
  pageModal: {
    backgroundColor: "rgba(30,30,30,0.62)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    borderRadius: 20,
  },
  textMain: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "rgba(143, 30, 47, 1)",
    textAlign: "center",
    marginTop: 18,
  },
  textDescription: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: "rgba(59, 61, 59, 1)",
    textAlign: "center",
  },
  bottonContainer: {
    backgroundColor: "rgba(143, 30, 47, 1)",
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: "100%",
    borderRadius: 10,
    marginTop: 25,
  },
  textButton: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 13,
    color: "white",
  },
});

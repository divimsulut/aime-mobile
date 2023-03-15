import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../constant";
import {
  IconAime,
  IconHistory,
  IconNotification,
  IconWhiteChecklist2,
} from "../../../assets/icons";
import Svg, { Path } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { ImagePeople } from "../../../assets/images";
import { BlurView } from "expo-blur";
import { getCurrentUser } from "../../../config";

const HomeHeader = ({ navigation }) => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.itemContainer}>
      <BlurView intensity={30} tint="default">
        <View style={styles.mainContainer}>
          {/* -------------------------------------------------------- */}

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.aimeLogoContainer}>
              <Svg height={30} width={30} viewBox="0 0 100 100">
                <IconAime />
              </Svg>
              <Text style={styles.textAime}>AIME</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notification")}
              >
                <Svg height={30} width={30} viewBox="4 0 30 30">
                  <IconNotification />
                </Svg>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("ActivityLog")}
              >
                <Svg
                  height={30}
                  width={30}
                  viewBox="4 0 30 30"
                  style={{
                    marginLeft: horizontalScale(10),
                  }}
                >
                  <IconHistory />
                </Svg>
              </TouchableOpacity>
            </View>
          </View>

          {/* -----------------------MAIN SHAPE-----------------------*/}
          <LinearGradient
            colors={["#021726", "rgba(2, 23, 38, 0.89)"]}
            style={styles.headerContainer}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 2 }}
          >
            {/* ---------------------------ICONS----------------------------- */}
            <Svg
              style={{ position: "absolute", left: 0, top: 0 }}
              xmlns="http://www.w3.org/2000/svg"
              width={55}
              height={55}
              fill="none"
              viewBox="52 50 62 62"
            >
              <Path
                fill="#E6E6E6"
                d="M56.111 0C45.013 0 34.165 3.226 24.938 9.27 15.71 15.312 8.517 23.902 4.27 33.951A53.99 53.99 0 0 0 1.078 65.73c2.165 10.669 7.51 20.469 15.357 28.16 7.847 7.693 17.845 12.931 28.73 15.053a57.165 57.165 0 0 0 32.419-3.13c10.253-4.162 19.016-11.212 25.182-20.257 6.165-9.044 9.456-19.678 9.456-30.556a54.056 54.056 0 0 0-4.269-21.048 54.941 54.941 0 0 0-12.164-17.844A56.193 56.193 0 0 0 77.585 4.185 57.09 57.09 0 0 0 56.11 0zm0 87.048a33.168 33.168 0 0 1-18.165-5.4c-5.376-3.522-9.567-8.528-12.042-14.384a31.46 31.46 0 0 1-1.86-18.516c1.261-6.217 4.375-11.927 8.948-16.41 4.572-4.482 10.398-7.534 16.74-8.77a33.31 33.31 0 0 1 18.891 1.823c5.975 2.426 11.08 6.534 14.674 11.804A31.599 31.599 0 0 1 88.807 55c0 4.209-.845 8.377-2.487 12.265a32.007 32.007 0 0 1-7.088 10.398 32.742 32.742 0 0 1-10.608 6.947 33.263 33.263 0 0 1-12.513 2.438z"
              />
            </Svg>
            <Svg
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                borderBottomRightRadius: moderateScale(15),
                // backgroundColor: 'green',
              }}
              xmlns="http://www.w3.org/2000/svg"
              width={87}
              height={49}
              fill="none"
              viewBox="15 0 50 50"
            >
              <Path
                fill="#E5CF00"
                d="M8.985 125.174a87.144 87.144 0 0 0 5.697 9.765h148.153a87.162 87.162 0 0 0 5.696-9.765H8.985zm122.341 38.173a89.32 89.32 0 0 0 14.491-9.765H31.637a89.256 89.256 0 0 0 14.49 9.765h85.199zM3.415 110.969a84.224 84.224 0 0 0 3.505 9.766h163.676a84.268 84.268 0 0 0 3.505-9.766H3.415zM0 87c0 1.776.063 3.551.172 5.327h177.171a86.92 86.92 0 0 0 .172-5.327c0-1.491 0-2.965-.117-4.439H.118C0 84.035 0 85.51 0 87.001zm.562 9.765a86.65 86.65 0 0 0 1.685 9.766h172.987a86.66 86.66 0 0 0 1.684-9.766H.562zm17.326 42.613a87.781 87.781 0 0 0 8.758 9.765H150.87a87.672 87.672 0 0 0 8.758-9.765H17.888zM43.02 12.429a89.565 89.565 0 0 0-12.453 8.877H146.95a89.555 89.555 0 0 0-12.454-8.877H43.021zm82.935-4.439A90.463 90.463 0 0 0 88.758 0a90.463 90.463 0 0 0-37.196 7.99h74.393zM55.764 167.786a90.694 90.694 0 0 0 65.988 0H55.764zM25.731 25.745a88.095 88.095 0 0 0-8.523 9.765h143.1a88.156 88.156 0 0 0-8.514-9.765H25.731zM14.093 39.949a85.967 85.967 0 0 0-5.543 9.765h160.416a85.923 85.923 0 0 0-5.543-9.765H14.093zM6.548 54.153a87.759 87.759 0 0 0-3.387 9.765h171.176a87.826 87.826 0 0 0-3.388-9.765H6.549zM2.047 68.357a86.831 86.831 0 0 0-1.594 9.766h176.61a86.74 86.74 0 0 0-1.594-9.766H2.047z"
              />
            </Svg>
            <Svg
              style={{
                position: "absolute",
                right: moderateScale(20),
                top: moderateScale(25),
                // backgroundColor: 'purple',
              }}
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={20}
              fill="none"
            >
              <Path
                fill="#0571B9"
                d="M19.901.886c0 .175.053.347.152.492a.9.9 0 0 0 .406.327.921.921 0 0 0 .985-.192.87.87 0 0 0 .196-.966.89.89 0 0 0-.333-.398.917.917 0 0 0-1.141.11.877.877 0 0 0-.265.627zm-3.982 0a.885.885 0 0 0 .558.824.924.924 0 0 0 .99-.19.884.884 0 0 0 .198-.97.893.893 0 0 0-.334-.4.92.92 0 0 0-1.343.396.871.871 0 0 0-.07.34zm-3.979 0c0 .175.053.347.152.492a.9.9 0 0 0 .406.327.921.921 0 0 0 .985-.192.87.87 0 0 0 .196-.966.89.89 0 0 0-.333-.398.917.917 0 0 0-1.141.11.877.877 0 0 0-.265.627zm-3.979 0c0 .175.053.347.152.492a.9.9 0 0 0 .406.327.921.921 0 0 0 .985-.192A.87.87 0 0 0 9.7.547a.89.89 0 0 0-.333-.398.917.917 0 0 0-1.141.11.877.877 0 0 0-.265.627zm-3.982 0a.885.885 0 0 0 .558.824.924.924 0 0 0 .99-.19.873.873 0 0 0 .198-.97.893.893 0 0 0-.334-.4.92.92 0 0 0-1.343.396.871.871 0 0 0-.069.34zM0 .886c0 .175.053.347.152.492a.9.9 0 0 0 .406.327.921.921 0 0 0 .985-.192.87.87 0 0 0 .196-.966.89.89 0 0 0-.333-.398.917.917 0 0 0-1.141.11A.877.877 0 0 0 0 .887zm19.901 4.612c0 .175.053.346.152.492a.921.921 0 0 0 1.39.134.87.87 0 0 0 .196-.966.89.89 0 0 0-.332-.397.917.917 0 0 0-1.141.11.877.877 0 0 0-.265.627zm-3.982 0a.885.885 0 0 0 .558.824.925.925 0 0 0 .99-.191.884.884 0 0 0 .198-.97.893.893 0 0 0-.334-.4.92.92 0 0 0-1.343.397.871.871 0 0 0-.07.34zm-3.979 0c0 .175.053.346.152.492a.9.9 0 0 0 .406.326.92.92 0 0 0 .985-.192.869.869 0 0 0 .196-.966.89.89 0 0 0-.333-.397.917.917 0 0 0-1.141.11.877.877 0 0 0-.265.627zm-3.979 0c0 .175.053.346.152.492a.9.9 0 0 0 .406.326.92.92 0 0 0 .985-.192.87.87 0 0 0 .196-.966.89.89 0 0 0-.333-.397.917.917 0 0 0-1.141.11.877.877 0 0 0-.265.627zm-3.982 0a.885.885 0 0 0 .558.824.924.924 0 0 0 .99-.191.873.873 0 0 0 .198-.97.893.893 0 0 0-.334-.4.92.92 0 0 0-1.343.397.87.87 0 0 0-.069.34zM0 5.498c0 .175.053.346.152.492a.9.9 0 0 0 .406.326.921.921 0 0 0 .985-.192.87.87 0 0 0 .196-.966.89.89 0 0 0-.333-.397.917.917 0 0 0-1.141.11.877.877 0 0 0-.265.627zm19.901 4.612a.873.873 0 0 0 .159.488.9.9 0 0 0 .408.32.92.92 0 0 0 .98-.2.88.88 0 0 0 .191-.963.89.89 0 0 0-.333-.396.917.917 0 0 0-1.145.115.886.886 0 0 0-.26.635zm-3.982 0c0 .175.053.347.153.493.1.146.241.26.407.328a.924.924 0 0 0 .989-.193.873.873 0 0 0 .197-.97.893.893 0 0 0-.335-.398.92.92 0 0 0-1.343.398.872.872 0 0 0-.068.341zm-3.979 0a.874.874 0 0 0 .159.488.9.9 0 0 0 .408.32.92.92 0 0 0 .98-.2.87.87 0 0 0 .19-.964.89.89 0 0 0-.332-.395.917.917 0 0 0-1.145.115.886.886 0 0 0-.26.635zm-3.979 0a.874.874 0 0 0 .159.488.9.9 0 0 0 .408.32.92.92 0 0 0 .98-.2.87.87 0 0 0 .19-.964.89.89 0 0 0-.332-.395.917.917 0 0 0-1.145.115.885.885 0 0 0-.26.635zm-3.982 0c0 .175.053.347.153.493.1.146.241.26.407.328a.924.924 0 0 0 .989-.193.873.873 0 0 0 .197-.97.893.893 0 0 0-.335-.398.92.92 0 0 0-1.343.398.87.87 0 0 0-.068.341zM0 10.11a.874.874 0 0 0 .159.488.9.9 0 0 0 .408.32.92.92 0 0 0 .98-.2.87.87 0 0 0 .19-.964.89.89 0 0 0-.332-.395.917.917 0 0 0-1.145.115.885.885 0 0 0-.26.635zm19.901 4.607c0 .176.053.347.152.493a.9.9 0 0 0 .406.326.92.92 0 0 0 .985-.192.87.87 0 0 0 .196-.966.89.89 0 0 0-.333-.397.917.917 0 0 0-1.141.11.877.877 0 0 0-.265.626zm-3.982 0c0 .176.052.349.151.495.1.147.241.261.407.33a.925.925 0 0 0 .99-.191.883.883 0 0 0 .198-.97.893.893 0 0 0-.334-.4.92.92 0 0 0-1.343.397.871.871 0 0 0-.07.34zm-3.979 0c0 .176.053.347.152.493a.9.9 0 0 0 .406.326.92.92 0 0 0 .985-.192.87.87 0 0 0 .196-.966.89.89 0 0 0-.333-.397.918.918 0 0 0-1.141.11.878.878 0 0 0-.265.626zm-3.979 0c0 .176.053.347.152.493a.9.9 0 0 0 .406.326.92.92 0 0 0 .985-.192.87.87 0 0 0 .196-.966.89.89 0 0 0-.333-.397.918.918 0 0 0-1.141.11.877.877 0 0 0-.265.626zm-3.075.887a.895.895 0 0 1-.904-.887c0-.489.405-.886.904-.886.5 0 .904.397.904.886 0 .49-.405.886-.904.886zm-3.982 0A.895.895 0 0 1 0 14.716c0-.489.405-.886.904-.886.5 0 .904.397.904.886 0 .49-.405.886-.904.886zm18.997 3.725c0 .175.053.346.152.492a.9.9 0 0 0 .406.327.92.92 0 0 0 .985-.192.87.87 0 0 0 .196-.966.89.89 0 0 0-.333-.398.916.916 0 0 0-1.141.11.877.877 0 0 0-.265.627zm-3.982 0c0 .176.052.348.151.495a.924.924 0 0 0 1.396.138.872.872 0 0 0 .198-.97.892.892 0 0 0-.334-.399.92.92 0 0 0-1.342.396.872.872 0 0 0-.07.34zm-3.979 0c0 .175.053.346.152.492a.9.9 0 0 0 .406.327.92.92 0 0 0 .985-.192.869.869 0 0 0 .196-.966.89.89 0 0 0-.333-.398.917.917 0 0 0-1.141.11.878.878 0 0 0-.265.627zm-3.979 0c0 .175.053.346.152.492a.9.9 0 0 0 .406.327.92.92 0 0 0 .985-.192.87.87 0 0 0 .196-.966.89.89 0 0 0-.333-.398.917.917 0 0 0-1.141.11.877.877 0 0 0-.265.627zm-3.075.886a.895.895 0 0 1-.904-.886c0-.49.405-.886.904-.886.5 0 .904.397.904.886 0 .49-.405.886-.904.886zm-3.982 0A.895.895 0 0 1 0 19.33c0-.49.405-.886.904-.886.5 0 .904.397.904.886 0 .49-.405.886-.904.886z"
              />
            </Svg>
            <Svg
              style={{
                position: "absolute",
                right: moderateScale(10),
                top: moderateScale(9),
                // backgroundColor: 'purple',
              }}
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={24}
              fill="none"
            >
              <Path
                fill="#E6E6E6"
                d="M2.057 1.008c0 .2-.06.394-.174.56a1.024 1.024 0 0 1-.461.371 1.048 1.048 0 0 1-1.12-.218A.99.99 0 0 1 .078.623.995.995 0 0 1 .456.17a1.043 1.043 0 0 1 1.298.125.998.998 0 0 1 .302.713zm4.529 0a.996.996 0 0 1-.172.563 1.028 1.028 0 0 1-.462.374 1.051 1.051 0 0 1-1.126-.217.993.993 0 0 1-.225-1.103c.078-.185.21-.343.38-.454a1.047 1.047 0 0 1 1.527.45.99.99 0 0 1 .078.387zm4.526 0c0 .2-.06.394-.173.56a1.024 1.024 0 0 1-.462.371 1.048 1.048 0 0 1-1.12-.218.99.99 0 0 1-.223-1.098c.078-.185.21-.342.379-.453a1.043 1.043 0 0 1 1.298.125.998.998 0 0 1 .301.713zm4.527 0c0 .2-.06.394-.174.56a1.024 1.024 0 0 1-.461.371 1.048 1.048 0 0 1-1.12-.218.99.99 0 0 1-.223-1.098c.077-.185.209-.342.378-.453a1.044 1.044 0 0 1 1.299.125.998.998 0 0 1 .3.713zm4.53 0c0 .2-.06.396-.173.563a1.028 1.028 0 0 1-.462.374 1.052 1.052 0 0 1-1.126-.217.993.993 0 0 1-.225-1.103c.078-.185.21-.343.38-.454a1.046 1.046 0 0 1 1.527.45.99.99 0 0 1 .079.387zm4.525 0c0 .2-.06.394-.173.56a1.024 1.024 0 0 1-.462.371 1.048 1.048 0 0 1-1.12-.218.989.989 0 0 1-.223-1.098c.078-.185.21-.342.379-.453a1.043 1.043 0 0 1 1.298.125.998.998 0 0 1 .301.713zM2.057 6.254c0 .199-.06.394-.174.56a1.024 1.024 0 0 1-.461.37 1.048 1.048 0 0 1-1.12-.218.99.99 0 0 1-.223-1.098 1.01 1.01 0 0 1 .378-.453 1.043 1.043 0 0 1 1.298.126.998.998 0 0 1 .302.713zm4.529 0a.996.996 0 0 1-.172.563 1.028 1.028 0 0 1-.462.374 1.051 1.051 0 0 1-1.126-.217.993.993 0 0 1-.225-1.103 1.02 1.02 0 0 1 .38-.455 1.047 1.047 0 0 1 1.527.451.99.99 0 0 1 .078.387zm4.526 0c0 .199-.06.394-.173.56a1.024 1.024 0 0 1-.462.37 1.048 1.048 0 0 1-1.12-.218.99.99 0 0 1-.223-1.098c.078-.184.21-.342.379-.453a1.043 1.043 0 0 1 1.298.126.998.998 0 0 1 .301.713zm4.527 0c0 .199-.06.394-.174.56a1.024 1.024 0 0 1-.461.37 1.048 1.048 0 0 1-1.12-.218.99.99 0 0 1-.223-1.098 1.01 1.01 0 0 1 .378-.453 1.044 1.044 0 0 1 1.299.126.998.998 0 0 1 .3.713zm4.53 0c0 .2-.06.396-.173.563a1.028 1.028 0 0 1-.462.374 1.051 1.051 0 0 1-1.126-.217.993.993 0 0 1-.225-1.103 1.02 1.02 0 0 1 .38-.455 1.046 1.046 0 0 1 1.527.451.99.99 0 0 1 .079.387zm4.525 0c0 .199-.06.394-.173.56a1.024 1.024 0 0 1-.462.37 1.048 1.048 0 0 1-1.12-.218.989.989 0 0 1-.223-1.098c.078-.184.21-.342.379-.453a1.043 1.043 0 0 1 1.298.126.998.998 0 0 1 .301.713zM2.057 11.5a.994.994 0 0 1-.18.555 1.032 1.032 0 0 1-.465.365 1.049 1.049 0 0 1-1.116-.228.99.99 0 0 1-.216-1.097c.078-.183.21-.34.378-.45a1.043 1.043 0 0 1 1.303.132 1.008 1.008 0 0 1 .296.722zm4.529 0c0 .2-.06.395-.173.561a1.028 1.028 0 0 1-.464.373 1.051 1.051 0 0 1-1.124-.22.993.993 0 0 1-.224-1.102c.078-.185.21-.343.38-.454a1.047 1.047 0 0 1 1.528.454.99.99 0 0 1 .077.387zm4.526 0a.994.994 0 0 1-.18.555 1.027 1.027 0 0 1-.465.365 1.049 1.049 0 0 1-1.115-.228.99.99 0 0 1-.216-1.097c.078-.183.21-.34.378-.45a1.043 1.043 0 0 1 1.302.132 1.009 1.009 0 0 1 .296.722zm4.527 0a.995.995 0 0 1-.18.555 1.032 1.032 0 0 1-.465.365 1.049 1.049 0 0 1-1.116-.228.989.989 0 0 1-.216-1.097c.078-.183.21-.34.378-.45a1.043 1.043 0 0 1 1.303.132 1.008 1.008 0 0 1 .296.722zm4.53 0c0 .2-.061.395-.174.561a1.028 1.028 0 0 1-.464.373 1.051 1.051 0 0 1-1.124-.22.993.993 0 0 1-.224-1.102c.078-.185.21-.343.38-.454a1.047 1.047 0 0 1 1.528.454.99.99 0 0 1 .078.387zm4.525 0a.994.994 0 0 1-.18.555 1.022 1.022 0 0 1-.465.365 1.048 1.048 0 0 1-1.115-.228.989.989 0 0 1-.216-1.097c.078-.183.21-.34.378-.45a1.043 1.043 0 0 1 1.302.132 1.007 1.007 0 0 1 .296.722zM2.057 16.741c0 .2-.06.395-.174.56a1.024 1.024 0 0 1-.461.372 1.047 1.047 0 0 1-1.12-.219.99.99 0 0 1-.223-1.099c.077-.184.209-.341.378-.452a1.043 1.043 0 0 1 1.298.126.998.998 0 0 1 .302.712zm4.529 0a.996.996 0 0 1-.172.563 1.027 1.027 0 0 1-.462.375 1.05 1.05 0 0 1-1.126-.217.993.993 0 0 1-.225-1.103 1.02 1.02 0 0 1 .38-.455 1.047 1.047 0 0 1 1.527.45.99.99 0 0 1 .078.387zm4.526 0c0 .2-.06.395-.173.56a1.024 1.024 0 0 1-.462.372 1.047 1.047 0 0 1-1.12-.219.99.99 0 0 1-.223-1.099c.078-.184.21-.341.379-.452a1.043 1.043 0 0 1 1.298.126.998.998 0 0 1 .301.712zm4.527 0c0 .2-.06.395-.174.56a1.024 1.024 0 0 1-.461.372 1.048 1.048 0 0 1-1.12-.219.99.99 0 0 1-.223-1.099c.077-.184.209-.341.378-.452a1.043 1.043 0 0 1 1.299.126.998.998 0 0 1 .3.712zm3.497 1.009a1.02 1.02 0 0 0 1.029-1.009c0-.556-.46-1.008-1.029-1.008-.568 0-1.028.452-1.028 1.008 0 .557.46 1.008 1.028 1.008zm4.53 0c.568 0 1.028-.452 1.028-1.009 0-.556-.46-1.008-1.028-1.008-.568 0-1.028.452-1.028 1.008 0 .557.46 1.008 1.028 1.008zM2.057 21.987c0 .2-.06.394-.174.56a1.024 1.024 0 0 1-.461.371 1.047 1.047 0 0 1-1.12-.218.99.99 0 0 1-.223-1.099c.077-.184.209-.341.378-.452a1.043 1.043 0 0 1 1.298.125c.193.19.302.446.302.713zm4.529 0a.996.996 0 0 1-.172.563 1.027 1.027 0 0 1-.462.374 1.05 1.05 0 0 1-1.126-.217.993.993 0 0 1-.225-1.103c.078-.185.21-.343.38-.454a1.047 1.047 0 0 1 1.527.45.99.99 0 0 1 .078.387zm4.526 0c0 .2-.06.394-.173.56a1.024 1.024 0 0 1-.462.371 1.047 1.047 0 0 1-1.12-.218.99.99 0 0 1-.223-1.099c.078-.184.21-.341.379-.452a1.043 1.043 0 0 1 1.298.125 1 1 0 0 1 .301.713zm4.527 0c0 .2-.06.394-.174.56a1.024 1.024 0 0 1-.461.371 1.048 1.048 0 0 1-1.12-.218.99.99 0 0 1-.223-1.099c.077-.184.209-.341.378-.452a1.043 1.043 0 0 1 1.299.125c.192.19.3.446.3.713zm3.497 1.008c.568 0 1.029-.451 1.029-1.008 0-.557-.46-1.008-1.029-1.008-.568 0-1.028.451-1.028 1.008 0 .557.46 1.008 1.028 1.008zm4.53 0c.568 0 1.028-.451 1.028-1.008 0-.557-.46-1.008-1.028-1.008-.568 0-1.028.451-1.028 1.008 0 .557.46 1.008 1.028 1.008z"
              />
            </Svg>
            {/* ---------------------------ICONS----------------------------- */}
            <View
              style={{
                marginLeft: horizontalScale(20),
                marginVertical: verticalScale(15),
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{
                    uri:
                      user.photoURL ||
                      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
                  }}
                  style={{
                    width: horizontalScale(54),
                    height: horizontalScale(54),
                    borderRadius: moderateScale(100),
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: moderateScale(20),
                    color: "white",
                    marginLeft: horizontalScale(18),
                  }}
                >
                  {user.displayName}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#08C755",
                  width: horizontalScale(110),
                  height: verticalScale(15),
                  borderRadius: moderateScale(50),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: verticalScale(15),
                }}
              >
                <Svg height={8} width={8} viewBox="0 0 80 80">
                  <IconWhiteChecklist2 />
                </Svg>
                <Text
                  style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: moderateScale(7),
                    color: "white",
                    marginLeft: horizontalScale(4),
                  }}
                >
                  CHECK-IN SUCCEEDED
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: moderateScale(10),
                  color: "white",
                  marginTop: verticalScale(5),
                }}
              >
                Bunaken Island, Manado
              </Text>
            </View>
          </LinearGradient>
          {/* -----------------------MAIN SHAPE-----------------------*/}
        </View>
      </BlurView>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  itemContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    overflow: "hidden",
    // backgroundColor: "red",
  },
  mainContainer: {
    backgroundColor: "rgba(16, 50, 84, 0.6)",
    height: verticalScale(250),
    paddingHorizontal: horizontalScale(15),
    paddingTop: verticalScale(30),
  },

  aimeLogoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textAime: {
    fontFamily: "Poppins-Bold",
    fontSize: moderateScale(25),
    marginLeft: horizontalScale(8),
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerContainer: {
    // backgroundColor: "red",
    height: verticalScale(137),
    marginTop: verticalScale(20),
    borderRadius: moderateScale(15),
    overflow: "hidden",
  },
});

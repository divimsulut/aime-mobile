import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import React, { useState } from "react";
import {
  Splash,
  Welcome,
  SignUp,
  Verify,
  SuccessRegister,
  SignIn,
  HomeNextGen,
  ImigrationInfo,
  ScanBarcode,
  HelpCenter,
  Profile,
  ExploreDestination,
  DestionationDetail,
  News,
  ActivityLog,
  NearbyOffice,
  OfficeDetail,
  ForgetPass,
  OtpPage,
  ResetPass,
  PassChanged,
  HelpChat,
  Notification,
  FavoriteList,

  //Profile Section
  EditProfile,
  Profile_Notification,
  Profile_PP,
  Profile_AboutApp,
} from "../pages";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Svg, Path } from "react-native-svg";
import { moderateScale, verticalScale } from "../constant";
import LottieView from "lottie-react-native";
import { Home } from "../assets";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [animatedValue] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            zIndex: 2,
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            height: verticalScale(72),
            borderTopLeftRadius: moderateScale(10),
            borderTopRightRadius: moderateScale(10),
          },
        }}
      >
        <Tab.Screen
          name="HomeNextGen"
          component={HomeNextGen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ width: 70, height: 70 }}>
                  {/* <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={29}
                    fill="none"
                  >
                    <Path
                      fill={focused ? "#DEC800" : "#051C2F"}
                      d="M12.667 26.667v-8.334h6.666v8.334c0 .916.75 1.666 1.667 1.666h5c.917 0 1.667-.75 1.667-1.666V15H30.5c.767 0 1.133-.95.55-1.45L17.117 1a1.68 1.68 0 0 0-2.234 0L.95 13.55C.383 14.05.733 15 1.5 15h2.833v11.667c0 .916.75 1.666 1.667 1.666h5c.917 0 1.667-.75 1.667-1.666z"
                    />
                  </Svg> */}
                  <LottieView source={Home} autoPlay={focused} loop={false} />
                </View>
              );
            },
          }}
          listeners={{
            tabPress: (e) => {
              Animated.spring(animatedValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          }}
        />

        <Tab.Screen
          name="ImigrationInfo"
          component={ImigrationInfo}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={34}
                    height={34}
                    fill="none"
                  >
                    <Path
                      fill={focused ? "#DEC800" : "#051C2F"}
                      d="M17 .333C7.8.333.333 7.8.333 17 .333 26.2 7.8 33.667 17 33.667c9.2 0 16.667-7.467 16.667-16.667C33.667 7.8 26.2.333 17 .333zm0 25c-.917 0-1.667-.75-1.667-1.666V17c0-.917.75-1.667 1.667-1.667s1.667.75 1.667 1.667v6.667c0 .916-.75 1.666-1.667 1.666zM18.667 12h-3.334V8.667h3.334V12z"
                    />
                  </Svg>
                </View>
              );
            },
          }}
          listeners={{
            tabPress: (e) => {
              Animated.spring(animatedValue, {
                toValue: getWidth() * 1.05,
                useNativeDriver: true,
              }).start();
            },
          }}
        />

        <Tab.Screen
          name="ScanBarcode"
          component={ScanBarcode}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    navigation.navigate("ScanBarcode");
                    Animated.spring(animatedValue, {
                      toValue: getWidth() * -1,
                      useNativeDriver: true,
                    }).start();
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "white",
                      borderWidth: 11,
                      width: 100,
                      height: 100,
                      borderRadius: 100,
                      borderColor: "#051C2F",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: verticalScale(70),
                      zIndex: 1,
                    }}
                  >
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      fill="none"
                    >
                      <Path
                        fill="#041C2E"
                        d="M19.791 13.542v6.25h-6.25v-6.25h6.25zm3.125-3.125h-12.5v12.5h12.5v-12.5zm-3.125 19.791v6.25h-6.25v-6.25h6.25zm3.125-3.125h-12.5v12.5h12.5v-12.5zm13.542-13.541v6.25h-6.25v-6.25h6.25zm3.125-3.125h-12.5v12.5h12.5v-12.5zm-12.5 16.666h3.125v3.125h-3.125v-3.125zm3.125 3.125h3.125v3.125h-3.125v-3.125zm3.125-3.125h3.125v3.125h-3.125v-3.125zm-6.25 6.25h3.125v3.125h-3.125v-3.125zm3.125 3.125h3.125v3.125h-3.125v-3.125zm3.125-3.125h3.125v3.125h-3.125v-3.125zm3.125-3.125h3.125v3.125h-3.125v-3.125zm0 6.25h3.125v3.125h-3.125v-3.125zm9.375-21.875h-4.166v-6.25h-6.25V4.167h10.416v10.416zm0 31.25V35.417h-4.166v6.25h-6.25v4.166h10.416zm-41.666 0h10.416v-4.166h-6.25v-6.25H4.166v10.416zm0-41.666v10.416h4.166v-6.25h6.25V4.167H4.167z"
                      />
                    </Svg>
                  </View>
                </TouchableOpacity>
              );
            },
          }}
        />

        <Tab.Screen
          name="HelpCenter"
          component={HelpCenter}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={34}
                    height={30}
                    fill="none"
                  >
                    <Path
                      fill={focused ? "#DEC800" : "#051C2F"}
                      d="M32 15.367C32 6.217 24.9 0 17 0 9.183 0 2 6.083 2 15.467a3.28 3.28 0 0 0-1.667 2.866v3.334C.333 23.5 1.833 25 3.667 25c.916 0 1.666-.75 1.666-1.667v-8.016c0-6.384 4.917-11.967 11.3-12.15 6.6-.2 12.034 5.1 12.034 11.666v11.834H17c-.917 0-1.667.75-1.667 1.666 0 .917.75 1.667 1.667 1.667h11.667C30.5 30 32 28.5 32 26.667v-2.034a3.081 3.081 0 0 0 1.667-2.733v-3.833c0-1.167-.684-2.184-1.667-2.7z"
                    />
                    <Path
                      fill={focused ? "#DEC800" : "#051C2F"}
                      d="M12 18.333A1.667 1.667 0 1 0 12 15a1.667 1.667 0 0 0 0 3.333zm10 0A1.667 1.667 0 1 0 22 15a1.667 1.667 0 0 0 0 3.333z"
                    />
                    <Path
                      fill={focused ? "#DEC800" : "#051C2F"}
                      d="M27 13.383C26.2 8.633 22.067 5 17.083 5 12.033 5 6.6 9.183 7.033 15.75c4.117-1.683 7.217-5.35 8.1-9.817 2.184 4.384 6.667 7.4 11.867 7.45z"
                    />
                  </Svg>
                </View>
              );
            },
          }}
          listeners={{
            tabPress: (e) => {
              Animated.spring(animatedValue, {
                toValue: getWidth() * 3.35,
                useNativeDriver: true,
              }).start();
            },
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={34}
                    height={34}
                    fill="none"
                  >
                    <Path
                      fill={focused ? "#DEC800" : "#051C2F"}
                      d="M17 .333C7.8.333.333 7.8.333 17 .333 26.2 7.8 33.667 17 33.667c9.2 0 16.667-7.467 16.667-16.667C33.667 7.8 26.2.333 17 .333zm0 5c2.767 0 5 2.234 5 5 0 2.767-2.233 5-5 5s-5-2.233-5-5c0-2.766 2.233-5 5-5zM17 29a12 12 0 0 1-10-5.367c.05-3.316 6.667-5.133 10-5.133 3.317 0 9.95 1.817 10 5.133A12.001 12.001 0 0 1 17 29z"
                    />
                  </Svg>
                </View>
              );
            },
          }}
          listeners={{
            tabPress: (e) => {
              Animated.spring(animatedValue, {
                toValue: getWidth() * 4.4,
                useNativeDriver: true,
              }).start();
            },
          }}
        />
      </Tab.Navigator>

      <Animated.View
        style={{
          zIndex: 0,
          width: getWidth() - 20,
          height: verticalScale(5),
          backgroundColor: "#DEC800",
          position: "absolute",
          bottom: 63,
          borderTopLeftRadius: moderateScale(10),
          borderTopRightRadius: moderateScale(10),
          left: 15,
          transform: [{ translateX: animatedValue }],
        }}
      ></Animated.View>
    </View>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      // initialRouteName="SignUp" //Bypass langsung ke Profile SEMENTARA
    >
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verify"
        component={Verify}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccessRegister"
        component={SuccessRegister}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExploreDestination"
        component={ExploreDestination}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DestionationDetail"
        component={DestionationDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActivityLog"
        component={ActivityLog}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NearbyOffice"
        component={NearbyOffice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OfficeDetail"
        component={OfficeDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgetPass"
        component={ForgetPass}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpPage"
        component={OtpPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPass"
        component={ResetPass}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PassChanged"
        component={PassChanged}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="HelpChat"
        component={HelpChat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />

      {/* Favorite List */}
      <Stack.Screen
        name="FavoriteList"
        component={FavoriteList}
        options={{ headerShown: false }}
      />

      {/* PROFILE SECTION */}
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile_Notification"
        component={Profile_Notification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile_PP"
        component={Profile_PP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile_AboutApp"
        component={Profile_AboutApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

function getWidth() {
  let width = Dimensions.get("window").width;
  width = width - 40;

  return width / 5;
}

export default Router;

const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Location from "expo-location";

import { horizontalScale, moderateScale, verticalScale } from "../../constant";
import { ImageRadar } from "../../assets";
import { FlatImigrationOffice, Header } from "../../components";
import { DataKantorImigrasi } from "../../data";

// For GPS
// const [location, setLocation] = useState(null);
// const [errorMsg, setErrorMsg] = useState(null);

// let text = "Waiting..";
// if (errorMsg) {
//   text = errorMsg;
// } else if (location) {
//   text = JSON.stringify(location);
//   console.log(location);
//   console.log(location.coords.latitude);
// }

function findNearestCoordinate(coordinates, target) {
  const R = 6371; // Earth's radius in kilometers
  let closestCoordinate = null;
  let closestDistance = Infinity;

  for (let i = 0; i < coordinates.length; i++) {
    const { latitude, longitude, altitude } = coordinates[i];
    console.log(latitude, longitude, altitude);

    console.log("TARGET: ", target);
    const dLat = toRadians(target.coords.latitude - latitude);
    const dLon = toRadians(target.coords.longitude - longitude);
    const lat1 = toRadians(latitude);
    const lat2 = toRadians(target.coords.latitude);
    console.log("dLat, dLon, lat1, lat2: ", dLat, dLon, lat1, lat2);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    console.log("DISTANCE: ", distance);
    console.log("closestDistance: ", closestDistance);

    console.log(
      altitude,
      target.coords.altitude,
      altitude === target.coords.altitude
    );

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCoordinate = coordinates[i];

      console.log("ABC", closestDistance);
    }
  }

  console.log("closestCoordinate: ", closestCoordinate);
  return closestCoordinate;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

const handleNearby = (navigation) => {
  getGPSLocation()
    .then((location) => {
      const nearestOfficeResult = findNearestCoordinate(
        DataKantorImigrasi,
        location
      );
      console.log("LOCATION: ", nearestOfficeResult, location);
      if (nearestOfficeResult) {
        navigation.navigate("OfficeDetail", { item: nearestOfficeResult });
      }
    })
    .catch((err) => console.log("error: ", err));
};

const getGPSLocation = () => {
  console.log("getGPSLocation");
  return new Promise(async (resolve, reject) => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      reject("Permission to access location was denied");
      return;
    }

    console.log("yuhu");
    Location.getCurrentPositionAsync({})
      .then((location) => {
        console.log("location: ", location);
        resolve(location);
      })
      .catch((err) => {
        reject("ERR @GET_GPS_CURRENT_LOCATION: ", err);
      });
    // let location = await Location.getCurrentPositionAsync({});
    // console.log(location);
    // resolve(location);
  });
};

const ImigrationInfo = ({ navigation }) => {
  const HeaderComponent = () => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            handleNearby(navigation);
            // navigation.navigate("NearbyOffice");
          }}
        >
          <LinearGradient
            colors={["#FFF504", "#C69D0E"]}
            style={styles.buttonFind}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 1 }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: moderateScale(21),
                width: horizontalScale(192),
                color: "#1E1E1E",
              }}
            >
              Find Imigration Office Near You
            </Text>
            <Image source={ImageRadar} style={{ height: verticalScale(112) }} />
          </LinearGradient>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Poppins-ExtraBold",
            fontSize: moderateScale(20),
            color: "white",
            marginTop: verticalScale(28),
          }}
        >
          Our Office
        </Text>
      </View>
    );
  };

  return (
    <LinearGradient colors={["#12365D", "#021726"]} style={{ flex: 1 }}>
      {/* Header */}
      <Header
        label={"Imigration Information"}
        color={"white"}
        backBtn={false}
      />
      {/* Header */}
      <View style={styles.page}>
        {/* Flatlist start */}
        <FlatList
          data={DataKantorImigrasi}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return <FlatImigrationOffice item={item} navigation={navigation} />;
          }}
          ListHeaderComponent={HeaderComponent}
          ListFooterComponent={() => {
            return (
              <View
                style={{
                  height: verticalScale(120),
                }}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
        />

        {/* Flatlist end */}
      </View>
    </LinearGradient>
  );
};

export default ImigrationInfo;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: horizontalScale(21),
  },
  buttonFind: {
    borderRadius: moderateScale(25),
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: horizontalScale(30),
    marginTop: horizontalScale(112),
    overflow: "hidden",
  },
});

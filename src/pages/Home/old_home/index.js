import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { ImagePeople } from "../../../assets/images";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../constant";
import { IconArrow, IconMore, IconNotification } from "../../../assets/icons";
import FlatCard from "../../../components/ListComponents/FlatCard";
import { ButtonScanQr, CheckInList } from "../../../components";
import { DataDestination, DataCheckinhist } from "../../../data";

const Home = () => {
  return (
    <LinearGradient colors={["#12365D", "#021726"]} style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image source={ImagePeople} style={styles.image} />
          <Text style={styles.name}>Hi, Yaki Kato</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <IconNotification />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconMore />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {/* Destination */}
        <View style={styles.destinationContainer}>
          <View style={styles.destionationHeader}>
            <Text style={styles.destinationText}>Destination Suggestion</Text>
            <TouchableOpacity style={styles.viewContainer}>
              <Text style={styles.viewText}>View All</Text>
              <IconArrow />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flatCardContainer}>
          <FlatList
            data={DataDestination}
            keyExtractor={(item) => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return <FlatCard item={item} />;
            }}
          />
        </View>
        {/* Check-in History */}
        <View style={styles.checkinContainer}>
          <View>
            <Text style={styles.textCheckin}>Check-In History</Text>
          </View>
          <FlatList
            data={DataCheckinhist}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
              return <CheckInList item={item} />;
            }}
            style={styles.listContainer}
          />
        </View>
      </ScrollView>
      {/* Button Scan */}

      <LinearGradient
        colors={[
          "rgba(0255,255,255,0)",
          "rgba(0255,255,255,0.6)",
          "rgba(0255,255,255,0.9)",
          "rgba(0255,255,255,1)",
        ]}
        style={styles.btnContainer}
      >
        <View style={styles.btnScanContainer}>
          <ButtonScanQr />
        </View>
      </LinearGradient>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    // backgroundColor: 'green',
    marginTop: verticalScale(30),
    marginBottom: verticalScale(20),
    marginHorizontal: horizontalScale(20),
    justifyContent: "space-between",
  },
  profile: { flexDirection: "row", alignItems: "center" },
  image: {
    width: horizontalScale(54),
    height: horizontalScale(54),
    borderRadius: moderateScale(50),
  },
  name: {
    marginLeft: moderateScale(11),
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: "white",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-between",
    width: horizontalScale(105),
  },
  destinationContainer: {
    marginLeft: moderateScale(20),
    marginTop: moderateScale(15),
  },
  destionationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: horizontalScale(18),
  },
  destinationText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: "white",
  },
  viewText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 10,
    color: "white",
  },
  viewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: horizontalScale(70),
  },
  flatCardContainer: {
    marginTop: verticalScale(15),
  },
  checkinContainer: {
    // flex: 1,
    backgroundColor: "white",
    paddingTop: verticalScale(41),
    paddingHorizontal: horizontalScale(28),
    marginTop: verticalScale(60),
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
  },
  textCheckin: {
    fontFamily: "Poppins-Bold",
    fontSize: 23,
    color: "black",
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  btnScanContainer: {
    // backgroundColor: 'green',
    height: verticalScale(180),
    alignItems: "center",
    justifyContent: "center",
  },
});

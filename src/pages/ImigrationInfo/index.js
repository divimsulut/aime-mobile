import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { horizontalScale, moderateScale, verticalScale } from "../../constant";
import { ImageRadar } from "../../assets";
import { FlatImigrationOffice, Header } from "../../components";
import { DataKantorImigrasi } from "../../data";

const ImigrationInfo = ({ navigation }) => {
  const HeaderComponent = () => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("NearbyOffice")}
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
    height: verticalScale(112),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: horizontalScale(30),
    marginTop: horizontalScale(112),
    overflow: "hidden",
  },
});

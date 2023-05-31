import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../constant";
import { Svg } from "react-native-svg";
import { IconPinYellow } from "../../../assets/icons";
import FlatImage from "../../../components/ListComponents/FlatImage";
import { Shadow } from "react-native-shadow-2";
import { Header } from "../../../components";
import { ScrollView } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";

const DestionationDetail = ({ navigation, route }) => {
  const { item } = route.params;

  const openMapsApp = (address) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      address
    )}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={{ height: "47%", width: "100%" }}>
        <Image
          source={{ uri: item.imageURL }}
          style={{ resizeMode: "cover", flex: 1 }}
        />
      </View>

      <ScrollView style={styles.detailContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: verticalScale(40),
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-ExtraBold",
              fontSize: moderateScale(30),
              color: "white",
              alignContent: "center",
              width: "85%",
            }}
          >
            {item.destinationName}
          </Text>
          <View
            style={{
              flex: 1,
              marginLeft: 5,
            }}
          >
            {/* <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: "rgba(77, 117, 149, 1)",
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <Fontisto name="star" color={"white"} size={15} />
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Svg width="21" height="21" viewBox="0 0 21 21">
            <IconPinYellow />
          </Svg>
          <Text
            style={{
              fontFamily: "Poppins-Light",
              fontSize: moderateScale(15),
              color: "#E5CF00",
              marginLeft: horizontalScale(3),
            }}
          >
            {item.address}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: moderateScale(15),
            color: "white",
            marginTop: verticalScale(28),
          }}
        >
          {item.description}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: moderateScale(20),
            color: "white",
            marginTop: verticalScale(28),
          }}
        >
          Preview
        </Text>
        <View>
          <FlatList
            data={item.previewImages}
            keyExtractor={(item) => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return <FlatImage item={item} />;
            }}
          />
        </View>
        <View style={{ marginTop: horizontalScale(50), alignItems: "center" }}>
          <Shadow
            startColor="rgba(229, 207, 0, 0.15)"
            distance={15}
            offset={[0, 10]}
          >
            <TouchableOpacity
              onPress={() => openMapsApp(item.destinationName)}
              style={styles.buttonContainer}
              activeOpacity={0.8}
            >
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: moderateScale(20),
                  color: "black",
                }}
              >
                Get Direction
              </Text>
            </TouchableOpacity>
          </Shadow>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

export default DestionationDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailContainer: {
    backgroundColor: "#021726",
    // flex: 1,
    height: "56%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    paddingHorizontal: horizontalScale(30),
  },
  buttonContainer: {
    backgroundColor: "#E5CF00",
    width: horizontalScale(325),
    paddingVertical: 4,
    borderRadius: moderateScale(8),
    justifyContent: "center",
    alignItems: "center",
  },
});

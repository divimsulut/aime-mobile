import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ImageLandscape3 } from "../../../assets/images";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../constant";
import { Svg } from "react-native-svg";
import { IconPinYellow, IconBack } from "../../../assets/icons";
import FlatImage from "../../../components/ListComponents/FlatImage";
import { DataImage } from "../../../data";
import { Shadow } from "react-native-shadow-2";
import { Header } from "../../../components";
import { ScrollView } from "react-native";

const DestionationDetail = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item.image);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={{ height: "47%", width: "100%" }}>
        <Image
          source={{ uri: item.image }}
          style={{ resizeMode: "cover", flex: 1 }}
        />
      </View>
      <ScrollView style={styles.detailContainer}>
        <Text
          style={{
            fontFamily: "Poppins-ExtraBold",
            fontSize: moderateScale(30),
            color: "white",
          }}
        >
          {item.destination}
        </Text>
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
            {item.location}
          </Text>
        </View>
        <Text
          numberOfLines={3}
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
            data={item.previewImage}
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
    paddingTop: verticalScale(45),
    paddingHorizontal: horizontalScale(30),
  },
  buttonContainer: {
    backgroundColor: "#E5CF00",
    width: horizontalScale(325),
    height: verticalScale(48),
    borderRadius: moderateScale(8),
    justifyContent: "center",
    alignItems: "center",
  },
});

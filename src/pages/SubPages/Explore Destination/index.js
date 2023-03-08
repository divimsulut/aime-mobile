import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { ImageLandscape3 } from "../../../assets";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../constant";
import { Svg, Path } from "react-native-svg";
import { Shadow } from "react-native-shadow-2";
import { ButtonBack, FlatCard } from "../../../components";
import { DataDestination } from "../../../data";

const ExploreDestination = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const filteredData = DataDestination.filter((item) => {
    return (
      item.destination.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <View>
      <ButtonBack navigation={navigation} />
      <ScrollView>
        <View style={styles.mainImageContainer}>
          <Image source={ImageLandscape3} style={{ flex: 1 }} />
        </View>

        <View style={styles.contentContainer}>
          <Shadow
            startColor="#ffffff"
            distance={50}
            sides={{ bottom: false, start: false, end: false, top: true }}
          >
            <View style={styles.shadowContainer} />
          </Shadow>
          <View style={styles.searchHelperContainer}>
            <Shadow distance={30}>
              <View style={styles.searchContainer}>
                <Svg
                  // style={{backgroundColor: 'red'}}
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M12.5 11h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34A6.505 6.505 0 00.05 7.32c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L12.5 11zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z"
                    fill="#353535"
                  />
                </Svg>
                <View style={styles.textSearchContainer}>
                  <TextInput
                    placeholder="Where are you heading today?"
                    onChangeText={(value) => setSearch(value)}
                  />
                </View>
              </View>
            </Shadow>
          </View>
          <View
            style={{
              marginTop: verticalScale(70),
            }}
          >
            <Text style={styles.textTitle}>Explore Destination</Text>
            <View style={{ marginTop: verticalScale(24) }}>
              <FlatList
                data={filteredData}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                  <FlatCard item={item} navigation={navigation} />
                )}
                contentContainerStyle={{
                  width: "100%",
                  // backgroundColor: 'green',
                  paddingHorizontal: horizontalScale(14),
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreDestination;

const styles = StyleSheet.create({
  mainImageContainer: {
    width: "100%",
    height: verticalScale(313),
    overflow: "hidden",
  },
  contentContainer: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  shadowContainer: {
    // backgroundColor: "green",
    width: "100%",
    height: verticalScale(20),
    position: "absolute",
    top: 0,
  },
  searchHelperContainer: {
    position: "absolute",
    top: verticalScale(-23),
    alignSelf: "center",
  },
  searchContainer: {
    height: verticalScale(46),
    width: horizontalScale(372),
    backgroundColor: "white",
    borderRadius: moderateScale(20),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: horizontalScale(15),
  },
  textSearchContainer: {
    marginLeft: horizontalScale(10),
    width: horizontalScale(290),
    opacity: 0.8,
  },
  textTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(20),
    color: "black",
    marginHorizontal: horizontalScale(14),
  },
});

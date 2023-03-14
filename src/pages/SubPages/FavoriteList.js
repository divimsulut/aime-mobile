import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Header, ItemFavoriteList } from "../../components";
import { ImageFLBanner, ImageLandScape, ImageLandscape2 } from "../../assets";
import { verticalScale } from "../../constant";

import { DataFavoriteList } from "../../data";

const FavoriteList = ({ navigation }) => {
  return (
    <View>
      <View style={{ backgroundColor: "#021726" }}>
        <Header label={"Favorites"} navigation={navigation} />
        <ScrollView>
          <View style={{ marginTop: verticalScale(104) }} />
          <Image
            source={ImageFLBanner}
            style={{ height: verticalScale(190), width: "100%" }}
          />

          <View style={{ marginTop: verticalScale(20) }} />

          <FlatList
            data={DataFavoriteList}
            // keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
              return <ItemFavoriteList item={item} />;
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default FavoriteList;

const styles = StyleSheet.create({});

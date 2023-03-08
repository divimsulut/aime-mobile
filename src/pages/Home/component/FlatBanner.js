import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../constant";
import { DataImage } from "../../../data";

const FlatBanner = () => {
  const flatListRef = useRef(null);
  const itemWidth = horizontalScale(346);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // SCROLL EVERY 3 SECONDS

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (selectedIndex === DataImage.length - 1) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex(selectedIndex + 1);
      }
      flatListRef.current.scrollToIndex({
        index: selectedIndex,
        animated: true,
        viewPosition: 0.5,
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }, [selectedIndex]);

  const Component = ({ item }) => {
    return (
      <View
        style={{
          width: itemWidth,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={{ flex: 1 }} />
        </View>
      </View>
    );
  };
  return (
    <FlatList
      ref={flatListRef}
      data={DataImage}
      scrollEventThrottle={16}
      keyExtractor={(item) => item.key}
      horizontal
      snapToAlignment={"center"}
      snapToInterval={itemWidth}
      decelerationRate={0}
      scrolltoin
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return <Component item={item} />;
      }}
    />
  );
};

export default FlatBanner;

const styles = StyleSheet.create({
  imageContainer: {
    width: horizontalScale(325),
    height: verticalScale(130),
    borderRadius: moderateScale(15),
    marginHorizontal: horizontalScale(14),
    overflow: "hidden",
  },
  bulletContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: verticalScale(-20),
    alignSelf: "center",
  },
  bullet: {
    width: horizontalScale(10),
    height: verticalScale(10),
    borderRadius: 5,
    backgroundColor: "#BAB9B9",
    marginHorizontal: verticalScale(3),
  },
  selectedBullet: {
    width: horizontalScale(10),
    height: verticalScale(10),
    borderRadius: 5,
    backgroundColor: "#E5CF00",
    marginHorizontal: verticalScale(3),
  },
});

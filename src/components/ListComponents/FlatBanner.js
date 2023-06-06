import { FlatList, Image, StyleSheet, View } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { horizontalScale, moderateScale, verticalScale } from "../../constant";

const FlatBanner = ({ data }) => {
  const flatListRef = useRef(null);
  const itemWidth = horizontalScale(346);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [onDrag, setOnDrag] = useState(false);

  // SCROLL EVERY 3 SECONDS
  useEffect(() => {
    if (!onDrag) {
      flatListRef.current.scrollToIndex({
        index: selectedIndex,
        animated: true,
        viewPosition: 0.5,
      });
    }
    const intervalId = setInterval(() => {
      if (selectedIndex === data?.length - 1) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex(selectedIndex + 1);
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [selectedIndex, onDrag]);

  const Component = ({ item }) => {
    return (
      <View
        key={item.index}
        style={{
          width: itemWidth,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.url }} style={{ flex: 1 }} />
        </View>
      </View>
    );
  };
  return (
    <FlatList
      onScrollBeginDrag={() => {
        setOnDrag(true);
      }}
      onScrollEndDrag={(e) => {
        const newIndex = Math.round(e.nativeEvent.contentOffset.x / itemWidth);
        setOnDrag(false);
        setSelectedIndex(newIndex);
      }}
      ref={flatListRef}
      data={data}
      scrollEventThrottle={16}
      horizontal
      snapToAlignment={"center"}
      snapToInterval={itemWidth}
      decelerationRate={0}
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

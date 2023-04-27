import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Svg, Path, Circle, G, Mask, Defs, ClipPath } from "react-native-svg";

const Notification_Info = () => {
  return (
    <View>
      <View style={styles.item_row}>
        {/* INFO ICON */}
        <View style={[styles.roundedsquare, styles.center]}>
          <View style={[styles.circle, styles.center]}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="14"
              fill="none"
              viewBox="0 0 6 14"
            >
              <Path
                fill="#448693"
                d="M2.9.113c.274 0 .505.098.694.293.195.19.293.42.293.694a.959.959 0 01-.293.703.927.927 0 01-.694.293.959.959 0 01-.703-.293.959.959 0 01-.293-.703c0-.274.095-.505.284-.694A.97.97 0 012.9.113zm.81 4.678v7.188c0 .56.04.934.118 1.123a.894.894 0 00.361.41c.163.09.456.136.88.136V14H.722v-.352c.436 0 .729-.042.879-.127a.847.847 0 00.351-.42c.091-.195.137-.57.137-1.123V8.532c0-.97-.03-1.598-.088-1.885-.046-.208-.117-.351-.215-.43a.59.59 0 00-.4-.126c-.183 0-.404.049-.664.146l-.137-.351L3.28 4.79h.43z"
              ></Path>
            </Svg>
          </View>
        </View>

        {/* MESSAGE */}
        <Text style={styles.messagecontainer1}>
          <Text style={styles.messagetext1}>Please </Text>
          <Text style={styles.messagetextbold1}>check out </Text>
          <Text style={styles.messagetext1}>in advance at your </Text>
          <Text style={styles.messagetextbold1}>last location.</Text>
        </Text>

        {/* MESSAGE TIME */}
        <Text style={styles.messagetime1}>3 min ago</Text>
      </View>
    </View>
  );
};

export default Notification_Info;

const styles = StyleSheet.create({
  roundedsquare: {
    backgroundColor: "#448693",
    width: 56,
    height: 56,
    borderRadius: 20,
  },
  circle: {
    backgroundColor: "white",
    width: 38,
    height: 38,
    borderRadius: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  messagecontainer1: {
    width: 200,
    marginLeft: 7,
    // backgroundColor: "yellow",
  },
  messagetext1: {
    fontSize: 16,
  },
  messagetextbold1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  messagetime1: {
    fontSize: 9,
    color: "#817575",
    position: "absolute",
    right: 0,
    bottom: "50%",
    transform: [{ translateY: -15 }],
  },

  item_row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderColor: "rgba(161, 161, 161, 0.3)",
    // backgroundColor: "green",
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Svg, Path, Circle, G, Mask, Defs, ClipPath } from "react-native-svg";

const Notification_Check = () => {
  return (
    <View>
      <View style={styles.item_row}>
        {/* CHECK ICON */}
        <View style={[styles.roundedsquare, styles.center]}>
          <View style={[styles.circle, styles.center]}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              viewBox="0 0 26 26"
            >
              <G clipPath="url(#clip0_23_166)">
                <Mask
                  id="mask0_23_166"
                  style={{ maskType: "luminance" }}
                  width="26"
                  height="26"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <Path fill="#fff" d="M26 0H0v26h26V0z"></Path>
                </Mask>
                <G mask="url(#mask0_23_166)">
                  <Path
                    fill="#42AA93"
                    d="M9.75 17.518L5.232 13l-1.538 1.528 6.056 6.055 13-13-1.528-1.527L9.75 17.518z"
                  ></Path>
                </G>
              </G>
              <Defs>
                <ClipPath id="clip0_23_166">
                  <Path fill="#fff" d="M0 0H26V26H0z"></Path>
                </ClipPath>
              </Defs>
            </Svg>
          </View>
        </View>

        {/* MESSAGE */}
        <Text style={styles.messagecontainer1}>
          <Text style={styles.messagetext1}>You have </Text>
          <Text style={styles.messagetextbold1}>checked out </Text>
          <Text style={styles.messagetext1}>from </Text>
          <Text style={styles.messagetextbold1}>Danau Linow.</Text>
        </Text>

        {/* MESSAGE TIME */}
        <Text style={styles.messagetime1}>3 min ago</Text>
      </View>
    </View>
  );
};

export default Notification_Check;

const styles = StyleSheet.create({
  roundedsquare: {
    backgroundColor: "#42AA93",
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
  },

  item_row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderColor: "rgba(161, 161, 161, 0.3)",
  },
});

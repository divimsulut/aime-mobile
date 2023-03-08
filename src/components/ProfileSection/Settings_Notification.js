import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Svg, Path, Circle, G, Mask, Defs, ClipPath } from "react-native-svg";

import { ColorB_White, ColorC, ColorAA } from "../../constant";

const Settings_Notification = () => {
  return (
    <View style={styles.SettingsContainer}>
      <View style={styles.KeepItMiddle1}>
        <View style={styles.KeepItMiddle1}>
          <View //ICON NOTIFICATION
            style={{
              backgroundColor: "#223C4E",
              borderRadius: 50,
              width: 60,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="none"
              viewBox="0 0 45 45"
            >
              <Mask
                id="mask0_360_1470"
                style={{ maskType: "luminance" }}
                width="45"
                height="45"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <Path fill="#fff" d="M45 0H0v45h45V0z"></Path>
              </Mask>
              <G mask="url(#mask0_360_1470)">
                <Path
                  fill="#E6E6E6"
                  d="M36.169 32.419L33.75 30v-9.375c0-5.756-3.075-10.575-8.437-11.85V7.5A2.809 2.809 0 0022.5 4.687 2.809 2.809 0 0019.688 7.5v1.275c-5.382 1.275-8.438 6.075-8.438 11.85V30l-2.419 2.419c-1.181 1.181-.356 3.206 1.313 3.206h24.694c1.687 0 2.512-2.025 1.33-3.206zM30 31.875H15v-11.25c0-4.65 2.831-8.438 7.5-8.438 4.669 0 7.5 3.788 7.5 8.438v11.25zm-7.5 9.375a3.761 3.761 0 003.75-3.75h-7.5a3.749 3.749 0 003.75 3.75z"
                ></Path>
              </G>
            </Svg>
          </View>
          <Text style={styles.SettingsItemText}>Notification</Text>
        </View>
        <View>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="20"
            fill="none"
            viewBox="0 0 13 20"
          >
            <Path
              fill="#E6E6E6"
              d="M.317 17.65L7.95 10 .317 2.35 2.667 0l10 10-10 10-2.35-2.35z"
            ></Path>
          </Svg>
        </View>
      </View>
    </View>
  );
};

export default Settings_Notification;

const styles = StyleSheet.create({
  SettingsContainer: {
    backgroundColor: "#29495F",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 20,
    borderRadius: 25,
  },

  SettingsItemText: {
    color: ColorB_White,
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 20,
  },

  KeepItMiddle1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: 'red',
  },
});

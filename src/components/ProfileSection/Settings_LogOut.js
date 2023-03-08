import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Svg, Path, Circle, G, Mask, Defs, ClipPath } from "react-native-svg";

import { ColorB_White, ColorC, ColorAA } from "../../constant";

const Settings_LogOut = () => {
  return (
    <View style={styles.SettingsContainer}>
      <View style={styles.KeepItMiddle1}>
        <View style={styles.KeepItMiddle1}>
          <View //ICON About
            style={{
              backgroundColor: "#8F1E2F",
              borderRadius: 50,
              width: 60,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="none"
              viewBox="0 0 35 35"
            >
              <Mask
                id="mask0_360_1488"
                style={{ maskType: "luminance" }}
                width="35"
                height="35"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <Path fill="#fff" d="M35 0H0v35h35V0z"></Path>
              </Mask>
              <G fill="#E6E6E6" mask="url(#mask0_360_1488)">
                <Path d="M7.292 7.292h8.75c.802 0 1.458-.657 1.458-1.459s-.656-1.458-1.458-1.458h-8.75a2.925 2.925 0 00-2.917 2.917v20.416a2.925 2.925 0 002.917 2.917h8.75c.802 0 1.458-.656 1.458-1.458 0-.802-.656-1.459-1.458-1.459h-8.75V7.292z"></Path>
                <Path d="M30.115 16.99l-4.07-4.07c-.466-.466-1.253-.145-1.253.511v2.61H14.583c-.802 0-1.458.657-1.458 1.46 0 .801.656 1.457 1.458 1.457h10.209v2.61c0 .657.787.978 1.24.511L30.1 18.01a.718.718 0 00.015-1.02z"></Path>
              </G>
            </Svg>
          </View>
          <Text style={styles.SettingsItemText}>Log Out</Text>
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

export default Settings_LogOut;

const styles = StyleSheet.create({
  SettingsContainer: {
    backgroundColor: "#AC253A",
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

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Svg, Path, Circle, G, Mask, Defs, ClipPath } from "react-native-svg";

import { ColorB_White, ColorC, ColorAA } from "../../constant";

const Settings_About = () => {
  return (
    <View style={styles.SettingsContainer}>
      <View style={styles.KeepItMiddle1}>
        <View style={styles.KeepItMiddle1}>
          <View //ICON PP
            style={{
              backgroundColor: "#3D9B87",
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
              <G clipPath="url(#clip0_360_1475)">
                <Mask
                  id="mask0_360_1475"
                  style={{ maskType: "luminance" }}
                  width="45"
                  height="45"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <Path fill="#fff" d="M45 0H0v45h45V0z"></Path>
                </Mask>
                <G mask="url(#mask0_360_1475)">
                  <Path
                    fill="#E6E6E6"
                    d="M7.856 8.381a3.766 3.766 0 00-2.231 3.431v8.813c0 10.406 7.2 20.138 16.875 22.5 9.675-2.362 16.875-12.094 16.875-22.5v-8.813a3.766 3.766 0 00-2.231-3.43L24.019 2.55a3.728 3.728 0 00-3.038 0L7.856 8.381zM22.5 13.125A1.88 1.88 0 0124.375 15a1.88 1.88 0 01-1.875 1.875A1.88 1.88 0 0120.625 15a1.88 1.88 0 011.875-1.875zm0 7.5a1.88 1.88 0 011.875 1.875V30a1.88 1.88 0 01-1.875 1.875A1.88 1.88 0 0120.625 30v-7.5a1.88 1.88 0 011.875-1.875z"
                  ></Path>
                </G>
              </G>
              <Defs>
                <ClipPath id="clip0_360_1475">
                  <Path fill="#fff" d="M0 0H45V45H0z"></Path>
                </ClipPath>
              </Defs>
            </Svg>
          </View>
          <Text style={styles.SettingsItemText}>About Application</Text>
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

export default Settings_About;

const styles = StyleSheet.create({
  SettingsContainer: {
    backgroundColor: "#42AA93",
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

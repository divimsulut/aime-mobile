import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Svg, Path, Circle, G, Mask, Defs, ClipPath } from "react-native-svg";

import { ColorB_White, ColorC, ColorAA } from "../../constant";

const Settings_PP = () => {
  return (
    <View style={styles.SettingsContainer}>
      <View style={styles.KeepItMiddle1}>
        <View style={styles.KeepItMiddle1}>
          <View //ICON About
            style={{
              backgroundColor: "#9D7B3B",
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
              <G clipPath="url(#clip0_77_162)">
                <Mask
                  id="mask0_77_162"
                  style={{ maskType: "luminance" }}
                  width="45"
                  height="45"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <Path fill="#fff" d="M45 0H0v45h45V0z"></Path>
                </Mask>
                <G mask="url(#mask0_77_162)">
                  <Path
                    fill="#E6E6E6"
                    d="M22.5 3.75c-10.35 0-18.75 8.4-18.75 18.75s8.4 18.75 18.75 18.75 18.75-8.4 18.75-18.75S32.85 3.75 22.5 3.75zm0 28.125A1.88 1.88 0 0120.625 30v-7.5a1.88 1.88 0 011.875-1.875 1.88 1.88 0 011.875 1.875V30a1.88 1.88 0 01-1.875 1.875zm1.875-15h-3.75v-3.75h3.75v3.75z"
                  ></Path>
                </G>
              </G>
              <Defs>
                <ClipPath id="clip0_77_162">
                  <Path fill="#fff" d="M0 0H45V45H0z"></Path>
                </ClipPath>
              </Defs>
            </Svg>
          </View>
          <Text style={styles.SettingsItemText}>Privacy Policy</Text>
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

export default Settings_PP;

const styles = StyleSheet.create({
  SettingsContainer: {
    backgroundColor: "#BE9548",
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

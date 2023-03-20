import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IconArrowLeftBlack } from "../assets";

const EditProfileHeader = ({
  titleSize = 20,
  borderBottomWidth = true,
  title,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomWidth: borderBottomWidth ? 2 : 0,
          borderBottomColor: borderBottomWidth
            ? "rgba(56, 55, 55, 0.31)"
            : "transparent",
        },
      ]}
    >
      <TouchableOpacity>
        <IconArrowLeftBlack />
      </TouchableOpacity>
      <Text style={[styles.textTitle, { fontSize: titleSize }]}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.textDone}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    width: "100%",
    height: 100,
    position: "absolute",
    zIndex: 1,

    paddingTop: 40,
    paddingHorizontal: 20,

    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  mainSection: {},
  textTitle: {
    fontFamily: "Poppins-SemiBold",
    color: "#1E1E1E",
  },
  textDone: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#007DE4",
  },
});

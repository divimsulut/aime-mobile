import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { horizontalScale } from "../../constant";

const ActivityLog_Activity_CheckIn = ({ VarLocation, VarTime }) => {
  return (
    <View>
      <View style={[styles.item.container, styles.item_row]}>
        <View style={styles.item.sidecolor}></View>
        <View style={styles.item.textgroup}>
          <Text style={styles.item.location}>{VarLocation}</Text>
          <Text style={styles.item.desc}>Checked in at {VarTime}.</Text>
        </View>
      </View>
    </View>
  );
};

export default ActivityLog_Activity_CheckIn;

const styles = StyleSheet.create({
  item: {
    sidecolor: {
      backgroundColor: "#08C755",
      width: horizontalScale(10),
      height: 60,
    },
    container: {
      backgroundColor: "#D2D2D2",
      borderRadius: 10,

      marginVertical: 4,

      overflow: "hidden",
    },
    textgroup: {
      paddingLeft: 15,
    },
    location: {
      color: "black",
      fontSize: 15,
      fontFamily: "Poppins-SemiBold",
    },
    desc: {
      color: "black",
      fontSize: 12,
      fontFamily: "Poppins-Regular",
    },
  },

  item_row: {
    flexDirection: "row",
    alignItems: "center",
    spacebetween: {
      justifyContent: "space-between",
    },
    center: {
      justifyContent: "center",
    },
  },
});

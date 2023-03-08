import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ActivityLog_Day = ({ VarDayName, VarDayNumber }) => {
  return (
    <View style={styles.DayGroup}>
      <Text style={styles.DayName}>{VarDayName}</Text>
      <Text style={styles.DayNumber}>{VarDayNumber}</Text>
    </View>
  );
};

export default ActivityLog_Day;

const styles = StyleSheet.create({
  DayGroup: {
    width: 40,
  },
  DayName: {
    color: "#606060",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    textAlign: "right",
  },

  DayNumber: {
    color: "#1E1E1E",
    fontSize: 22,
    fontFamily: "Poppins-SemiBold",
    textAlign: "right",
  },
});

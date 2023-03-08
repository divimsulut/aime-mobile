import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { Header } from "../../components";
import Notification_Check from "../../components/NotificationSection/Notification_Check";
import Notification_Info from "../../components/NotificationSection/Notification_Info";

const seperator = 2;
const seperator_color = "rgba(161, 161, 161, 0.3)";

const Notification = ({ navigation }) => {
  return (
    <View>
      <Header
        label="Notifications"
        navigation={navigation}
        color="black"
        backgroundColor="transparent"
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.H2}>Today</Text>
          <Notification_Check />
          <View style={styles.Line1} />
          <Notification_Check />
          <View style={styles.Line1} />
          <Notification_Check />
          <View style={styles.Line1} />
          <Notification_Check />
          <View style={styles.Line1} />
          <Notification_Check />

          <Text style={styles.H2}>2 Days Ago</Text>
          <Notification_Info />
          <View style={styles.Line1} />
          <Notification_Info />
          <View style={styles.Line1} />
          <Notification_Info />
          <View style={styles.Line1} />
          <Notification_Info />
          <View style={styles.Line1} />
          <Notification_Info />
        </View>
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // fontFamily: 'Poppins',
    // fontWeight: 100,
  },
  content: {
    padding: 15,
    marginTop: 40,
    paddingBottom: 50,
  },
  H2: {
    fontSize: 18,
    color: "black",
    marginTop: 30,
    marginBottom: 20,
    fontWeight: "bold",
    // marginLeft: 10,
  },
  Line1: {
    borderBottomColor: seperator_color,
    borderBottomWidth: seperator,
    marginTop: 20,
    marginBottom: 20,
  },
});

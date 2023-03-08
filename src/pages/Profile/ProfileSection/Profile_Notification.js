import { StyleSheet, Text, View, Switch } from "react-native";
import React, { useState } from "react";

import { Header } from "../../../components";
const seperator = 2;
const seperator_color = "rgba(161, 161, 161, 0.3)";

const Profile_Notification = ({ navigation }) => {
  //   const [isEnabled, setIsEnabled] = useState(false);
  //   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  //Push Notification Section
  const [PN_News_isEnabled, PN_News_setIsEnabled] = useState(false);
  const PN_News_toggleSwitch = () =>
    PN_News_setIsEnabled((previousState) => !previousState);

  const [PN_Status_isEnabled, PN_Status_setIsEnabled] = useState(false);
  const PN_Status_toggleSwitch = () =>
    PN_Status_setIsEnabled((previousState) => !previousState);

  const [PN_YourLocation_isEnabled, PN_YourLocation_setIsEnabled] =
    useState(false);
  const PN_YourLocation_toggleSwitch = () =>
    PN_YourLocation_setIsEnabled((previousState) => !previousState);

  //E-mail Section
  const [Email_Status_isEnabled, Email_Status_setIsEnabled] = useState(false);
  const Email_Status_toggleSwitch = () =>
    Email_Status_setIsEnabled((previousState) => !previousState);

  const [Email_Reminder_isEnabled, Email_Reminder_setIsEnabled] =
    useState(false);
  const Email_Reminder_toggleSwitch = () =>
    Email_Reminder_setIsEnabled((previousState) => !previousState);

  return (
    <View>
      {/* HEADER */}
      {/* <Text style={styles.Title}>More</Text> */}

      <Header
        label="Notification"
        navigation={navigation}
        color="black"
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.Paragraph}>
            Select the kinds of notifcations you get about your activities and
            recommendations.
          </Text>

          <Text style={styles.H2}>Push Notification</Text>
          <View style={styles.Item}>
            <Text style={styles.ItemText}>News</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#1573FE" }}
              thumbColor={PN_News_isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={PN_News_toggleSwitch}
              value={PN_News_isEnabled}
              style={styles.Switch_Notification}
            />
          </View>
          <View style={styles.Item}>
            <Text style={styles.ItemText}>Status</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#1573FE" }}
              thumbColor={PN_Status_isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={PN_Status_toggleSwitch}
              value={PN_Status_isEnabled}
              style={styles.Switch_Notification}
            />
          </View>
          <View style={styles.Item}>
            <Text style={styles.ItemText}>Your Location</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#1573FE" }}
              thumbColor={PN_YourLocation_isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={PN_YourLocation_toggleSwitch}
              value={PN_YourLocation_isEnabled}
              style={styles.Switch_Notification}
            />
          </View>

          <View style={styles.Line1} />

          <Text style={styles.H2}>E-mail</Text>
          <View style={styles.Item}>
            <Text style={styles.ItemText}>Status</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#1573FE" }}
              thumbColor={Email_Status_isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={Email_Status_toggleSwitch}
              value={Email_Status_isEnabled}
              style={styles.Switch_Notification}
            />
          </View>
          <View style={styles.Item}>
            <Text style={styles.ItemText}>Reminder</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#1573FE" }}
              thumbColor={Email_Reminder_isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={Email_Reminder_toggleSwitch}
              value={Email_Reminder_isEnabled}
              style={styles.Switch_Notification}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile_Notification;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // fontFamily: 'Poppins',
    // fontWeight: 100,
  },
  content: {
    padding: 15,
    marginTop: 40,
  },
  Line1: {
    borderBottomColor: seperator_color,
    borderBottomWidth: seperator,
    paddingTop: 20,
  },
  H2: {
    fontSize: 18,
    color: "black",
    marginTop: 30,
    marginBottom: 10,
    fontWeight: "bold",
    // marginLeft: 10,
  },
  Paragraph: {
    fontSize: 15,
    color: "#606060",
  },

  Item: {
    // backgroundColor: 'red',

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ItemText: {
    fontSize: 15,
    color: "#383737",
  },

  Switch_Notification: {
    marginTop: 5,
  },
});

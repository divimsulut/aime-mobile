import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Header } from "../../../components";

const Profile_AboutApp = ({ navigation }) => {
  return (
    <View>
      <Header
        label="About Application"
        navigation={navigation}
        color="black"
        backgroundColor="transparent"
      />

      <View style={styles.container}>
        <View style={styles.content}>
          <Text>PT. Klabat Tekno Perkasa</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile_AboutApp;

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
});

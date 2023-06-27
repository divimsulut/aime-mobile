import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Header } from "../../../components";
import { moderateScale } from "../../../constant";

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
          <Text style={{ fontSize: moderateScale(18) }}>
            AIMe, which stands for "Aplikasi Imigrasi Melindungi", if in English
            becomes "Immigration Protection App", which works to monitor the
            location activity of the foreigners who are in Indonesia, not by the
            gps location, but based on the QR code that were scanned by
            foreigners at the hotel, malls, public buildings and all the public
            areas in Indonesia. If you are in need to go to the nearest
            Immigration office, we'll show you the nearest by locating your
            accurate location that the data will only stays on your device. You
            can also follow the latest news provided by the Immigration
            center. Thank you.
          </Text>
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

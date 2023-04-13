import { StyleSheet, Text, View, Image } from "react-native";
import { React, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ImageLogoMigrasi, IconAime } from "../../assets";
import { horizontalScale, verticalScale } from "../../constant";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Welcome");
    }, 3000);
  }, [navigation]);

  return (
    <LinearGradient colors={["#12365D", "#021726"]} style={{ height: "100%" }}>
      <View style={styles.content}>
        <Image source={ImageLogoMigrasi} style={styles.logo} />
        <Text style={styles.textKantor}>Kantor Imigrasi Sulawesi Utara</Text>
        <IconAime style={{ marginTop: verticalScale(128) }} />
        <Text style={styles.textAIME}>AIME</Text>
        <Text style={styles.textAIMELong}>Aplikasi Imigrasi Melindungi</Text>
        <Text style={styles.textVersion}>Version 1.0</Text>
      </View>
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
  },
  logo: {
    width: horizontalScale(72),
    height: verticalScale(59),
    marginTop: verticalScale(165),
  },
  textKantor: {
    marginTop: verticalScale(11),
    color: "white",
    fontSize: 10,
    fontFamily: "Poppins-Regular",
  },
  textAIME: {
    color: "white",
    fontSize: 50,
    fontFamily: "Poppins-Bold",
  },
  textAIMELong: {
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins-Light",
  },
  textVersion: {
    marginTop: verticalScale(250),
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins-Light",
  },
});

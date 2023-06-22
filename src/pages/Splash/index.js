import { StyleSheet, Text, View, Image } from "react-native";
import { React, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageLogoMigrasi,
  IconAime,
  ImageImigrasiMelindungi,
} from "../../assets";
import { horizontalScale, verticalScale } from "../../constant";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Welcome");
    }, 3000);
  }, [navigation]);

  return (
    <LinearGradient
      colors={["#12365D", "#021726"]}
      style={{ height: "100%", justifyContent: "center" }}
    >
      <View style={styles.content}>
        <Image source={ImageLogoMigrasi} style={styles.logo} />
        <Text
          style={styles.textKantor}
        >{`Divisi Keimigrasian\nKanwil Kemenkumham Sulawesi Utara`}</Text>
        <Image source={ImageImigrasiMelindungi} style={styles.imageImigrasi} />
        <Text style={styles.textAIME}>AIMe</Text>
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
    // marginTop: verticalScale(165),
    objectFit: "contain",
  },
  imageImigrasi: {
    marginTop: verticalScale(128),
    height: verticalScale(150),
    objectFit: "contain",
  },
  textKantor: {
    marginTop: verticalScale(11),
    color: "white",
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
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

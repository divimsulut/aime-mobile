import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { Header } from "../../components";
import { ImageLandscape3 } from "../../assets";
import { verticalScale, horizontalScale, moderateScale } from "../../constant";
import Button1Direction from "./components/Button1Direction";
import Button2Call from "./components/Button2Call";
import Button3Website from "./components/Button3Website";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const OfficeDetail = ({ navigation }) => {
  // opacity
  const opacity = React.useRef(new Animated.Value(1)).current;

  // y position
  const yPosition = React.useRef(new Animated.Value(260)).current;

  // variables
  const snapPoints = React.useMemo(() => ["20%", "88%"], []);

  // handleAnimation
  const handleAnimation = (index) => {
    if (index === 1) {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.25,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.75,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
      Animated.sequence([
        Animated.timing(yPosition, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(yPosition, {
          toValue: 55.5,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(yPosition, {
          toValue: 111,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(yPosition, {
          toValue: 240,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.75,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.25,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
      Animated.sequence([
        Animated.timing(yPosition, {
          toValue: 222,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(yPosition, {
          toValue: 111,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(yPosition, {
          toValue: 55.5,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(yPosition, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  // Action buttons
  const [VarPhoneNumber, setVarPhoneNumber] = useState("(+62)811-43260010");
  const [VarWebsite, setVarWebsite] = useState("https://manado.imigrasi.go.id");
  const [VarAddress, setVarAdrress] = useState(
    "Jl. 17 Agustus, Manado, Teling Atas, Kec. Wanea, Kota Manado, Sulawesi Utara"
  );

  const openMapsApp = (address) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      address
    )}`;
    Linking.openURL(url);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Text>NearbyOffice</Text>
      <BottomSheet
        index={0}
        snapPoints={snapPoints}
        onChange={handleAnimation}
        backgroundStyle={styles.bottomSheetContainer}
        handleIndicatorStyle={{ backgroundColor: "white" }}
      >
        <Animated.Image
          source={ImageLandscape3}
          style={[styles.imageContainer, { opacity }]}
        />
        <Animated.View
          style={{
            flex: 1,
            paddingHorizontal: horizontalScale(18),
            transform: [{ translateY: yPosition }],
          }}
        >
          <Text style={styles.textKantor}>
            Kantor Imigrasi Kelas 1 - Manado
          </Text>
          <Text style={styles.textKantorTipe}>Government Complex</Text>

          {/* Action Buttons */}
          <View
            style={{
              marginVertical: verticalScale(10),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => openMapsApp(VarAddress)}>
              <Button1Direction />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Linking.openURL(`tel:${VarPhoneNumber}`)}
            >
              <Button2Call />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(`${VarWebsite}`)}>
              <Button3Website />
            </TouchableOpacity>
          </View>

          {/* Helper View for Scrollable */}
          <View
            style={{
              borderTopEndRadius: 10,
              borderTopStartRadius: 10,
              overflow: "hidden",
              flex: 1,
            }}
          >
            <BottomSheetScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.textDetail}>Details</Text>
              {/* Hours information  */}
              <View style={styles.hoursContainer}>
                <Text style={styles.textLabel}>Hours</Text>
                <Text style={styles.textItem}>9 AM - 10 PM</Text>
              </View>
              {/* Hours information  */}

              <View style={styles.secondContainer}>
                {/* Pohone Container  */}
                <View style={styles.phoneContainer}>
                  <Text style={styles.textLabel}>Phone</Text>
                  <Text style={styles.textItem}>+62 811 43260010</Text>
                </View>
                {/* Pohone Container  */}

                {/* Website Container  */}
                <View style={styles.webContainer}>
                  <Text style={styles.textLabel}>Website</Text>
                  <Text style={styles.textItem}>manado.imigrasi.go.id</Text>
                </View>
                {/* Website Container  */}

                {/* Address Container */}
                <View style={{ marginTop: verticalScale(20) }}>
                  <Text style={styles.textLabel}>Address</Text>
                  <Text style={styles.textItemAddress}>
                    l. 17 Agustus, Manado, Teling Atas, Kec. Wanea, Kota Manado,
                    Sulawesi Utara
                  </Text>
                </View>
                {/* Address Container  */}
              </View>
              <View style={{ height: 260 }} />
            </BottomSheetScrollView>
          </View>
        </Animated.View>
      </BottomSheet>
    </View>
  );
};

export default OfficeDetail;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: "#062035",
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    paddingBottom: 20,
  },
  imageContainer: {
    width: "100%",
    height: 222,
    position: "absolute",
    zIndex: 0,
  },
  sliderIndicator: {
    width: horizontalScale(54),
    height: verticalScale(5),
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: verticalScale(10),
  },
  textKantor: {
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(20),
    color: "white",
  },
  textKantorTipe: {
    fontFamily: "Poppins-Light",
    fontSize: moderateScale(15),
    color: "white",
  },
  textDetail: {
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(15),
    color: "white",
    marginTop: 15,
  },
  hoursContainer: {
    backgroundColor: "#213545",
    height: verticalScale(72),
    width: "100%",
    paddingLeft: horizontalScale(20),
    marginTop: verticalScale(25),
    borderRadius: moderateScale(15),
    justifyContent: "center",
  },
  textLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(15),
    color: "#A5A5A5",
  },
  textItem: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(18),
    color: "#E5CF00",
  },
  secondContainer: {
    backgroundColor: "#213545",
    width: "100%",
    paddingHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
    borderRadius: moderateScale(15),
    paddingVertical: verticalScale(15),
  },
  phoneContainer: {
    borderBottomWidth: 1,
    borderColor: "#666666",
    paddingBottom: verticalScale(10),
  },
  webContainer: {
    borderBottomWidth: 1,
    borderColor: "#666666",
    paddingBottom: verticalScale(25),
    marginTop: verticalScale(20),
  },
  textItemAddress: {
    fontFamily: "Poppins-Medium",
    fontSize: moderateScale(18),
    color: "white",
  },
});

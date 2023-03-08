import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  Pressable,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { Component, useState } from "react";
import { Header } from "../../components";
import { ImageLandscape3 } from "../../assets";
import { verticalScale, horizontalScale, moderateScale } from "../../constant";
import { Shadow } from "react-native-shadow-2";
import ButtonNearbyOffice from "./components/ButtonNearbyOffice";
import Button1Direction from "./components/Button1Direction";
import Button2Call from "./components/Button2Call";
import Button3Website from "./components/Button3Website";
import Button4More from "./components/Button4More";

const OfficeDetail = ({ navigation }) => {
  const [modalVisibleCall, setModalVisibleCall] = useState(false);
  const [modalVisibleMore, setModalVisibleMore] = useState(false);
  const [VarPhoneNumber, setVarPhoneNumber] = useState("(+62)811-43260010");
  const [VarWebsite, setVarWebsite] = useState("https://manado.imigrasi.go.id");
  // const VarAddress = '1600 Amphitheatre Parkway, Mountain View, CA';
  const VarAddress =
    "Jl. 17 Agustus, Manado, Teling Atas, Kec. Wanea, Kota Manado, Sulawesi Utara";
  const openMapsApp = (address) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      address
    )}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.page}>
      <Header label={"Our Office Detail"} navigation={navigation} />
      {/* ---------------------------MAIN CONTAINER------------------------------ */}

      <ScrollView style={{ zIndex: 1 }}>
        <Image
          source={ImageLandscape3}
          style={{
            marginTop: verticalScale(120),
            height: verticalScale(222),
            width: "100%",
            borderRadius: moderateScale(15),
          }}
        />

        <Shadow
          style={{ width: "100%" }}
          startColor="#062035"
          offset={[0, -15]}
          distance={32}
        >
          <View
            style={{
              marginTop: verticalScale(-10),
              paddingHorizontal: horizontalScale(18),
              backgroundColor: "#062035",
              paddingTop: verticalScale(20),
              marginBottom: verticalScale(20),
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: moderateScale(20),
                color: "white",
              }}
            >
              Kantor Imigrasi Kelas 1 - Mando
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Light",
                fontSize: moderateScale(15),
                color: "white",
              }}
            >
              Government Complex
            </Text>

            {/* <View style={{ marginVertical: verticalScale(20) }}>
              <ButtonNearbyOffice />
            </View> */}

            {/* Action Buttons */}
            <View
              style={{
                marginVertical: verticalScale(20),
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity onPress={() => openMapsApp(VarAddress)}>
                <Button1Direction />
              </TouchableOpacity>

              {/* <TouchableOpacity onPress={() => setModalVisibleCall(true)}> */}
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:${VarPhoneNumber}`)}
              >
                <Button2Call />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => Linking.openURL(`${VarWebsite}`)}
              >
                <Button3Website />
              </TouchableOpacity>

              {/* <TouchableOpacity onPress={() => setModalVisibleMore(true)}>
                <Button4More />
              </TouchableOpacity> */}
            </View>

            {/* MODAL CALL */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisibleCall}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisibleCall(!modalVisibleCall);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      // navigation.navigate("SignIn");
                      setModalVisibleCall(!modalVisibleCall);
                      Linking.openURL(`tel:${VarPhoneNumber}`);
                    }}
                  >
                    {/* <Text style={styles.textStyle}>Call (+62)811-4326010</Text> */}
                    <Text style={styles.textStyle}>
                      {"Call  "}
                      {VarPhoneNumber}
                    </Text>
                  </Pressable>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      // navigation.navigate("SignIn");
                      setModalVisibleCall(!modalVisibleCall);
                    }}
                  >
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            {/* MODAL MORE*/}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisibleMore}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisibleMore(!modalVisibleMore);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      // navigation.navigate("SignIn");
                      setModalVisibleMore(!modalVisibleMore);
                    }}
                  >
                    {/* <Text style={styles.textStyle}>Call (+62)811-4326010</Text> */}
                    <Text style={styles.textStyle}>Add to Guides</Text>
                  </Pressable>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      // navigation.navigate("SignIn");
                      setModalVisibleMore(!modalVisibleMore);
                    }}
                  >
                    <Text style={styles.textStyle}>Add to Favorites</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: moderateScale(15),
                color: "white",
              }}
            >
              Details
            </Text>
            {/* Hours information */}
            <View
              style={{
                backgroundColor: "#213545",
                height: verticalScale(72),
                width: "100%",
                paddingLeft: horizontalScale(20),
                marginTop: verticalScale(25),
                borderRadius: moderateScale(15),
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: moderateScale(15),
                  color: "#A5A5A5",
                }}
              >
                Hours
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: moderateScale(18),
                  color: "#E5CF00",
                }}
              >
                9 AM - 10 PM
              </Text>
            </View>
            {/* Hours information */}
            <View
              style={{
                backgroundColor: "#213545",
                height: verticalScale(347),
                width: "100%",
                paddingHorizontal: horizontalScale(20),
                marginTop: verticalScale(20),
                borderRadius: moderateScale(15),
                paddingTop: verticalScale(15),
              }}
            >
              {/* Pohone Container */}
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#666666",
                  paddingBottom: verticalScale(10),
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: moderateScale(15),
                    color: "#A5A5A5",
                  }}
                >
                  Phone
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: moderateScale(18),
                    color: "#E5CF00",
                  }}
                >
                  {VarPhoneNumber}
                </Text>
              </View>
              {/* Pohone Container */}

              {/* Website Container */}
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#666666",
                  paddingBottom: verticalScale(25),
                  marginTop: verticalScale(20),
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: moderateScale(15),
                    color: "#A5A5A5",
                  }}
                >
                  Website
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: moderateScale(18),
                    color: "#E5CF00",
                  }}
                >
                  {/* manado.imigrasi.go.id */}
                  {VarWebsite}
                </Text>
              </View>
              {/* Website Container */}

              {/* Address Container */}
              <View style={{ marginTop: verticalScale(20) }}>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: moderateScale(15),
                    color: "#A5A5A5",
                  }}
                >
                  Address
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: moderateScale(18),
                    color: "white",
                  }}
                >
                  {/* l. 17 Agustus, Manado, Teling Atas, Kec. Wanea, Kota Manado,
                  Sulawesi Utara */}
                  {VarAddress}
                </Text>
              </View>
              {/* Address Container */}
            </View>
          </View>
        </Shadow>
      </ScrollView>

      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundColor: "red",
        }}
      ></View>
      {/* ---------------------------MAIN CONTAINER------------------------------ */}
    </View>
  );
};

export default OfficeDetail;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#062035",
    flex: 1,
  },

  //LOG OUT MODAL
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    // marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalView: {
    // margin: 0,
    // flex: 1,
    justifyContent: "flex-end",
    // backgroundColor: "#E5E5E5",
    borderRadius: 30,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  button: {
    borderRadius: 15,
    padding: 10,
    marginTop: 15,
    elevation: 2,
    height: 40,
    // width: 250,
    width: "100%",
  },

  buttonOpen: {
    backgroundColor: "#213545",
  },
  buttonClose: {
    backgroundColor: "#213545",
  },
  textStyle: {
    color: "white",
    // fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});

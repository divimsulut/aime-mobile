import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import React, { Component, useState } from "react";
import { Svg, Path, Circle, G, Mask, Defs, ClipPath } from "react-native-svg";

import { ColorB_White, ColorC, ColorAA } from "../../constant";
import { ImagePeople } from "../../assets";

import {
  Header,
  Settings_About,
  Settings_LogOut,
  Settings_Notification,
  Settings_PP,
} from "../../components";
import { signOut } from "../../config";

// import Svg from 'react-native-svg/lib/typescript/ReactNativeSVG';

const AIME_SettingsScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      {/* HEADER */}
      {/* <Text style={styles.Title}>More</Text> */}

      <Header
        label="More"
        navigation={navigation}
        color="black"
        backgroundColor="transparent"
        backBtn={false}
      />
      <ScrollView style={styles.container}>
        {/* PROFILE CARD */}
        <View style={styles.ProfileCardParent}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={ImagePeople}
                style={{ height: 69, width: 69, borderRadius: 100 }}
              />
              <Text
                style={{
                  color: ColorB_White,
                  fontSize: 20,
                  fontWeight: "bold",
                  marginLeft: 15,

                  fontFamily: "Poppins-Light",
                }}
              >
                Yaki Kato
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfile")}
            >
              <View>
                <Svg
                  width={50}
                  height={50}
                  xmlns="http://www.w3.org/2000/svg"
                  //Atur Scalling
                  viewBox="0 0 46 46"
                  fill="none"
                >
                  <Circle cx="23" cy="23" r="23" fill="#011F34"></Circle>
                  <G clipPath="url(#clip0_578_717)">
                    <Mask
                      id="mask0_578_717"
                      style={{ maskType: "luminance" }}
                      width="50"
                      height="50"
                      x="20"
                      y="20"
                      maskUnits="userSpaceOnUse"
                    >
                      <Path fill="#fff" d="M35 11H11v24h24V11z"></Path>
                    </Mask>
                    <G Mask="url(#mask0_578_717)">
                      <Path
                        fill="#E5CF00"
                        d="M14 28.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15l10.92-10.91-3.75-3.75L14.15 28.1c-.1.1-.15.22-.15.36zm17.71-10.42a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      ></Path>
                    </G>
                  </G>
                  <Defs>
                    <ClipPath id="clip0_578_717">
                      <Path
                        fill="#fff"
                        d="M0 0H24V24H0z"
                        //Pensil
                        transform="translate(10 11)"
                      ></Path>
                    </ClipPath>
                  </Defs>
                </Svg>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.ProfileCardDetail1}>+1 (800) 469-9269</Text>
          <Text style={styles.ProfileCardDetail1}>yakikato232@gmail.com</Text>
        </View>

        {/* SETTINGS ITEMS  */}
        <View style={styles.content}>
          <Text style={styles.H1}>Settings</Text>
          <View style={styles.SettingsItem}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Profile_Notification")}
            >
              <Settings_Notification />
            </TouchableOpacity>
          </View>
          <View style={styles.SettingsItem}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile_PP")}>
              <Settings_PP />
            </TouchableOpacity>
          </View>
          <View style={styles.SettingsItem}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Profile_AboutApp")}
            >
              <Settings_About />
            </TouchableOpacity>
          </View>
          <View style={styles.SettingsItem}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Settings_LogOut />
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Are you sure want to log out?
                  </Text>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      signOut(navigation);
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>yeah, log out please!</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.button.x, styles.buttonClose.x]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle.x}>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AIME_SettingsScreen;

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    paddingTop: 90,
    // fontFamily: 'Poppins',
    // fontWeight: 100,
    backgroundColor: "#E6E6E",
    // backgroundColor: 'red',
  },
  content: {
    padding: 20,
    // marginTop: 40,
  },

  Title: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 30,
  },
  H1: {
    fontSize: 23,
    color: "black",
    fontWeight: "bold",
    paddingLeft: 10,
  },
  // Garis: {
  //   borderBottomWidth: 1,
  //   marginTop: 10,
  // },

  ProfileCardParent: {
    backgroundColor: ColorAA,
    padding: 20,
    borderRadius: 30,
    margin: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  ProfileCardDetail1: {
    paddingTop: 10,
    // paddingBottom: 10,
    color: ColorB_White,
  },

  // SettingsItem: {
  //   padding: 25,
  //   marginTop: 15,
  //   backgroundColor: ColorAA,
  //   borderRadius: 26,
  // },
  SettingsItemText: {
    color: ColorB_White,
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 20,
  },

  Settings_Notification: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 26,
    padding: 10,
    marginTop: 15,
    backgroundColor: "#29495F",
  },
  Settings_PP: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 26,
    padding: 10,
    marginTop: 15,
    backgroundColor: "#BE9548",
  },
  Settings_About: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 26,
    padding: 10,
    marginTop: 15,
    backgroundColor: "#42AA93",
  },
  Settings_LogOut: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 26,
    padding: 10,
    marginTop: 15,
    backgroundColor: "#AC253A",
  },
  IconNext: {
    backgroundColor: "red",
  },
  SettingsItem: {
    marginTop: 10,
  },

  White_FontColor: {
    color: "red",
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
    backgroundColor: "#E5E5E5",
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 40,
    // width: 250,
    width: "100%",

    x: {
      borderRadius: 50,
      padding: 10,
      elevation: 2,
      height: 40,
      // width: 250,
      width: 40,
    },
  },

  buttonOpen: {
    backgroundColor: "#8F1E2F",
  },
  buttonClose: {
    backgroundColor: "#8F1E2F",

    x: {
      backgroundColor: "#E5E5E5",
      position: "absolute",
      top: -50,
    },
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",

    x: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
    },
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});

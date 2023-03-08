import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { Svg, Path, Circle, G, Mask, Defs, ClipPath } from "react-native-svg";

import { ImagePeople } from "../../../assets";
import { Header } from "../../../components";

const seperator = 2;
const seperator_color = "rgba(161, 161, 161, 0.3)";

const AIME_EditProfile = ({ navigation }) => {
  return (
    <View>
      <Header
        navigation={navigation}
        color="black"
        backgroundColor="transparent"
      ></Header>
      <View style={styles.container}>
        {/* <View>
          BackArrow
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <Path
                fill="#000"
                d="M20 8.75H4.787l6.988-6.987L10 0 0 10l10 10 1.762-1.762-6.975-6.988H20v-2.5z"
              ></Path>
            </Svg>
          </TouchableOpacity>
        </View> */}
        <Text style={styles.Title_Profile}>Edit Profile</Text>
        <View style={styles.ProfilePictureContainer}>
          <View style={styles.ProfilePictureContainerChild1}>
            <View style={styles.ProfilePicture}>
              <Image
                source={ImagePeople}
                // style={{height: 120, width: 120, borderRadius: 100}}
                style={{
                  // flex: 1,
                  borderRadius: 100,
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <View style={styles.ProfilePictureEditButton}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <G fill="#DFE6E9" clipPath="url(#clip0_23_99)">
                  <Path d="M17.609 4.782h-2.087L14.37 3.043A2.395 2.395 0 0012.39 2H7.61c-.783 0-1.544.391-1.979 1.043l-1.152 1.74H2.391A2.384 2.384 0 000 7.172v8.436a2.384 2.384 0 002.391 2.39H17.61A2.384 2.384 0 0020 15.61V7.173a2.384 2.384 0 00-2.391-2.392zM10 16.043a5.39 5.39 0 01-5.391-5.391c0-2.978 2.413-5.37 5.391-5.37a5.39 5.39 0 015.391 5.392c0 2.956-2.413 5.37-5.391 5.37zm7.304-7.891h-.957a.708.708 0 010-1.413h.87a.706.706 0 01.74.674.688.688 0 01-.653.739z"></Path>
                  <Path d="M10 7.674c-1.652 0-3 1.348-3 3s1.348 2.978 3 2.978 3-1.348 3-3-1.348-2.978-3-2.978z"></Path>
                </G>
                <Defs>
                  <ClipPath id="clip0_23_99">
                    <Path fill="#fff" d="M0 0H20V20H0z"></Path>
                  </ClipPath>
                </Defs>
              </Svg>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Username</Text>
            <TextInput style={styles.ProfileItemInput}>Yaki Kato</TextInput>
          </View>

          <View style={styles.Line1} />

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Email</Text>
            <TextInput>yakikato232@gmail.com</TextInput>
          </View>

          <View style={styles.Line1} />

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Phone</Text>
            <TextInput>081233334444</TextInput>
          </View>

          <View style={styles.Line1} />

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Date of Birth</Text>
            <TextInput>12-12-2012</TextInput>
          </View>

          <View style={styles.Line1} />

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Country</Text>
            <TextInput>United States</TextInput>
          </View>

          <View style={styles.Line1} />

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Passport ID</Text>
            <TextInput>97327976</TextInput>
          </View>

          <View style={styles.Line1} />
        </View>
      </View>
    </View>
  );
};

export default AIME_EditProfile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // fontFamily: 'Poppins',
    // fontWeight: 100,
    paddingTop: 50,
  },
  content: {
    padding: 15,
    marginTop: 30,
  },

  Title_Profile: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 30,
    marginTop: 20,
  },
  Line1: {
    borderBottomColor: seperator_color,
    borderBottomWidth: seperator,
    paddingTop: 20,
  },

  ProfileItem: {
    // backgroundColor: 'red',

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingTop: 10,
  },
  ProfileItemInput: {
    // padding: 0,
    fontSize: 16,
  },

  ProfileItemName: {
    color: "#34495E",
    fontSize: 16,
  },
  ProfilePictureContainer: {
    // backgroundColor: 'red',
    alignItems: "center",
  },
  ProfilePictureContainerChild1: {
    // backgroundColor: 'green',
  },
  ProfilePictureEditButton: {
    backgroundColor: "#00284D",
    padding: 7,
    borderRadius: 50,
    position: "absolute",
    left: 85,
    top: 85,

    zIndex: 1,
  },
  ProfilePicture: {
    height: 120,
    width: 120,
    borderRadius: 100,

    backgroundColor: "red",

    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});

import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Svg, Path, G, Defs, ClipPath } from "react-native-svg";

import { IconPencilBlue, ImageLandscape3, ImagePeople } from "../../../assets";
import { EditProfileHeader } from "../../../components";
import {
  auth,
  getCurrentUser,
  handleEditEmail,
  handleEditName,
  handleEditProfilePic,
  sendVCode,
} from "../../../config";
import axios from "axios";
import moment from "moment";
const seperator = 2;
const seperator_color = "rgba(161, 161, 161, 0.3)";
import { Shadow } from "react-native-shadow-2";
import { SelectList } from "react-native-dropdown-select-list";
import { PhoneAuthProvider } from "firebase/auth";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../constant";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../config";

const AIME_EditProfile = ({ navigation }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [data, setData] = useState({});
  const [phoneCode, setPhoneCode] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  console.log(phone);

  // modals
  const [modalName, setModalName] = useState(false);
  const [modalEmail, setModalEmail] = useState(false);
  const [modalPhoneNum, setModalPhoneNum] = useState(false);
  const [modalImage, setModalImage] = useState(false);

  // get profile data
  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setName(user.displayName);
        setEmail(user.email);
        setPhone(user.phoneNumber);
        setImage(user.photoURL);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // get passport data
  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        axios
          .get(`https://aime-api.vercel.app/user/${user.uid}`)
          .then((res) => {
            if (res.data === "User does not exist") {
              console.log("User does not exist");
              return;
            }
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // set phone number each update
  useEffect(() => {
    setPhone("+" + phoneCode + phoneNum);
  }, [phoneCode, phoneNum]);

  // Pick an image function for passport photo
  const pickImage = async () => {
    return new Promise(async (resolve, reject) => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (result.canceled) {
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        });
      }

      if (!result.canceled) {
        resolve(result.assets[0].uri);
      } else {
        reject("Image not selected");
      }
    });
  };

  // upload image to storage
  const uploadImage = async (uri) => {
    setIsRefreshing(true);
    try {
      const filename = uri.substring(uri.lastIndexOf("/") + 1);
      const storageRef = ref(storage, `images/${filename}`);
      const response = await fetch(uri);
      const blob = await response.blob();
      const snapshot = await uploadBytes(storageRef, blob);
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log(downloadURL);
      await handleEditProfilePic(downloadURL);
    } catch (error) {
      console.log("error uploading image: ", error);
      alert(error);
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#E6E6E6" }}>
      <EditProfileHeader
        titleSize={30}
        borderBottomWidth={false}
        title="Edit Profile"
        navigation={navigation}
        onDonePress={() => navigation.goBack()}
        backButton={false}
      />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            colors={["#12365D", "#021726"]}
            // progressViewOffset={verticalScale(0)}
            refreshing={isRefreshing}
            onRefresh={() => {
              setIsRefreshing(true);
              getCurrentUser()
                .then((user) => {
                  setName(user.displayName);
                  setEmail(user.email);
                  setPhone(user.phoneNumber);
                  setImage(user.photoURL);
                })
                .catch((err) => console.log(err))
                .finally(() => setIsRefreshing(false));
            }}
          />
        }
      >
        {/* Profile Picture */}
        <View style={styles.ProfilePictureContainer}>
          <TouchableOpacity
            onPress={() => {
              pickImage()
                .then((image) => uploadImage(image))
                .catch((err) => console.log(err));
            }}
            activeOpacity={0.6}
          >
            <Shadow
              startColor="rgba(0, 0, 0, 0.03)"
              offset={[0, 7]}
              distance={30}
              style={styles.ProfilePicture}
            >
              <Image
                source={{
                  uri: image
                    ? image
                    : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
                }}
                // style={{height: 120, width: 120, borderRadius: 100}}
                style={styles.ProfileImage}
              />
            </Shadow>
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
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.content}>
          <Text style={styles.textSection}>Profile Info</Text>
          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Name</Text>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => setModalName(true)}
            >
              <Text style={{ marginRight: 4 }}>{name}</Text>
              <IconPencilBlue width={10} height={10} />
            </TouchableOpacity>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Email</Text>
            <TouchableOpacity
              onPress={() => setModalEmail(true)}
              style={{ flexDirection: "row" }}
            >
              <Text style={{ marginRight: 4 }}>{email}</Text>
              <IconPencilBlue width={10} height={10} />
            </TouchableOpacity>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Phone</Text>
            <TouchableOpacity
              onPress={() => setModalPhoneNum(true)}
              style={{ flexDirection: "row" }}
            >
              <Text style={{ marginRight: 4 }}>
                {phone === "+" ? "" : phone}
              </Text>
              <IconPencilBlue width={10} height={10} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Profile INfo */}

        {/* Passport Info */}
        <View style={styles.content}>
          <Text style={styles.textSection}>Passport Info</Text>
          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Surename</Text>
            <Text>{data.surename}</Text>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Given Name</Text>
            <Text>{data.givenName}</Text>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Date of Birth</Text>
            <Text>{moment(data.birthDate).format("DD MMMM YYYY")}</Text>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Sex</Text>
            <Text>{data.sex}</Text>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Nationality</Text>
            <Text>{data.nationality}</Text>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Place</Text>
            <Text>{data.address}</Text>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Id Passport</Text>
            <Text>{data.passportId}</Text>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>DOI</Text>
            <Text>{moment(data.doi).format("DD MMMM YYYY")}</Text>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>DOE</Text>
            <Text>{moment(data.doe).format("DD MMMM YYYY")}</Text>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Stay Permit</Text>
            <Text>{data.stayPermit}</Text>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>DOSP</Text>
            <Text>{moment(data.dosp).format("DD MMMM YYYY")}</Text>
          </View>
        </View>
        {/* Passport INfo */}

        {/* Passport Photos */}
        <View style={styles.content}>
          <Text style={styles.textSection}>Passport Photos</Text>
          <View style={styles.PassportImage}>
            <Image source={{ uri: data.passportImage }} style={{ flex: 1 }} />
          </View>
        </View>
        {/* Bottom margin helper */}
        <View style={{ height: 96 }} />
      </ScrollView>

      <Modal visible={modalName} animationType={"slide"}>
        <View style={{ backgroundColor: "#E6E6E6", flex: 1 }}>
          <EditProfileHeader
            title={"Edit Name"}
            onDonePress={() =>
              handleEditName(name).then(() => setModalName(false))
            }
            onBackPress={() => setModalName(false)}
          />
          <View style={{ marginVertical: 19, marginHorizontal: 29 }}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.textInput}
            />
          </View>
        </View>
      </Modal>
      <Modal visible={modalEmail} animationType={"slide"}>
        <View style={{ backgroundColor: "#E6E6E6", flex: 1 }}>
          <EditProfileHeader
            title={"Edit Email Address"}
            onDonePress={() =>
              handleEditEmail(email).then(() => setModalEmail(false))
            }
            onBackPress={() => setModalEmail(false)}
          />
          <View style={{ marginVertical: 19, marginHorizontal: 29 }}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.textInput}
            />
          </View>
        </View>
      </Modal>
      <Modal visible={modalPhoneNum} animationType={"slide"}>
        <View style={{ backgroundColor: "#E6E6E6", flex: 1 }}>
          <EditProfileHeader
            title={"Edit Phone Number"}
            onDonePress={() => {
              // handleEditEmail(email).then(() => setModalEmail(false))
            }}
            onBackPress={() => setModalPhoneNum(false)}
          />
          <View style={{ marginVertical: 19, marginHorizontal: 29 }}>
            <Text style={styles.label}>Phone No.</Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                keyboardType={"numeric"}
                value={phoneCode}
                onChangeText={(text) => setPhoneCode(text)}
                style={{
                  width: "20%",
                  backgroundColor: "#C7C7C7",
                  paddingVertical: 13,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  marginTop: 4,

                  fontFamily: "Poppins-Medium",
                  fontSize: 18,
                  color: "black",
                }}
                placeholder={"62"}
              />
              <TextInput
                keyboardType={"numeric"}
                value={phoneNum}
                onChangeText={(text) => setPhoneNum(text)}
                style={{
                  marginLeft: "2%",
                  width: "78%",
                  backgroundColor: "#C7C7C7",
                  paddingVertical: 13,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  marginTop: 4,

                  fontFamily: "Poppins-Medium",
                  fontSize: 18,
                  color: "black",
                }}
                placeholder={"8123456789"}
              />
            </View>
            {/* <TouchableOpacity
              onPress={() => sendVCode(phone)}
              style={{
                width: "100%",
                backgroundColor: "#42AA93",
                paddingHorizontal: 5,
                paddingVertical: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                borderRadius: 15,
              }}
            >
              <Text>Send Verification Code</Text>
            </TouchableOpacity> */}
            <Text>// This field still in progress</Text>
          </View>
        </View>
      </Modal>
      {/* <Modal visible={modalImage} transparent={true} animationType={"slide"}>
        <View style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }}>
          <View>
            <
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

export default AIME_EditProfile;

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    paddingHorizontal: 20,
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
  ProfileImage: {
    // flex: 1,
    borderRadius: 100,
    width: "100%",
    height: "100%",
  },

  ProfileItem: {
    borderBottomColor: seperator_color,
    borderBottomWidth: seperator,
    paddingBottom: 30,
    marginTop: 17,

    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
  },
  ProfileItemInput: {
    fontSize: 16,
  },

  textAdd: {
    color: "#007DE4",
    fontSize: 16,
  },

  ProfileItemName: {
    color: "#34495E",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  ProfilePictureContainer: {
    alignItems: "center",
    marginTop: 20,
    // backgroundColor: "green",
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
    backgroundColor: "white",

    overflow: "hidden",

    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,

    // elevation: 24,
  },

  textSection: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 23,
    color: "black",
  },

  PassportImage: {
    width: "100%",
    height: 246,
    overflow: "hidden",
    borderWidth: 20,
    borderColor: "#213545",
    borderRadius: 15,
  },
  label: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "#656565",
    marginLeft: 10,
  },
  textInput: {
    width: "100%",
    backgroundColor: "#C7C7C7",
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 4,

    fontFamily: "Poppins-Medium",
    fontSize: 18,
    color: "black",
  },
});

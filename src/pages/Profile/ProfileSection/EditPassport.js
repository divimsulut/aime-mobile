import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import { IconCamera, ImageLandscape3 } from "../../../assets";
import { EditProfileHeader } from "../../../components";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { SelectList } from "react-native-dropdown-select-list";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { Upload } from "../../../assets";
import AnimatedLottieView from "lottie-react-native";

const EditPassport = ({ navigation }) => {
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [dataNationality, setDataNationality] = React.useState([
    { key: "", value: "" },
  ]);

  // Get nationality
  useEffect(() => {
    let counter = 1;
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        const data = res.data
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country) => ({
            key: counter++,
            value: country.name.common,
          }));
        setDataNationality(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const sex = [
    { key: 1, value: "Male" },
    { key: 2, value: "Female" },
  ];

  const stayPermit = [
    { key: 1, value: "ITK" },
    { key: 2, value: "ITAS" },
    { key: 3, value: "ITAP" },
  ];

  //  Data passport
  const [data, setData] = React.useState({
    sureName: "",
    givenName: "",
    dateOfBirth: new Date(),
    sex: "",
    nationality: "",
    place: "",
    idPassport: "",
    doi: new Date(),
    doe: new Date(),
    stayPermit: "",
    dosp: new Date(),
    passportImage: null,
  });

  //   Modal for edit data
  const [modalSurename, setModalSurename] = React.useState(false);
  const [modalGivenName, setModalGivenName] = React.useState(false);
  const [modalDateOfBirth, setModalDateOfBirth] = React.useState(false);
  const [modalSex, setModalSex] = React.useState(false);
  const [modalNationality, setModalNationality] = React.useState(false);
  const [modalPlace, setModalPlace] = React.useState(false);
  const [modalIdPassport, setModalIdPassport] = React.useState(false);
  const [modalDoi, setModalDoi] = React.useState(false);
  const [modalDoe, setModalDoe] = React.useState(false);
  const [modalStayPermit, setModalStayPermit] = React.useState(false);
  const [modalDosp, setModalDosp] = React.useState(false);

  // Pick an image function for passport photo
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setData({ ...data, passportImage: result.assets[0].uri });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <EditProfileHeader
        title={"Passport Information"}
        navigation={navigation}
        backButton={false}
      />
      <ScrollView>
        {/* Passport Info */}
        <View style={styles.content}>
          <Text style={styles.textSection}>Passport Info</Text>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Surename</Text>
            <TouchableOpacity onPress={() => setModalSurename(true)}>
              <Text style={styles.textValue}>
                {data.sureName ? data.sureName : "Add"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Given Name</Text>
            <TouchableOpacity onPress={() => setModalGivenName(true)}>
              <Text style={styles.textValue}>
                {data.givenName ? data.givenName : "Add"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Date Of Birth</Text>
            <TouchableOpacity onPress={() => setModalDateOfBirth(true)}>
              <Text style={styles.textValue}>
                {moment(data.dateOfBirth).format("DD MMMM YYYY")}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Sex</Text>
            <TouchableOpacity onPress={() => setModalSex(true)}>
              <Text style={styles.textValue}>
                {data.sex ? data.sex : "Chose"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Nationality</Text>
            <TouchableOpacity onPress={() => setModalNationality(true)}>
              <Text style={styles.textValue}>
                {data.nationality ? data.nationality : "Add"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Place</Text>
            <TouchableOpacity onPress={() => setModalPlace(true)}>
              <Text style={styles.textValue}>
                {data.place ? data.place : "Add"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Passport ID</Text>
            <TouchableOpacity onPress={() => setModalIdPassport(true)}>
              <Text style={styles.textValue}>
                {data.idPassport ? data.idPassport : "Add"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>DOI</Text>
            <TouchableOpacity onPress={() => setModalDoi(true)}>
              <Text style={styles.textValue}>
                {moment(data.doi).format("DD MMMM YYYY")}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>DOE</Text>
            <TouchableOpacity onPress={() => setModalDoe(true)}>
              <Text style={styles.textValue}>
                {moment(data.doe).format("DD MMMM YYYY")}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>Stay Permit</Text>
            <TouchableOpacity onPress={() => setModalStayPermit(true)}>
              <Text style={styles.textValue}>
                {data.stayPermit ? data.stayPermit : "Add"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ProfileItem}>
            <Text style={styles.ProfileItemName}>DOSP</Text>
            <TouchableOpacity onPress={() => setModalDosp(true)}>
              <Text style={styles.textValue}>
                {moment(data.dosp).format("DD MMMM YYYY")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Passport INfo */}

        {/* Passport Photos */}
        <View style={styles.content}>
          <Text style={styles.textSection}>Passport Photos</Text>

          <View style={styles.PassportImage}>
            <TouchableOpacity
              style={{
                position: "absolute",
                zIndex: 1,
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={pickImage}
            >
              <IconCamera />
            </TouchableOpacity>
            {data.passportImage ? (
              <Image source={{ uri: data.passportImage }} style={{ flex: 1 }} />
            ) : (
              <AnimatedLottieView source={Upload} autoPlay={true} />
            )}
          </View>
        </View>

        {/* Bottom margin helper */}
        <View style={{ height: 96 }} />
      </ScrollView>

      {/* Surename modal */}
      <Modal visible={modalSurename} animationType={"slide"}>
        <View style={styles.modal}>
          <EditProfileHeader
            title={"Surename"}
            navigation={navigation}
            onDonePress={() => setModalSurename(false)}
          />
          <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
            <Text style={styles.label}>Surename</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setData({ ...data, sureName: text })}
              value={data.sureName}
            />
          </View>
        </View>
      </Modal>

      {/* Given Name modal */}
      <Modal visible={modalGivenName} animationType={"slide"}>
        <View style={styles.modal}>
          <EditProfileHeader
            title={"Given Name"}
            navigation={navigation}
            onDonePress={() => setModalGivenName(false)}
          />
          <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
            <Text style={styles.label}>Given Name</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setData({ ...data, givenName: text })}
              value={data.givenName}
            />
          </View>
        </View>
      </Modal>

      {/* date of birth modal */}
      <Modal visible={modalDateOfBirth} animationType={"slide"}>
        <View style={styles.modal}>
          <EditProfileHeader
            title={"Given Name"}
            navigation={navigation}
            onDonePress={() => setModalDateOfBirth(false)}
          />
          <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
            <Text style={styles.label}>Date Of Birth</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textInput, { width: "75%" }]}>
                {moment(data.dateOfBirth).format("DD MMMM YYYY")}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#C7C7C7",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  paddingHorizontal: 5,
                }}
                onPress={() => setShowDatePicker(true)}
              >
                <Text>{"Select Date"}</Text>
              </TouchableOpacity>
            </View>
            {showDatePicker && (
              <DateTimePicker
                value={data.dateOfBirth}
                mode="datetime"
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  setData({
                    ...data,
                    dateOfBirth: selectedDate,
                  });
                }}
              />
            )}
          </View>
        </View>
      </Modal>

      {/* Sex modal */}
      <Modal visible={modalSex} animationType={"slide"}>
        <View style={styles.modal}>
          <EditProfileHeader
            title={"Sex"}
            navigation={navigation}
            onDonePress={() => setModalSex(false)}
          />
          <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
            <Text style={styles.label}>Chose your gender</Text>
            <SelectList
              data={sex}
              save={"value"}
              setSelected={(val) => setData({ ...data, sex: val })}
              search={false}
            />
          </View>
        </View>
      </Modal>

      {/* Nationality modal */}
      <Modal visible={modalNationality} animationType={"slide"}>
        <View style={styles.modal}>
          <EditProfileHeader
            title={"Nationality"}
            navigation={navigation}
            onDonePress={() => setModalNationality(false)}
          />
          <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
            <Text style={styles.label}>Chose your Nationality</Text>
            <SelectList
              data={dataNationality}
              save={"value"}
              maxHeight={300}
              setSelected={(val) => setData({ ...data, nationality: val })}
            />
          </View>
        </View>
      </Modal>

      {/* place modal */}
      <Modal visible={modalPlace} animationType={"slide"}>
        <View style={styles.modal}>
          <EditProfileHeader
            title={"Place"}
            navigation={navigation}
            onDonePress={() => setModalPlace(false)}
          />
          <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
            <Text style={styles.label}>Write your place bellow</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setData({ ...data, place: text })}
              value={data.place}
            />
          </View>
        </View>
      </Modal>

      {/* Passport id modal */}
      <Modal visible={modalIdPassport} animationType={"slide"}>
        <View style={styles.modal}>
          <EditProfileHeader
            title={"Passport ID"}
            navigation={navigation}
            onDonePress={() => setModalIdPassport(false)}
          />
          <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
            <Text style={styles.label}>Write your passport ID bellow</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setData({ ...data, idPassport: text })}
              value={data.idPassport}
            />
          </View>
        </View>
      </Modal>

      {/* date of issue modal */}
      <Modal visible={modalDoi} animationType={"slide"}>
        <View style={styles.modal}>
          <EditProfileHeader
            title={"Date of Issue"}
            navigation={navigation}
            onDonePress={() => setModalDoi(false)}
          />
          <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
            <Text style={styles.label}>
              Please provide Date of Issue of your passport
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textInput, { width: "75%" }]}>
                {moment(data.doi).format("DD MMMM YYYY")}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#C7C7C7",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  paddingHorizontal: 5,
                }}
                onPress={() => setShowDatePicker(true)}
              >
                <Text>{"Select Date"}</Text>
              </TouchableOpacity>
            </View>
            {showDatePicker && (
              <DateTimePicker
                value={data.doi}
                mode="datetime"
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  setData({
                    ...data,
                    doi: selectedDate,
                  });
                }}
              />
            )}
          </View>
        </View>
      </Modal>

      {/* date of expire modal */}
      <Modal visible={modalDoe} animationType={"slide"}>
        <View style={styles.modal}>
          <EditProfileHeader
            title={"Date of Expire"}
            navigation={navigation}
            onDonePress={() => setModalDoe(false)}
          />
          <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
            <Text style={styles.label}>
              Please provide Date of Expire of your passport
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textInput, { width: "75%" }]}>
                {moment(data.doe).format("DD MMMM YYYY")}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#C7C7C7",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  paddingHorizontal: 5,
                }}
                onPress={() => setShowDatePicker(true)}
              >
                <Text>{"Select Date"}</Text>
              </TouchableOpacity>
            </View>
            {showDatePicker && (
              <DateTimePicker
                value={data.doe}
                mode="datetime"
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  setData({
                    ...data,
                    doe: selectedDate,
                  });
                }}
              />
            )}
          </View>
        </View>
      </Modal>

      {/* stay permit modal */}
      <Modal visible={modalStayPermit} animationType={"slide"}>
        <View style={styles.modal}>
          <EditProfileHeader
            title={"Stay Permit"}
            navigation={navigation}
            onDonePress={() => setModalStayPermit(false)}
          />
          <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
            <Text style={styles.label}>Select your stay permit type</Text>
            <SelectList
              data={stayPermit}
              save={"value"}
              setSelected={(val) => setData({ ...data, stayPermit: val })}
            />
          </View>
        </View>
      </Modal>

      {/* DOSP modal */}
      <Modal visible={modalDosp} animationType={"slide"}>
        <View style={styles.modal}>
          <EditProfileHeader
            title={"DOSP"}
            navigation={navigation}
            onDonePress={() => setModalDosp(false)}
          />
          <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
            <Text style={styles.label}>Provide DOSP date bellow</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.textInput, { width: "75%" }]}>
                {moment(data.dosp).format("DD MMMM YYYY")}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#C7C7C7",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  paddingHorizontal: 5,
                }}
                onPress={() => setShowDatePicker(true)}
              >
                <Text>{"Select Date"}</Text>
              </TouchableOpacity>
            </View>
            {showDatePicker && (
              <DateTimePicker
                value={data.dosp}
                mode="datetime"
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  setData({
                    ...data,
                    dosp: selectedDate,
                  });
                }}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditPassport;

const styles = StyleSheet.create({
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
  ProfileImage: {
    // flex: 1,
    borderRadius: 100,
    width: "100%",
    height: "100%",
  },

  ProfileItem: {
    borderBottomColor: "#3837374F",
    borderBottomWidth: 2,
    paddingBottom: 30,
    marginTop: 17,

    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
  },
  ProfileItemInput: {
    fontSize: 16,
  },

  textValue: {
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

  modal: {
    flex: 1,
  },

  label: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#656565",
  },

  textInput: {
    backgroundColor: "#C7C7C7",
    marginTop: 4,
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderRadius: 10,

    fontFamily: "Poppins-Medium",
    fontSize: 18,
  },
});

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
import React from "react";
import { ImageLandscape3 } from "../../../assets";
import { EditProfileHeader } from "../../../components";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const EditPassport = ({ navigation }) => {
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  //  Data passport
  const [data, setData] = React.useState({
    sureName: "",
    givenName: "",
    dateOfBirth: new Date(),
    sex: "",
    nationality: "",
    place: "",
    idPassport: "",
    doi: "",
    doe: "",
    stayPermit: "",
    dosp: "",
  });
  console.log(data.dateOfBirth);

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

  return (
    <View style={{ flex: 1 }}>
      <EditProfileHeader
        title={"Passport Information"}
        navigation={navigation}
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
        </View>
        {/* Passport INfo */}

        {/* Passport Photos */}
        <View style={styles.content}>
          <Text style={styles.textSection}>Passport Photos</Text>
          <View style={styles.PassportImage}>
            <Image source={ImageLandscape3} style={{ flex: 1 }} />
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

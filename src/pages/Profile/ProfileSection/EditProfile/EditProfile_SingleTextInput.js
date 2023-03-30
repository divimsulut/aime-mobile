import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../../../../constant";
import { useNavigation } from "@react-navigation/native";

const EditProfile_SingleTextInput = ({ visible, onClose, title }) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <Modal visible={visible} onRequestClose={onClose}>
      {/* Note:
      Buat header sendiri;
      Tombol go back nya buat modalVisible jadi false */}
      <View>
        {/* CONTENT */}
        <View style={{ marginTop: verticalScale(100) }}>
          <Text>{title}</Text>
        </View>
      </View>
    </Modal>

    // <Modal transparent={false} animationType="slide" visible={modalVisible}>
    //   <View style={{ backgroundColor: "black", flex: 1 }}>
    //     <Text>hello</Text>
    //   </View>
    // </Modal>

    // {/* <Text>EditProfile_SingleTextInput</Text>
    // <TextInput placeholder="abcd"></TextInput>
    // <TouchableOpacity>
    //   <Text>OK</Text>
    // </TouchableOpacity> */}

    //   {/* <Modal
    //           animationType="slide"
    //           transparent={true}
    //           visible={modalVisible}
    //           onRequestClose={() => {
    //             Alert.alert("Modal has been closed.");
    //             setModalVisible(!modalVisible);
    //           }}
    //         >
    //           <View style={{flex: 1,
    // // justifyContent: "center",
    // justifyContent: "flex-end",
    // alignItems: "center",
    // // marginTop: 22,
    // backgroundColor: "rgba(0, 0, 0, 0.7)",}}>
    //             <View style={{// margin: 0,
    // // flex: 1,
    // justifyContent: "flex-end",
    // backgroundColor: "#E5E5E5",
    // borderRadius: 30,
    // padding: 35,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
    // width: "100%",}}>
    //               <Text style={{marginBottom: 15,
    // textAlign: "center",
    // fontWeight: "bold",}}>
    //                 Are you sure want to log out?
    //               </Text>
    //               <TouchableOpacity
    //                 style={[styles.button, styles.buttonClose]}
    //                 onPress={() => {
    //                   signOut(navigation);
    //                   setModalVisible(!modalVisible);
    //                 }}
    //               >
    //                 <Text style={styles.textStyle}>yeah, log out please!</Text>
    //               </TouchableOpacity>

    //               <TouchableOpacity
    //                 style={[styles.button.x, styles.buttonClose.x]}
    //                 onPress={() => setModalVisible(!modalVisible)}
    //               >
    //                 <Text style={styles.x}>X</Text>
    //               </TouchableOpacity>
    //             </View>
    //           </View>
    //         </Modal> */}
  );
};

export default EditProfile_SingleTextInput;

const styles = StyleSheet.create({});

import { StyleSheet, Modal, View, ActivityIndicator } from "react-native";
import React from "react";
import { horizontalScale, verticalScale } from "../constant";

const LoadingModal = () => {
  return (
    <Modal transparent={true}>
      <View style={styles.modalContainer}>
        <ActivityIndicator size={100} color="#08C755" />
      </View>
    </Modal>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  modalContainer: {
    width: horizontalScale(200),
    height: verticalScale(200),
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: "50%",
    transform: [{ translateY: -100 }],
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

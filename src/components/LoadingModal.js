import { StyleSheet, Modal, View, ActivityIndicator } from "react-native";
import React from "react";

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
    width: 200,
    height: 200,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: 300,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

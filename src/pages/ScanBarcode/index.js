import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  Linking,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { Svg, Path } from "react-native-svg";
import LottieView from "lottie-react-native";
import { ImageGreenChecklist, Scanner } from "../../assets";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import { LoadingModal } from "../../components";
import { horizontalScale, moderateScale, verticalScale } from "../../constant";
import moment from "moment";
import { getCurrentUser } from "../../config";

const ScanBarcode = ({ navigation }) => {
  //  Data Destination
  const [destinationData, setDestinationData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState("");
  const [uuid, setUuid] = useState(null);

  // loading
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isHandlingScan, setIsHandlingScan] = useState(false);

  // ------------------ Camera ------------------

  // Camera Frame
  const CameraFrame = () => {
    return (
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 431 932"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M58 344v-15c0-13.807 11.193-25 25-25h20M374 344.5v-15c0-13.807-11.193-25-25-25h-20M374 587.5v15c0 13.807-11.193 25-25 25h-20M59 587.5v15c0 13.807 11.193 25 25 25h20"
          stroke="#3498DB"
          strokeWidth={6}
          strokeLinecap="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M431 0H0v932h431V0zM81 302c-13.807 0-25 11.193-25 25v277c0 13.807 11.193 25 25 25h269c13.807 0 25-11.193 25-25V327c0-13.807-11.193-25-25-25H81z"
          fill="#021726"
          fillOpacity={0.86}
        />
      </Svg>
    );
  };

  // Camera perissions
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Screen ratio and image padding
  const [imagePadding, setImagePadding] = useState(0);
  const [ratio, setRatio] = useState("4:3"); // default is 4:3
  const { height, width } = Dimensions.get("window");
  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] = useState(false);

  // on screen  load, ask for permission to use the camera
  useEffect(() => {
    async function getCameraStatus() {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status == "granted");
    }
    getCameraStatus();
  }, []);

  // unmount the camera when the screen is closed
  useEffect(() => {
    const focusListener = navigation.addListener("focus", () => {
      setLoaded(true);
    });
    const blurListener = navigation.addListener("blur", () => {
      setLoaded(false);
    });
    return () => {
      focusListener.remove();
      blurListener.remove();
    };
  }, []);

  // set the camera ratio and padding.
  // this code assumes a portrait mode screen
  const prepareRatio = async () => {
    let desiredRatio = "4:3"; // Start with the system default
    // This issue only affects Android
    if (Platform.OS === "android") {
      const ratios = await camera.getSupportedRatiosAsync();

      // Calculate the width/height of each of the supported camera ratios
      // These width/height are measured in landscape mode
      // find the ratio that is closest to the screen ratio without going over
      let distances = {};
      let realRatios = {};
      let minDistance = null;
      for (const ratio of ratios) {
        const parts = ratio.split(":");
        const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
        realRatios[ratio] = realRatio;
        // ratio can't be taller than screen, so we don't want an abs()
        const distance = screenRatio - realRatio;
        distances[ratio] = realRatio;
        if (minDistance == null) {
          minDistance = ratio;
        } else {
          if (distance >= 0 && distance < distances[minDistance]) {
            minDistance = ratio;
          }
        }
      }
      // set the best match
      desiredRatio = minDistance;
      //  calculate the difference between the camera width and the screen height
      const remainder = Math.floor(
        (height - realRatios[desiredRatio] * width) / 2
      );
      // set the preview padding and preview ratio
      setImagePadding(remainder);
      setRatio(desiredRatio);
      // Set a flag so we don't do this
      // calculation each time the screen refreshes
      setIsRatioSet(true);
    }
  };

  // the camera must be loaded in order to access the supported ratios
  const setCameraReady = async () => {
    if (!isRatioSet) {
      await prepareRatio();
    }
  };

  // ------------------ Camera ------------------

  // get user id
  useEffect(() => {
    getCurrentUser().then((user) => {
      setUuid(user.uid);
    });
  }, []);

  // get the data from api
  useEffect(() => {
    setIsLoadingData(true);
    axios
      .get("https://aime-api.vercel.app/destination")
      .then((response) => {
        setDestinationData(response.data);
        setIsLoadingData(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoadingData(false);
      });
  }, []);

  // Push scanned data into firestore database
  const pushData = async (uuid, destinationId) => {
    setIsLoadingData(true);
    await axios
      .post("https://aime-api.vercel.app/destination/check", {
        uuid,
        destinationId,
      })
      .then((response) => {
        setStatus(response.data.status);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingData(false);
      });
  };

  // handle the scanned data
  const handleScanned = (data) => {
    try {
      setIsHandlingScan(true);
      const destination = destinationData.find(
        (destination) => destination.id === data.data
      );
      if (destination) {
        const date = moment().unix();
        const { id } = destination;
        console.log(date, id);
        pushData(uuid, id).then(() => {
          setModalVisible(true);
        });
      } else {
        setIsHandlingScan(false);
        console.log("not matched");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBarCodeScanned = (data) => {
    if (!isHandlingScan) {
      handleScanned(data);
    }
  };

  if (hasCameraPermission == null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>waiting for camera permission</Text>
      </View>
    );
  } else if (hasCameraPermission === false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No access to camera</Text>
        <TouchableOpacity onPress={() => Linking.openSettings()}>
          <Text>Enable Manually</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.frameContainer}>
          <CameraFrame />
          {!modalVisible && (
            <View style={styles.animationStyle}>
              <LottieView source={Scanner} autoPlay resizeMode="cover" loop />
            </View>
          )}
        </View>
        {loaded && (
          <Camera
            barCodeScannerSettings={{
              barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
            }}
            onBarCodeScanned={(data) => {
              handleBarCodeScanned(data);
            }}
            style={[
              styles.cameraPreview,
              { marginTop: imagePadding, marginBottom: imagePadding },
            ]}
            onCameraReady={setCameraReady}
            ratio={ratio}
            ref={(ref) => setCamera(ref)}
          />
        )}
        {isLoadingData && <LoadingModal />}
        <Modal visible={modalVisible} animationType={"fade"} transparent={true}>
          <View style={styles.modalContainer}>
            <Image source={ImageGreenChecklist} />
            <Text style={styles.modalText}>{status} Succeeded</Text>
            <Text style={styles.modalTextSuccess}>Have a nice trip</Text>
            <TouchableOpacity
              style={styles.modalCloseBtn}
              onPress={() => {
                setModalVisible(false);
                setIsHandlingScan(false);
                console.log("closed");
              }}
            >
              <Text style={styles.modalTextBtn}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
};

export default ScanBarcode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  frameContainer: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  animationStyle: {
    position: "absolute",
    width: "100%",
    height: 330,
    top: "30%",
  },
  cameraPreview: {
    flex: 1,
  },
  modalContainer: {
    position: "absolute",
    width: 300,
    height: 300,
    backgroundColor: "#021726",

    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
    top: "30%",
  },
  modalText: {
    fontSize: moderateScale(18),
    fontFamily: "Poppins-SemiBold",
    color: "#08C755",
  },
  modalTextSuccess: {
    fontFamily: "Poppins-Light",
    fontSize: moderateScale(10),
    color: "white",
  },
  modalCloseBtn: {
    width: horizontalScale(180),
    height: verticalScale(30),
    backgroundColor: "#E6E6E6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  modalTextBtn: {
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(18),
    color: "#1E1E1E",
  },
});

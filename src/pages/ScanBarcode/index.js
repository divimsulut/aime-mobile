import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { Svg, Path } from "react-native-svg";
import LottieView from "lottie-react-native";
import { Scanner } from "../../assets";
import { BarCodeScanner } from "expo-barcode-scanner";

const ScanBarcode = () => {
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

  // Screen ratio and image padding
  const [imagePadding, setImagePadding] = useState(0);
  const [ratio, setRatio] = useState("4:3"); // default is 4:3
  const { height, width } = Dimensions.get("window");
  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] = useState(false);

  // on screen  load, ask for permission to use the camera
  useEffect(() => {
    async function getCameraStatus() {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status == "granted");
    }
    getCameraStatus();
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
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.frameContainer}>
          <CameraFrame />
          <View style={styles.animationStyle}>
            <LottieView source={Scanner} autoPlay resizeMode="cover" loop />
          </View>
        </View>
        <Camera
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
          onBarCodeScanned={({ data }) =>
            console.log("Scanned. the data is: " + data)
          }
          style={[
            styles.cameraPreview,
            { marginTop: imagePadding, marginBottom: imagePadding },
          ]}
          onCameraReady={setCameraReady}
          ratio={ratio}
          ref={(ref) => setCamera(ref)}
        />
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
});

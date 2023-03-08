import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    "Poppins-Regular": require("./Poppins-Regular.ttf"),
  });
};

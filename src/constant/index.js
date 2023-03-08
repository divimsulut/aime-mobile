import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

//PROFILE SECTION
// const ColorA = '#021726';
const ColorB_White = "#DFE6E9";
const ColorC = "v";

const ColorAA = "#021726";

export {
  horizontalScale,
  verticalScale,
  moderateScale,
  ColorB_White,
  ColorC,
  ColorAA,
};

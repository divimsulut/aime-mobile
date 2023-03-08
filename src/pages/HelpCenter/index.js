import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Header } from "../../components";
import { LinearGradient } from "expo-linear-gradient";

export default function HelpCenter({ navigation }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = React.useState([]);
  const date = new Date();
  const currentTime = date.getHours();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  let greeting = "";

  if (currentTime < 12) {
    greeting = "Good Morning";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  let [MoreButton, setMoreButton] = useState(false);

  React.useEffect(() => {
    setData([
      {
        id: 1,
        question: "How to scan the QR-Code?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1Nunc sed semper nunc. Sed auctor, nisl sit amet aliquam lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet nisl. ",
      },
      {
        id: 2,
        question: "how to change checkin status?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2Nunc sed semper nunc. Sed auctor, nisl sit amet aliquam lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet nisl. ",
      },
      {
        id: 3,
        question: "How to change the registered email at AIME?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3Nunc sed semper nunc. Sed auctor, nisl sit amet aliquam lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet nisl. ",
      },
      {
        id: 4,
        question: "where I visited did not provide a barcode that I could scan",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4Nunc sed semper nunc. Sed auctor, nisl sit amet aliquam lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet nisl. ",
      },
    ]);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#002347] ">
      <Header
        label={"Help Center"}
        navigation={navigation}
        backgroundColor="rgba(6, 32, 53, 0.6)"
        backBtn={false}
      />
      <ScrollView className="">
        <View className="">
          <View className="flex flex-col mt-[90px]">
            {/* <View className="flex bg-[#021726] blur opacity-50 w-full h-24 z-10 absolute"></View>  */}
            <LinearGradient
              colors={["rgba(2, 23, 38, 0.5)", "rgba(2, 23, 38, 0)"]}
              style={{
                position: "absolute",
                zIndex: 10,
                width: "100%",
                height: 96,
              }}
            ></LinearGradient>
            <View className="flex left-4 top-2 bg-yellow-500 opacity-80 w-20 h-20 absolute rounded-full"></View>
            <View className="flex right-10 top-4 bg-yellow-500 opacity-80 w-10 h-10 absolute rounded-full"></View>
            <View className="flex right-20 top-6 bg-yellow-500 opacity-80 w-2 h-2 absolute rounded-full"></View>
            <View className="flex right-20 top-9 bg-yellow-500 opacity-80 w-5 h-5 absolute rounded-full"></View>
            <View className="flex right-[70px] top-[53px] bg-yellow-500 opacity-80 w-3 h-3 absolute rounded-full"></View>
            <View className="py-3 px-6">
              <Text
                className="text-white text-left ml-2 text-base font-sans"
                id="greeting"
              >
                {greeting}
              </Text>
              <Text className="text-white text-left ml-2 text-xl font-bold ">
                What can we help you?
              </Text>
            </View>
          </View>

          {/* search */}
          <View className="flex flex-col items-center mt-10 mx-9 -z-10">
            <TextInput
              className="bg-white rounded-2xl h-[46px] w-full px-4 pl-10"
              placeholder="What is your question?"
            />
            <Fontisto
              name="search"
              size={24}
              color="black"
              style={{ position: "absolute", left: 10, top: 8 }}
            />
          </View>

          {/* FAQ */}
          <View className="flex flex-col mt-10 px-6 ">
            <Text className="text-white text-left ml-2 text-xl font-bold">
              FAQs
            </Text>
            {data.map((item) => (
              <View className="flex mt-3 overflow-y-scroll">
                <View className="flex flex-col items-center pb-4 border-b-2 border-[#4A4848]">
                  <View className="flex flex-row-reverse items-center justify-between w-full">
                    <TouchableOpacity
                      className="items-center justify-center w-10 h-10 border border-white rounded-full"
                      id="ReadMoreBtn"
                      onPress={() => setOpen(!open)}
                    >
                      <Text className="text-white text-2xl font-bold">
                        {open ? "-" : "+"}
                      </Text>
                    </TouchableOpacity>

                    <Text
                      className="text-white text-left ml-2 text-base font-normal"
                      id="question"
                    >
                      {item.question}
                    </Text>
                  </View>
                  <View className="flex flex-col items-center justify-center">
                    <Text
                      className={`text-[#636363] text-left ml-2 text-base font-normal ${
                        open ? "block" : "hidden"
                      }`}
                      id="answer"
                    >
                      {item.answer}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <View className="flex px-6 pb-28">
            <View className="flex mt-10 h-20 w-[px] rounded-3xl bg-[#C69D0E]">
              <View className="absolute flex flex-col items-center justify-center left-3 top-4 w-12 h-12 bg-[#002347] rounded-full">
                <View className="absolute flex flex-row items-center justify-center mt-2 w-8 h-8 bg-[#001424] border border-white rounded-full">
                  <Text className="absolute text-white text-left ml-2 text-base font-normal">
                    ?
                  </Text>
                </View>
              </View>
              <View className="flex flex-col items-start px-16 mt-3 justify-center">
                <Text className="text-white text-left ml-2 text-base font-normal">
                  Still have any question?
                </Text>
                <Text className="text-white text-left ml-2 text-xs font-light">
                  Start chat with "HELP"
                </Text>
              </View>
              <View className="absolute right-4 bottom-4">
                <TouchableOpacity
                  className="flex flex-row items-center justify-center mt-2 w-[130px] h-9 border border-white rounded-2xl"
                  onPress={() => navigation.navigate("HelpChat")}
                >
                  <Text
                    className="text-white text-left ml-2 text-base font-normal"
                    id="chatBtn"
                  >
                    Start Chat
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

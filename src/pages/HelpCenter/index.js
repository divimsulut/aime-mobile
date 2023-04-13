import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Linking,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Header } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import { horizontalScale, verticalScale } from "../../constant";

export default function HelpCenter({ navigation }) {
  const [openId, setOpenId] = React.useState(null);
  const [data, setData] = React.useState([]);
  const date = new Date();
  const currentTime = date.getHours();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  let greeting = "";

  if (currentTime < 12) {
    greeting = "Good Morning";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  React.useEffect(() => {
    setData([
      {
        id: "1",
        question: "How to scan the QR-Code?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1Nunc sed semper nunc. Sed auctor, nisl sit amet aliquam lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet nisl. ",
      },
      {
        id: "2",
        question: "How to change checkin status?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2Nunc sed semper nunc. Sed auctor, nisl sit amet aliquam lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet nisl. ",
      },
      {
        id: "3",
        question: "How to change the registered email at AIME?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3Nunc sed semper nunc. Sed auctor, nisl sit amet aliquam lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet nisl. ",
      },
      {
        id: "4",
        question: "Where I visited did not provide a barcode that I could scan",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4Nunc sed semper nunc. Sed auctor, nisl sit amet aliquam lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet nisl. ",
      },
    ]);
  }, []);

  useEffect(() => {
    setFilter(
      data.filter(
        (item) =>
          item.question.toLowerCase().includes(search.toLowerCase()) ||
          item.answer.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

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
            <View style={{ zIndex: 11 }}>
              <View className="py-3 px-6">
                <Text
                  className="text-white text-left ml-2 text-base "
                  id="greeting"
                >
                  {greeting}
                </Text>
                <Text
                  className="text-white text-left ml-2 text-xl"
                  style={{ fontWeight: "bold" }}
                >
                  What can we help you?
                </Text>
              </View>
            </View>
          </View>

          {/* search */}
          <View className="flex flex-col items-center mt-10 mx-9 -z-10">
            <TextInput
              className="bg-white rounded-2xl h-[46px] w-full px-4 pl-10"
              placeholder="What is your question?"
              onChangeText={(text) => setSearch(text)}
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
            <Text
              className="text-white text-left text-xl "
              style={{ marginBottom: 10, fontWeight: "bold" }}
            >
              FAQs
            </Text>
            {filter.map((item) => (
              <View key={item.id} className="flex mt-3 overflow-y-scroll ">
                <View className="flex flex-col items-center pb-4 border-b-2 border-[#4A4848] ">
                  {/* Question Section */}
                  <View className="flex  justify-between w-full ">
                    <TouchableOpacity
                      className=" absolute right-0 items-center justify-center w-6 h-6 border border-white rounded-full"
                      onPress={() =>
                        setOpenId(item.id === openId ? null : item.id)
                      }
                    >
                      <Text className="text-white text-1xl ">
                        {item.id === openId ? "-" : "+"}
                      </Text>
                    </TouchableOpacity>

                    <Text
                      className="text-white text-left text-base mr-6 "
                      id="question"
                    >
                      {item.question}
                    </Text>
                  </View>

                  {/* Answare Section */}
                  <View className="flex flex-col items-center justify-center">
                    <Text
                      style={{ paddingleft: -10 }}
                      className={`text-[#636363] text-left text-base  ${
                        item.id === openId ? "block" : "hidden"
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

          {/* <View className="flex px-6 pb-28"> */}
          {/* <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("HelpChat")}
              className="flex mt-10 h-20 w-[px] justify-start px-4 flex-row items-center space-x-2 rounded-3xl bg-[#C69D0E]"
            > */}
          {/* Qustion Section */}
          {/* <View className=" flex flex-col items-center justify-center  w-12 h-12 bg-[#002347] rounded-full ">
                <View className="absolute flex flex-row items-center justify-center mt-2 w-8 h-8 bg-[#001424] border border-white rounded-full">
                  <Text className="absolute text-white text-left ml-2 text-base ">
                    ?
                  </Text>
                </View>
              </View> */}
          {/* Text section */}
          {/* <View className="flex items-start  justify-center ">
                <Text className="text-white text-left ml-2 text-base ">
                  Still have any question?
                </Text>
                <Text className="text-white text-left ml-2 text-xs ">
                  Press to start chat now
                </Text>
              </View>
            </TouchableOpacity> */}
          {/* </View> */}

          {/* Contact Center Pusat melalui medsos (untuk sementara dulu) -roger */}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#051C2F",
                width: horizontalScale(380),
                marginTop: verticalScale(50),
                padding: 20,
                borderRadius: 10,
                marginBottom: verticalScale(150),
              }}
            >
              <Text
                style={{
                  color: "white",
                  paddingBottom: 10,
                  textAlign: "center",
                }}
              >
                Your question is not on the list?{"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Contact us now through our social media!
                </Text>
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#25D366",
                    padding: 10,
                    margin: 5,
                    borderRadius: 10,
                    flex: 1,
                  }}
                  onPress={() =>
                    Linking.openURL(
                      `https://api.whatsapp.com/send/?phone=6285159556468`
                    )
                  }
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Whatsapp
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#0088CC",
                    padding: 10,
                    margin: 5,
                    borderRadius: 10,
                    flex: 1,
                  }}
                  onPress={() => Linking.openURL(`https://t.me/+6287709106468`)}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Telegram
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#00C6FF",
                    padding: 10,
                    margin: 5,
                    borderRadius: 10,
                    flex: 1,
                  }}
                  onPress={() => Linking.openURL(`https://m.me/alphacast.id`)}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Messenger
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#DD2A7B",
                    padding: 10,
                    margin: 5,
                    borderRadius: 10,
                    flex: 1,
                  }}
                  onPress={() => Linking.openURL(`http://ig.me/m/alphacast.id`)}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Instagram
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

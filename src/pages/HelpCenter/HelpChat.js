import React, { Component, useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Header } from "../../components";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function HelpChat({ navigation }) {
  return (
    <View className="bg-[#12365D]">
      <Header label={"AIME Care"} navigation={navigation} />
      <View className="mt-[110px] w-full h-full bg-[#E6E6E6] rounded-3xl px-7">
        <View className="flex flex-col items-end" id="chatClient">
          <View className="flex flex-col float-right rounded-[30px] rounded-br-none w-72  mt-10 p-1 bg-[#00284D]">
            <Text className="text-[#E6E6E6] text-left px-4 text-base font-normal">
              Hi, I'm Aime, your personal assistant. How can I help you?
            </Text>
          </View>
          {/* time chat */}
          <Text className="text-[#1E1E1E] text-right mr-2 text-[7px] font-normal">
            10:00 AM
          </Text>
        </View>

        <View className="flex flex-col" id="chatAdmin">
          <View className="flex flex-col rounded-[30px] rounded-bl-none w-72 mt-10 p-1 bg-[#B5B5B5]">
            <Text className="text-[#E6E6E6] text-left px-4 text-base font-normal">
              Hi, I'm Aime, your personal assistant. How can I help you?Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam quod
            </Text>
          </View>
          {/* time chat */}
          <Text className="text-[#1E1E1E] text-left ml-2 text-[7px] font-normal">
            10:00 AM
          </Text>
        </View>
      </View>
      <View
        className="flex flex-col items-center justify-center absolute bottom-28 w-full"
        id="messageBar"
      >
        <View className="absolute left-0 z-50" id="emoteBtn">
          {/* <SimpleLineIcons.Button
              name="emotsmile"
              size={24}
              backgroundColor="transparent"
              color="#1E1E1E"
            /> */}
          <MaterialCommunityIcons.Button
            name="emoticon-tongue-outline"
            size={24}
            backgroundColor="transparent"
            color="#1E1E1E"
          />
        </View>
        <View className="absolute flex right-1 z-50" id="sendBtn">
          <Feather.Button
            name="send"
            size={20}
            height={40}
            backgroundColor="#12365D"
            color="#fff"
            borderRadius={100}
            marginRight={-7}
          />
        </View>
        <TextInput
          className="bg-white rounded-full h-[46px] w-full py-1 pl-10 pr-12"
          placeholder="Type message here..."
          placeholderTextColor={"#1E1E1E"}
          multiline={true}
        />
      </View>
    </View>
  );
}

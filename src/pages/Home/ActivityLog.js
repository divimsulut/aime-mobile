import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useRef } from "react";
import CalendarStrip from "react-native-calendar-strip";
import { horizontalScale, moderateScale, verticalScale } from "../../constant";
import { DataCheckinhist } from "../../data";
import { Header } from "../../components";
import moment from "moment";
import LottieView from "lottie-react-native";
import { NoData } from "../../assets";

const ActivityLog = ({ navigation }) => {
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD")); // Start of week
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD")); // End of week
  const [selectDate, setSelectDate] = useState(
    moment().local(true).format("YYYY-MM-DD")
  ); // Selected date
  const scrollViewRef = useRef(); // Ref for scrollview

  // Filter data based on selected date (in week)
  const filteredData = DataCheckinhist.filter((item) => {
    const itemDate = moment(item.date);
    return (
      itemDate.isSameOrAfter(startDate) && itemDate.isSameOrBefore(endDate)
    );
  });

  // Group data based on date
  const groupedData = filteredData.reduce((acc, curr) => {
    if (!acc[curr.date]) {
      acc[curr.date] = [];
    }
    acc[curr.date].push(curr);
    return acc;
  }, {});

  // Scroll to selected date
  const scrollToSelectedDate = (selectedDate) => {
    const selectedDateIndex = Object.keys(groupedData)
      .reverse()
      .findIndex((date) => date == selectedDate);
    if (selectedDateIndex == -1) {
      // return pop up notification if no activity on selected date.
      return alert(
        "No activity on this date: " +
          moment(selectedDate).format("DD MMM YYYY")
      );
    }
    const selectedDateHeight =
      verticalScale(60) * groupedData[selectedDate].length +
      verticalScale(23) * 2;
    console.log(selectedDateHeight);
    const scrollPosition = Object.keys(groupedData) // Get all keys
      .reverse() // Reverse the keys
      .slice(0, selectedDateIndex) // Slice the keys until the selected date
      .reduce((acc, curr) => {
        // Reduce the keys to get the total height
        return (
          acc +
          verticalScale(60) * groupedData[curr].length +
          verticalScale(4) * 2 + // 4 is the margin of the item
          verticalScale(23) * 2 // 23 is the height of the day container
        );
      }, 0);
    scrollViewRef.current.scrollTo({ y: scrollPosition, animated: true });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        backgroundColor="transparent"
        color="black"
        navigation={navigation}
        intensity={0}
      />
      <CalendarStrip
        onWeekChanged={(e) => {
          setStartDate(e.format("YYYY-MM-DD"));
          setEndDate(e.add(6, "days").format("YYYY-MM-DD"));
        }}
        selectedDate={selectDate}
        onDateSelected={(e) => {
          scrollToSelectedDate(e.format("YYYY-MM-DD"));
        }}
        daySelectionAnimation={{
          type: "background",
          duration: 10,
          highlightColor: "#E5CF00",
        }}
        calendarAnimation={{ type: "sequence", duration: 50 }}
        scrollable={false}
        style={styles.calendarContainer}
        calendarColor={"#D2D2D2"}
        calendarHeaderStyle={{
          color: "black",
          fontSize: moderateScale(20),
        }}
        dateNumberStyle={{ color: "#1E1E1E" }}
        dateNameStyle={{ color: "#606060" }}
        iconContainer={{ flex: 0.1 }}
      />
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
        {Object.keys(groupedData)
          .reverse()
          .map((date) => (
            <View key={date} style={styles.logMainContainer}>
              <View style={styles.dayContainer}>
                <Text style={styles.textDay}>
                  {moment(date).toString().substring(0, 3)}
                </Text>
                <Text style={styles.textDate}>
                  {moment(date).toString().substring(8, 10)}
                </Text>
              </View>
              <View style={styles.logContainer}>
                {groupedData[date].reverse().map((item) => (
                  <View key={item.key} style={styles.dataContainer}>
                    <View
                      style={{
                        width: horizontalScale(9),
                        backgroundColor:
                          item.status == "Check-In" ? "#08C755" : "#8F1E2F",
                      }}
                    />
                    <View style={{ marginLeft: horizontalScale(8) }}>
                      <Text style={styles.textDestination}>
                        {item.destination}
                      </Text>
                      <Text style={styles.textDetails}>
                        {item.status} at {item.time}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
        {Object.keys(groupedData).length == 0 && (
          <View style={{ alignItems: "center", marginTop: verticalScale(100) }}>
            <LottieView
              source={NoData}
              autoPlay
              loop
              style={{ width: horizontalScale(300) }}
            />
            <Text style={{ fontFamily: "Poppins-Regular", fontSize: 18 }}>
              No Data
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ActivityLog;

const styles = StyleSheet.create({
  calendarContainer: {
    height: verticalScale(200),
    paddingTop: verticalScale(35),
    paddingBottom: 10,

    // Shaddow
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  logMainContainer: {
    flexDirection: "row",
    paddingHorizontal: horizontalScale(23),
    paddingVertical: verticalScale(23),
  },
  dayContainer: {
    width: horizontalScale(50),
    alignItems: "flex-end",
  },
  textDay: {
    fontFamily: "Poppins-Regular",
    fontSize: moderateScale(18),
    color: "#606060",
  },
  textDate: {
    fontFamily: "Poppins-SemiBold",
    fontSize: moderateScale(18),
    color: "#1E1E1E",
  },
  logContainer: {
    marginLeft: horizontalScale(23),
    flex: 1,
  },
  dataContainer: {
    backgroundColor: "#D2D2D2",
    height: verticalScale(60),
    flexDirection: "row",
    borderRadius: moderateScale(10),
    overflow: "hidden",
    marginVertical: verticalScale(4),
  },
  textDestination: {
    fontFamily: "Poppins-SemiBold",
    color: "black",
    fontSize: moderateScale(15),
  },
  textDetails: {
    fontFamily: "Poppins-Regular",
    color: "black",
    fontSize: moderateScale(12),
  },
});

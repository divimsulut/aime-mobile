import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState, React} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ImagePeople, ImageChecklistWhite} from '../../assets/images';
import {horizontalScale, moderateScale, verticalScale} from '../../constant';
import {IconChecklist, IconMore, IconNotification} from '../../assets/icons';
import {Svg} from 'react-native-svg';
import FlatCard from '../../components/ListComponents/FlatCard';
import {DataDestination} from '../../data';
import {BlurView} from '@react-native-community/blur';

const NewHome = () => {
  const StatusCheckin = () => {
    return (
      <View>
        {/* Checkin status box */}

        <View style={styles.checkinStatusContainer}>
          <View style={styles.imageChecklist}>
            <Svg>
              <IconChecklist />
            </Svg>
          </View>
          <View style={styles.status}>
            <Image
              source={ImageChecklistWhite}
              style={{
                backgroundColor: 'white',
                borderRadius: moderateScale(10),
                width: horizontalScale(16),
                height: verticalScale(16),
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: moderateScale(15),
                color: 'white',
                alignSelf: 'center',
              }}>
              CHECK-IN SUCCEEDED
            </Text>
          </View>
          <Text
            style={{
              marginTop: verticalScale(9),
              fontFamily: 'Poppins-Regular',
              fontSize: moderateScale(15),
              color: 'black',
            }}>
            Bunaken Island, Manado
          </Text>
        </View>

        {/* Checkin status box */}

        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: moderateScale(20),
            color: 'white',
            marginTop: verticalScale(35),
            marginBottom: verticalScale(24),
          }}>
          Popular Destination
        </Text>
      </View>
    );
  };

  return (
    <LinearGradient colors={['#12365D', '#021726']} style={{flex: 1}}>
      <View style={styles.page}>
        {/* Popular destination */}
        <View style={styles.popularDestinationContainer}>
          <View style={styles.flatCardContainer}>
            <FlatList
              data={DataDestination}
              keyExtractor={item => item.key}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return <FlatCard item={item} />;
              }}
              ListHeaderComponent={StatusCheckin}
            />
          </View>
        </View>

        {/* Popular destination */}
      </View>

      {/* Header */}

      <BlurView
        style={{
          position: 'absolute',
          height: verticalScale(103),
          width: '100%',
        }}
        blurType="dark"
        blurAmount={10}
        blurRadius={23}
        reducedTransparencyFallbackColor="white"
        overlayColor="transparent">
        <View style={styles.header}>
          <View style={styles.profile}>
            <Image source={ImagePeople} style={styles.image} />
            <Text style={styles.name}>Hi, Yaki Kato</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <IconNotification />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconMore />
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>

      {/* Header */}

      {/* <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <BottomNavigation />
      </View> */}
    </LinearGradient>
  );
};

export default NewHome;

const styles = StyleSheet.create({
  page: {
    marginHorizontal: horizontalScale(20),
  },
  // blurHeader: {
  //   position: 'absolute',
  //   height: verticalScale(103),
  //   width: '100%',
  //   backgroundColor: backgroundColor,
  // },
  header: {
    flexDirection: 'row',
    height: verticalScale(103),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),

    // Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: horizontalScale(54),
    height: horizontalScale(54),
    borderRadius: moderateScale(50),
  },
  name: {
    marginLeft: moderateScale(11),
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'space-between',
    width: horizontalScale(105),
  },
  checkinStatusContainer: {
    backgroundColor: 'white',
    height: verticalScale(106),
    borderRadius: moderateScale(25),
    marginTop: verticalScale(130),
    paddingLeft: horizontalScale(11),
    justifyContent: 'center',

    // Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  imageChecklist: {
    position: 'absolute',
    right: 0,
    maxHeight: verticalScale(106),
  },
  status: {
    backgroundColor: '#08C755',
    borderRadius: moderateScale(50),
    width: horizontalScale(224),
    height: verticalScale(31),
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(13),
    flexDirection: 'row',
  },
  flatCardContainer: {
    // marginTop: verticalScale(25),
  },
  popularDestinationContainer: {
    // backgroundColor: 'green',
  },
});

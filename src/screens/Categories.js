import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Categories = () => {
  return (
    <View className="bg-amber-200/60">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4 my-2"
        contentContainerStyle={{paddingHorizontal: 15}}>
        <TouchableOpacity className="flex items-center mx-2">
          <Image
            source={require('../assets/Fire.png')}
            style={{width: hp(5), height: hp(5)}}
            className="rounded-full"
          />
          <Text>Top News</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center mx-3">
          <Image
            source={require('../assets/Place_Marker.png')}
            style={{width: hp(5), height: hp(5)}}
            className="rounded-full"
          />
          <Text>Jawali</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center mx-3">
          <Image
            source={require('../assets/Community.png')}
            style={{width: hp(5), height: hp(5)}}
            className="rounded-full"
          />
          <Text>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center mx-3">
          <Image
            source={require('../assets/Parliament.png')}
            style={{width: hp(5), height: hp(5)}}
            className="rounded-full"
          />
          <Text>Politics</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center mx-3">
          <Image
            source={require('../assets/Elections.png')}
            style={{width: hp(5), height: hp(5)}}
            className="rounded-full"
          />
          <Text>Elections</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center mx-3">
          <Image
            source={require('../assets/Cricket.png')}
            style={{width: hp(5), height: hp(5)}}
            className="rounded-full"
          />
          <Text>Sports</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});

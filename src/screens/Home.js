import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as Icons from 'react-native-heroicons/solid';
import Categories from './Categories';

const Home = () => {
  return (
    <View>
      {/* headder */}
      <View
        className="flex flex-row px-2 justify-between mt-3 py-2 bg-white"
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/sj-logo.png')}
          style={{
            width: hp(20),
            height: hp(7),
          }}
        />
        <Icons.Bars3Icon size={hp(4)} color="#333" />
      </View>
      {/* categories */}
      <View className="my-4">
        <Categories />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

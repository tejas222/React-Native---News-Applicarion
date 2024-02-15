import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => navigation.navigate('Home'), 1500);
  }, []);

  return (
    <View className="bg-blue-950  flex-1 justify-center align-middle ">
      <View className="m-auto">
        <Image
          className=""
          source={require('../assets/sj-logo.png')}
          style={{width: hp(36), height: hp(12)}}
        />
        <Text
          className="text-white text-center mt-4"
          style={{
            fontSize: hp(2.5),
          }}>
          सत्य, संवेदनशीलता, स्पष्टता
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});

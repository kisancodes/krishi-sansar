import React from 'react';
import Cards from '../components/ui/Card';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/ui/Header';
import {CloudIcon} from '../components/ui/Icon';
const WeatherScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Header title="Weather" />

      <View style={{padding: 15}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <CloudIcon />
          <Text
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 111,
              lineHeight: 130,
            }}>
            22
          </Text>
        </View>

        <Cards leftTitle="kathmandu" rightContent="22c" />
      </View>
    </View>
  );
};

export default WeatherScreen;

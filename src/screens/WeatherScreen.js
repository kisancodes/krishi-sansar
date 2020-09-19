import React from 'react';
import {WeatherCards} from '../components/ui/Card';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/ui/Header';
import {CloudIcon} from '../components/ui/Icon';
const WeatherScreen = () => {
  let cityDetail = [
    {
      city: 'Kathmandu',
      degree: '22°c',
    },
    {
      city: 'Pokhara',
      degree: '19°c',
    },
    {
      city: 'Nepalgunj',
      degree: '29°c',
    },
    {
      city: 'Dharan',
      degree: '33°c',
    },
    {
      city: 'Chitwan',
      degree: '35°c',
    },
  ];
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
        {cityDetail.map((item, index) => {
          return (
            <WeatherCards
              citiesDetail={item}
              key={index}
              id={index}
              // style={{paddingBottom: 10}}
            />
          );
        })}
      </View>
    </View>
  );
};

export default WeatherScreen;

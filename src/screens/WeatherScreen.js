import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {WeatherCards} from '../components/ui/Card';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/ui/Header';
import {CloudIcon} from '../components/ui/Icon';
const WeatherScreen = () => {
  const [weatherLocation, setWeatherLocation] = useState('');
  // let cityDetail = [];
  // const [cities, setCities] = useState([]);

  useEffect(() => {
    async function getCurrentweather() {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=a4ab8d7f2f40fd2b60d320410dce8b70`,
      );
      const result = await response.json();
      console.log('result', result.main.temp);
      setWeatherLocation(result.main.temp);
    }
    getCurrentweather();
  }, []);
  // setCities(cityDetail);
  // console.log('helo', cities);

  let cityDetail = [
    {
      city: 'Nepalgunj',
      degree: '29°c',
    },
    {
      city: 'Pokhara',
      degree: '19°c',
    },

    {
      city: 'Dharan',
      degree: '33°c',
    },
    {
      city: 'Kathmandu',
      degree: '22°c',
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
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 111,
                lineHeight: 130,
              }}>
              {weatherLocation - 273.15}
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 59,
                // color: '#FFFFFF',
                lineHeight: 69,
              }}>
              °
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 39,
                // color: '#FFFFFF',
                lineHeight: 49,
              }}>
              C
            </Text>
          </View>
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

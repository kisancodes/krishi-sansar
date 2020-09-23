import React, {useEffect} from 'react';
import axios from 'axios';
import {WeatherCards} from '../components/ui/Card';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/ui/Header';
import {CloudIcon} from '../components/ui/Icon';
const WeatherScreen = () => {
  useEffect(async () => {
    let city = ['Pokhara', 'kathamndu'];

    city.map((item) => {
      axios({
        method: 'get',
        url: `api.openweathermap.org/data/2.5/weather?q=${item}&appid=a4ab8d7f2f40fd2b60d320410dce8b70`,
      })
        .then(function (response) {
          console.log('jvkjc=>', response.data.main.temp);
        })
        .catch(function (error) {
          console.log('error=>', error);
        });
    });
  }, []);

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

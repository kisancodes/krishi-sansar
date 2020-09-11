import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Header from '../components/ui/Header';
import Cards from '../components/ui/Card';

const MarketPrice = ({navigation}) => {
  let pricevegetable = [
    {
      vegetable: 'potato',
      price: 'RS 120/kg',
    },
    {
      vegetable: 'corn',
      price: 'RS 120/kg',
    },
    {
      vegetable: 'tomato',
      price: 'RS 120/kg',
    },
    {
      vegetable: 'wheat',
      price: 'RS 120/kg',
    },
    {
      vegetable: 'banana',
      price: 'RS 120/kg',
    },
  ];
  return (
    <View>
      <Header title="Market Price" />
      <View style={{padding: 15}}>
        <Cards leftTitle="Potato" rightContent="Rs 120/kg" />
      </View>
    </View>
  );
};
export default MarketPrice;

import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
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
    {
      vegetable: 'grapes',
      price: 'RS 120/kg',
    },
    {
      vegetable: 'corn crops',
      price: 'RS 120/kg',
    },
    {
      vegetable: 'blueberry',
      price: 'RS 120/kg',
    },
    {
      vegetable: 'watermelon',
      price: 'RS 120/kg',
    },
    {
      vegetable: 'lichi',
      price: 'RS 120/kg',
    },
    {
      vegetable: 'pineapple',
      price: 'RS 120/kg',
    },
    {
      vegetable: 'ginger',
      price: 'RS 120/kg',
    },
  ];
  return (
    <View>
      <Header title="Market Price" />
      <View style={{padding: 15}}>
        <ScrollView style={{marginHorizontal: 10}}>
          {pricevegetable.map((item, index) => {
            return (
              <Cards
                vegetableDetail={item}
                key={index}
                id={index}
                // style={{paddingBottom: 10}}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
export default MarketPrice;

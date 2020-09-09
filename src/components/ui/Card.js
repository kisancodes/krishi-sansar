import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Cards = (props) => {
  return (
    <View
      style={{
        borderColor: '#a9a9a9',
        marginLeft: '10%',
        marginRight: '10%',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '80%',
        height: '42%',
      }}>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}> */}
      <View
        style={{
          flexDirection: 'row',
          bottom: -7,
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <View style={{justifyContent: 'center', height: '100%'}}>
          <Text>hello</Text>
        </View>
        <View style={{justifyContent: 'center', height: '100%'}}>
          <Text>nilaa</Text>
        </View>
      </View>
    </View>
  );
};
export default Cards;

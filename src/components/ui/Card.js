import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Cards = (props) => {
  return (
    <View
      style={{
        borderColor: '#a9a9a9',
        borderWidth: 1,
        borderStyle: 'solid',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 18,
            lineHeight: 21,
          }}>
          {props.leftTitle}
        </Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 18,
            lineHeight: 21,
          }}>
          {props.rightContent}
        </Text>
      </View>
    </View>
  );
};
export default Cards;

export const BlogCard = (props) => {
  <View
    style={{
      marginTop: '20%',
      borderColor: '#a9a9a9',
      marginLeft: '10%',
      marginRight: '10%',
      borderWidth: 1,
      paddingLeft: '2%',
      paddingTop: '4%',
      paddingRight: '2%',
      borderStyle: 'solid',
      width: '80%',
      height: '45%',
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    }}>
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        // marginLeft: '3%',
      }}>
      <Text
        style={{
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'bold',

          fontSize: 16,
          lineHeight: 19,
        }}>
        {props.title}
      </Text>

      <Text
        style={{
          fontFamily: 'Roboto',
          fontStyle: 'italic',
          fontWeight: 'normal',
          fontSize: 14,
          lineHeight: 16,
          color: '#959595',
        }}>
        {props.date}
      </Text>
      <Text
        style={{
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 16,
          lineHeight: 19,
        }}>
        {props.description}
      </Text>
    </View>
  </View>;
};

import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/ui/Header';
const BlogScreen = () => {
  return (
    <View>
      <Header title="Blog" />
      <View style={{padding: 15}}>
        <View
          style={{
            borderColor: '#a9a9a9',
            // marginLeft: '10%',
            // marginRight: '10%',
            borderWidth: 1,
            padding: 10,
            // paddingLeft: '2%',
            // paddingTop: '4%',
            // paddingRight: '2%',
            borderStyle: 'solid',

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
            style={
              {
                // flex: 1,
                // flexDirection: 'column',
                // width: '100%',
                // height: '100%',
                // marginLeft: '3%',
              }
            }>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',

                fontSize: 16,
                lineHeight: 19,
              }}>
              Choose the right soil for Crops in South Nepal
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
              Posted on Jan 10
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 16,
                lineHeight: 19,
                // textAlign: 'justify',
              }}>
              saaaaaaaaaaaaaaa dsfdsferfe knfklsnefklwen
              jhnolkjweqhklrjweqhklerj adnowekhrowekqr sdnowknkowenrfklenf
              erfnewkfnewklfnffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BlogScreen;

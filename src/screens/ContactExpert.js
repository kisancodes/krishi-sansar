import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/ui/Header';
const ContactExpert = () => {
  return (
    <View>
      <Header title="ContactExpert" />

      <View
        style={{
          marginTop: '20%',
          borderColor: '#a9a9a9',
          marginLeft: '10%',
          marginRight: '10%',
          borderWidth: 1,
          borderStyle: 'solid',
          width: '80%',
          height: '42%',
          backgroundColor: 'red',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}>
          {/* <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}> */}
          <View>
            <Text>hello</Text>
          </View>
          <View>
            <Text>nilaagssssssss</Text>
          </View>
          {/* </View> */}
        </View>
      </View>
    </View>
  );
};

export default ContactExpert;

import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../components/ui/Header';
import PersonPhoto from '../assets/images/passportpoto.png';
const ContactExpert = () => {
  return (
    <View style={{flex: 1}}>
      <Header title="ContactExpert" />
      <View style={{padding: 15}}>
        <View
          style={{
            padding: 10,
            // marginTop: '20%',
            borderColor: '#a9a9a9',
            // marginLeft: '10%',
            // marginRight: '10%',
            borderWidth: 1,
            borderStyle: 'solid',
            shadowColor: '#000',
            shadowOffset: {
              width: 1,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 1,
          }}>
          <View
            style={{
              // flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            {/* <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}> */}
            <View>
              <Image source={PersonPhoto} />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: 16,
                  lineHeight: 21,
                }}>
                Dr Hari Ram
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: 16,
                  lineHeight: 21,
                }}>
                Dinsct: sindhupalchowk,chautara
              </Text>
              <Text
                style={{
                  fontfamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: 16,
                  lineHeight: 21,
                }}>
                contact: 9843634142
              </Text>
            </View>
            {/* </View> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContactExpert;

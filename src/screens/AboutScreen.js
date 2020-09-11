import React from 'react';
import LogoLogin from '../assets/images/loginlogo.png';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../components/ui/Header';
import {CopyRightIcon} from '../components/ui/Icon';
const AboutScreen = () => {
  return (
    <View>
      <Header title="About" />
      <View style={{padding: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image source={LogoLogin} />
        </View>
        <View
          style={{
            marginLeft: '4%',
            height: '80%',
            flexDirection: 'column',
            marginRight: '4%',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 19,
              lineHeight: 22,
              paddingBottom: '4%',
              paddingTop: '4%',
            }}>
            About
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 16,
              lineHeight: 19,
              textAlign: 'justify',
            }}>
            Krishi Sansar is one of the most popular in mobile apps for farmers
            in the video category. It has a rating of 4.8 out of 5. It is an
            online marketplace bringing farmers, agriculture input/output,
            farming retail and fulfillment service on an online platform. It
            also provides chat service for farmers to solve their query related
            to agriculture with the option of upload images of infected crops.
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 16,
              lineHeight: 19,
              textAlign: 'justify',
              marginTop: '4%',
            }}>
            Farmers can easily chat with agriculture expert and discuss their
            problems. This smartphone application also provides various videos
            related to agriculture practice, new technologies, successful
            farmers, rural development, agriculture news, new govt. schemes
            related to agriculture etc. Approximately 10 thousand users
            downloaded this app.
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 16,
              lineHeight: 19,
              textAlign: 'justify',
              marginTop: '4%',
            }}>
            Farmers can easily chat with agriculture expert and discuss their
            problems. This smartphone application also provides various videos
            related to agriculture practice, new technologies, successful
            farmers, rural development, agriculture news, new govt. schemes
            related to agriculture etc. Approximately 10 thousand users
            downloaded this app.
          </Text>
          <View style={{marginTop: '5%', flexDirection: 'row'}}>
            <CopyRightIcon />
            <Text
              style={{
                marginLeft: '1%',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 13,
                lineHeight: 15,
              }}>
              Krishi Sansar.All right RESERVED 2020
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutScreen;

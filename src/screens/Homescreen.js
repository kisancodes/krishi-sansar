import React from 'react';

import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Homepic from '../assets/images/homepic.png';
import Homepic1 from '../assets/images/home2.png';
import Homepic2 from '../assets/images/home3.png';

import {SemiBoldText} from '../components/ui/Text';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 16,
            lineHeight: 19,
            color: '#FFFFFF',
          }}>
          Current Temperature
        </Text>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 64,
            lineHeight: 75,
            color: '#FFFFFF',
          }}>
          29
        </Text>
      </View>
      <View
        style={{
          flex: 4,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View style={{padding: 20}}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 10,
              lineHeight: 12,
            }}>
            News
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 18,
              lineHeight: 21,
            }}>
            Agriculture Sector has beaten by Pandemic and expect to decrease
            production by 50%
          </Text>
          <View style={{paddingTop: 20, paddingBottom: 30}}>
            <Image source={Homepic} />
          </View>

          <Text
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontsize: 18,
              lineHeight: 21,
            }}>
            Blogs
          </Text>
          {/* <View>
            <ScrollView style={{marginHorizontal: 10}}> */}
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 15,
            }}>
            <View>
              <Image source={Homepic1} />
            </View>
            <View style={{padding: 10}}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: 12,
                  lineHeight: 14,
                }}>
                Blog post 1
              </Text>
              <Text
                style={{
                  flexWrap: 'wrap',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontweight: 'bold',
                  fontsize: 12,
                  lineheight: 14,
                }}>
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printingdhvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View>
              <Image source={Homepic2} />
            </View>
            <View style={{padding: 10}}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: 12,
                  lineHeight: 14,
                }}>
                Blog post 2
              </Text>
              <Text
                style={{
                  flexWrap: 'wrap',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontweight: 'bold',
                  fontsize: 12,
                  lineheight: 14,
                }}>
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image source={Homepic2} />
            <View style={{padding: 10}}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: 12,
                  lineHeight: 14,
                }}>
                Blog post 2
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontweight: 'bold',
                  fontsize: 12,
                  lineheight: 14,
                }}>
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View>
              <Image source={Homepic2} />
            </View>
            <View style={{padding: 10}}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: 12,
                  lineHeight: 14,
                }}>
                Blog post 2
              </Text>
              <Text
                style={{
                  flexWrap: 'wrap',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontweight: 'bold',
                  fontsize: 12,
                  lineheight: 14,
                }}>
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing
              </Text>
            </View>
          </View>
          {/* </ScrollView>
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

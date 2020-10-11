import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {WelcomeIcon} from '../components/ui/Icon';
import Homepic from '../assets/images/homepic.png';
import Homepic1 from '../assets/images/home2.png';
import Homepic2 from '../assets/images/home3.png';
import {useNavigation} from '@react-navigation/native';
import {SemiBoldText} from '../components/ui/Text';

const HomeScreen = () => {
  const [currentWeather, setCurrentWeather] = useState('');
  const navigation = useNavigation();
  useEffect(async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=a4ab8d7f2f40fd2b60d320410dce8b70`,
    );
    const result = await response.json();
    console.log('result', result.main.temp);
    setCurrentWeather(result.main.temp);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#01A560'}}>
      <ScrollView>
        <View style={styles.headerContentAndroid}>
          <TouchableOpacity
            style={{marginLeft: '5%'}}
            onPress={() => navigation.toggleDrawer()}>
            <WelcomeIcon />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 30,
            }}>
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
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: 64,
                  lineHeight: 75,
                  color: '#FFFFFF',
                }}>
                {currentWeather - 273.15}
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: 59,
                  color: '#FFFFFF',
                  lineHeight: 69,
                }}>
                °
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: 39,
                  color: '#FFFFFF',
                  lineHeight: 49,
                }}>
                C
              </Text>
            </View>
          </View>
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
                fontSize: 18,
                lineHeight: 21,
              }}>
              Blogs
            </Text>
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
                    fontWeight: 'bold',
                    fontSize: 12,
                    lineHeight: 14,
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
                    fontWeight: 'bold',
                    fontSize: 12,
                    lineHeight: 14,
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
                    fontWeight: 'bold',
                    fontSize: 12,
                    lineHeight: 14,
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
                    fontWeight: 'bold',
                    fontSize: 12,
                    lineHeight: 14,
                  }}>
                  What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                  printing
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContentAndroid: {
    marginTop: 40,
    // bottom: -15,
    flex: 1,
    // alignItems: 'center',
    flexDirection: 'row',
    // width: '100%',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;

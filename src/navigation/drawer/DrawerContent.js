import React from 'react';
import BlogScreen from '../../screens/BlogScreen';
import HomeScreen from '../../screens/Homescreen';
import WeatherScreen from '../../screens/WeatherScreen';
import MarketPrice from '../../screens/MarketPrice';
import VideoScreen from '../../screens/VideoScreen';
import AboutScreen from '../../screens/AboutScreen';
import ContactExpert from '../../screens/ContactExpert';
import BlogContent from '../../screens/BlogContent';
import Login from '../../screens/Login';
import profileimage from '../../assets/images/drawerimage.png';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NAVIGATION_TO_ABOUT_SCREEN,
  NAVIGATION_TO_CONTACTEXPERT_SCREEN,
  NAVIGATION_TO_HOME_SCREEN,
  NAVIGATION_TO_BLOG_SCREEN,
  NAVIGATION_TO_MARKET_PRICE_SCREEN,
  NAVIGATION_TO_WEATHER_SCREEN,
  NAVIGATION_TO_VIDEO_SCREEN,
} from '../route';

import {
  BlogIcon,
  HomeIcon,
  WeatherIcon,
  MarketIcon,
  VideoIcon,
} from '../../components/ui/Icon';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import LoginScreen from '../../screens/Welcomepage';
import {View, Text, Image} from 'react-native';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        var Icon = null;
        if (route.name === NAVIGATION_TO_HOME_SCREEN) {
          Icon = <HomeIcon color={color} />;
        } else if (route.name === NAVIGATION_TO_BLOG_SCREEN) {
          Icon = <BlogIcon color={color} />;
        } else if (route.name === NAVIGATION_TO_MARKET_PRICE_SCREEN) {
          Icon = <MarketIcon color={color} />;
        } else if (route.name === NAVIGATION_TO_WEATHER_SCREEN) {
          Icon = <WeatherIcon color={color} />;
        } else if (route.name === NAVIGATION_TO_VIDEO_SCREEN) {
          Icon = <VideoIcon color={color} />;
        }
        return Icon;
      },
    })}
    tabBarOptions={{
      // activeBackgroundColor: 'white',
      // inactiveBackgroundColor: '#01A560',
      // activeTintColor: 'blue',
      // inactiveTintColor: 'pink',
      showLabel: false,
    }}>
    {/* // <Tab.Screen
  // options={{title: 'Home'}}
  // name={NAVIGATION_TO_HOME_SCREEN}
  // component={HomeScreen}
  // />
  // <Tab.Screen
  // options={{title: 'Explore'}}
  // name={NAVIGATION_TO_EXPLORE_SCREEN}
  // component={ExploreScreen}
  // />
  // <Tab.Screen
  // options={{title: 'Cart'}}
  // name={'Cart'}
  // component={HomeScreen}
  // />
  // <Tab.Screen
  // options={{title: 'Profile'}}
  // name={NAVIGATION_TO_PROFILE_SCREEN}
  // component={ProfileScreen}
  // />
  // </Tab.Navigator> */}

    <Tab.Screen
      name={NAVIGATION_TO_HOME_SCREEN}
      // name="homepage"
      component={HomeScreen}
      // options={{
      //   title: 'home',
      // }}
    />
    <Tab.Screen
      name={NAVIGATION_TO_MARKET_PRICE_SCREEN}
      component={MarketPrice}
      // options={{
      //   title: 'market',
      // }}
    />
    <Tab.Screen
      name={NAVIGATION_TO_WEATHER_SCREEN}
      component={WeatherScreen}
      // options={{
      //   title: 'weather',
      // }}
    />
    <Tab.Screen
      name={NAVIGATION_TO_VIDEO_SCREEN}
      component={VideoScreen}
      // options={{
      //   title: 'video',
      // }}
    />
    <Tab.Screen
      name={NAVIGATION_TO_BLOG_SCREEN}
      component={BlogScreen}
      // options={{
      //   title: 'blog',
      // }}
    />
  </Tab.Navigator>
);

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          paddingLeft: 10,
          paddingTop: 30,
          borderBottomWidth: 1,
          borderColor: '#C9C9C9',
          paddingBottom: 10,
        }}>
        <View style={{paddingBottom: 20}}>
          <Image source={profileimage} />
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 15,
              lineHeight: 18,
            }}>
            Kisan Tamang
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 10,
              lineHeight: 12,
            }}>
            kisan.codes@gmail.com
          </Text>
        </View>

        {/* <Text>HELLO</Text> */}
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
export const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => CustomDrawerContent(props)}>
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name={NAVIGATION_TO_ABOUT_SCREEN} component={AboutScreen} />
    <Drawer.Screen
      name={NAVIGATION_TO_CONTACTEXPERT_SCREEN}
      component={ContactExpert}
    />
    {/* <Drawer.Screen name={'blogcontent'} component={BlogContent} />
    <Drawer.Screen name={'Login'} component={Login} /> */}
  </Drawer.Navigator>
);

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

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator headerMode="none">
    <Tab.Screen
      name={NAVIGATION_TO_HOME_SCREEN}
      component={HomeScreen}
      options={{
        tabBarIcon: () => <HomeIcon />,
      }}
    />
    <Tab.Screen
      name={NAVIGATION_TO_MARKET_PRICE_SCREEN}
      component={MarketPrice}
      options={{
        tabBarIcon: () => <MarketIcon />,
      }}
    />
    <Tab.Screen
      name={NAVIGATION_TO_WEATHER_SCREEN}
      component={WeatherScreen}
      options={{
        tabBarIcon: () => <WeatherIcon />,
      }}
    />
    <Tab.Screen
      name={NAVIGATION_TO_VIDEO_SCREEN}
      component={VideoScreen}
      options={{
        tabBarIcon: () => <VideoIcon />,
      }}
    />
    <Tab.Screen
      name={NAVIGATION_TO_BLOG_SCREEN}
      component={BlogScreen}
      options={{
        tabBarIcon: () => <BlogIcon />,
      }}
    />
  </Tab.Navigator>
);

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      {/* <DrawerItem label="logout" onPress={() => alert('u r end of project')} /> */}
    </DrawerContentScrollView>
  );
}
export const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => CustomDrawerContent(props)}>
    <Drawer.Screen name="tab" component={TabNavigator} />
    <Drawer.Screen name={NAVIGATION_TO_ABOUT_SCREEN} component={AboutScreen} />
    <Drawer.Screen
      name={NAVIGATION_TO_CONTACTEXPERT_SCREEN}
      component={ContactExpert}
    />
    <Drawer.Screen name={'blogcontent'} component={BlogContent} />
    <Drawer.Screen name={'Login'} component={Login} />
  </Drawer.Navigator>
);

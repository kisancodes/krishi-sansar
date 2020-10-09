import * as React from 'react';
import View from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from '../navigation/drawer/DrawerContent';
import BlogContent from '../screens/BlogContent';
// import WelcomePage from '../screens/Welcomepage';

const MainStack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="welcomepage">
        {/* <MainStack.Screen
          name="welcomepage"
          options={{headerShown: false}}
          component={WelcomePage}
        /> */}
        <MainStack.Screen
          name="Main"
          options={{headerShown: false}}
          component={DrawerNavigator}
        />
        <MainStack.Screen name="blogcontent" component={BlogContent} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

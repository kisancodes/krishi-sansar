/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import {MainNavigation} from './src/navigation/MainNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
console.disableYellowBox = true;

const App = () => {
  useEffect(() => {
    // Update the document title using the browser API
    SplashScreen.hide();
  });

  return (
    <SafeAreaProvider>
      <View style={{flex: 1}}>
        <MainNavigation />
      </View>
    </SafeAreaProvider>
  );
};

export default App;

import React from 'react';
import {View, StyleSheet, TouchableOpacity, Platform, Text} from 'react-native';

import {WelcomeIcon} from '../ui/Icon';

import {SemiBoldText} from '../ui/Text';
import {useNavigation} from '@react-navigation/native';
// import {DrawerActions} from '@react-navigation/native';

const Header = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {/* <WelcomeIcon /> */}
      <View style={styles.headerContentAndroid}>
        <TouchableOpacity
          style={{marginLeft: '5%'}}
          onPress={() => navigation.toggleDrawer()}>
          <WelcomeIcon />
        </TouchableOpacity>
        {/* </View> */}
        <View style={styles.headerTitle}>
          <SemiBoldText text={props.title} style={styles.headerTitleText} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    alignItems: 'center',
    width: '100%',
    height: 55,
    // height: '13%',
    // width: '100%',
    backgroundColor: '#01A560',
  },

  headerContentAndroid: {
    // bottom: -15,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    // width: '100%',
    justifyContent: 'space-between',
  },

  hamburger: {
    width: 40,
    left: 14,
    bottom: 1,
  },
  headerLogo: {
    justifyContent: 'center',
    right: 20,
    bottom: 3,
  },
  headerTitle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#FFFFFF',
    lineHeight: 21,
  },
  backButtonStyle: {
    bottom: 18,
  },
});
export default Header;

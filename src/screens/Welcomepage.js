import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

// import {useDispatch} from 'react-redux';
// import {useNavigation} from '@react-navigation/native';
import LogoWelcome from '../assets/images/WelcomeLogo.png';
// import {useNavigation} from '@react-navigation/native';:use child component
import HomeScreen from '../screens/Homescreen';
import {NAVIGATION_TO_HOME_SCREEN} from '.././navigation/route';
const LoginScreen = ({navigation}) => {
  // const [navigatelogin, setNavigateLogin] = useState(<Login />);
  // const navigation = useNavigation();
  // useEffect(() => {
  //  const timeoutHandle = setTimeout(()=>{
  //     // Add your logic for the transition
  //    .navigation.navigate('navigation.navigate('Main'));
  // }, 5000);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.navigate(('Main')
  //   }, 1000);
  //   )}

  return (
    // <View style={styles.logincontainer}>
    <View style={styles.logincontainer}>
      {/* <Text>HELLO</Text> */}
      <Image source={LogoWelcome} />
      <Button title="achikha " />
      {/* <TouchableOpacity>
        <View
          style={{
            bottom: -230,
            justifyContent: 'flex-end',
            backgroundColor: 'red',
            width: '70%',
          }}>
          <View
            style={{
              // width: '70%',
              height: 50,
              // borderStyle: 'medium',
              borderWidth: 5,
              // borderWidth:1,
              borderColor: 'white',
              borderRadius: 24,

              // backgroundColor: 'white',
              alignItems: 'center',
            justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 13,
                lineHeight: 15,
                color: '#FFFFFF',
              }}>
              LETS'S GO
            </Text>
          </View>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  cloudlogo: {
    width: 80,
    height: 80,
  },
  logincontainer: {
    alignItems: 'center',
    backgroundColor: '#01A560',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },
  logintxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 15,
    opacity: 0.5,
  },
  user: {
    marginTop: 10,
    marginLeft: 0,
    paddingLeft: 45,
    marginHorizontal: 25,
    borderRadius: 50,
  },
  inputuserlogo: {
    position: 'absolute',
    // display:"flex",
    // alignItems:"center",
    // justifyContent:"center",
    top: 17,
    left: 20,
  },
  btn: {
    backgroundColor: '#1c4966',
    // width: WIDTH - 55,
    width: 500,
    height: 40,
    borderRadius: 50,
    fontSize: 15,
    paddingLeft: 45,
    color: 'blue',
    justifyContent: 'center',
    marginTop: 20,
  },
  btntxt: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: 'center',
    marginRight: 20,
  },
  errormessage: {
    fontSize: 10,
    color: 'red',
  },
  btn: {
    display: 'flex',
    marginTop: 20,
  },
});
// const mapStateToProps = (state) => {
//   return {
//     loginData: state.login,
//   };
// };

export default LoginScreen;

import React from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import CustomTextInput from '../components/ui/TextInput';
const Login = () => {
  return (
    <View>
      <View style={{padding: 10}}>
        <Text style={{marginBottom: 10}}>Full Name</Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'blue',
            // width: '80%',
            // flexDirection: 'row',
            // justifyContent: 'center',
            // alignContent: 'center',
          }}>
          <CustomTextInput />
        </View>

        <Text style={{marginBottom: 10, marginTop: 10}}>Phone Number</Text>
        <CustomTextInput />
        <Text style={{marginBottom: 10, marginTop: 10}}>Password</Text>
        <CustomTextInput />
        <Text style={{marginBottom: 10, marginTop: 10}}>Confirm Password</Text>
        <CustomTextInput />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View
          style={{
            width: '80%',
            height: 50,
            borderRadius: 24,
            backgroundColor: '#01A560',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Register</Text>
        </View>
      </View>
    </View>
  );
};
export default Login;

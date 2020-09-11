import React from 'react';
import {View, TextInput, Text} from 'react-native';
import CustomTextInput from '../components/ui/TextInput';
const Login = () => {
  return (
    <View>
      <View style={{padding: 10}}>
        <Text>Full Name</Text>
        <CustomTextInput />
        <Text>Phone Number</Text>
        <CustomTextInput />
        <Text>Password</Text>
        <CustomTextInput />
        <Text>Confirm Password</Text>
        <CustomTextInput />
      </View>
    </View>
  );
};
export default Login;

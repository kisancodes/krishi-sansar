import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const CustomTextInput = () => {
  return (
    <View>
      <TextInput
        style={{
          width: '80%',
          height: 50,
          borderRadius: 24,
          color: 'pink',
          backgroundColor: 'red',
          fontSize: 18,
          // lineHeight: 20,
          // paddingHorizontal: 20,
        }}
        placeholder="Type here to translate!"
      />
    </View>
  );
};
export default CustomTextInput;

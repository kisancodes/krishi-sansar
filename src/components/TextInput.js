import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import theme from '~/components/theme/Style';

const TextInput = () => {
  return (
    <View>
      <TextInput
        style={[
          styles.textInputStyles,
          props.hasError ? styles.validationOnStyle : null,
          props.multiline ? textHeightStyle() : null,
        ]}
        placeholder={props.placeholder}
        placeholderTextColor={theme.fontColor}
        selectionColor={theme.primaryColor}
        secureTextEntry={props.password ? true : false}
        keyboardType={props.KeyboardType ? this.props.KeyboardType : 'default'}
        returnKeyLabel={
          props.returnKeyLabel ? this.props.returnKeyLabel : 'Next'
        }
        returnKeyType={props.returnKeyType ? this.props.returnKeyType : 'next'}
        blurOnSubmit={props.blurOnSubmit ? this.blurOnSubmit : false}
        autoFocus={state.autoFocus}
        ref={props.refs}
        onSubmitEditing={
          props.onSubmitEditing ? this.props.onSubmitEditing : null
        }
        editable={props.editable ? false : true}
        value={props.value !== '' ? this.props.value : null}
        multiline={props.multiline ? this.props.multiline : false}
        numberOfLines={props.multiline ? 4 : null}
        // onChangeText={(text) => {
        //   this.setState({text});
        //   this.props.onChangeText(text);
        // }}
      />
    </View>
  );
};

function textHeightStyle() {
  return {
    height: 127,
    textAlignVertical: 'top',
    paddingTop: 20,
  };
}

function shadowViewStyle() {
  return {
    shadowColor: '#666666',
    shadowOpacity: 0.28,
    shadowOffset: {width: 0, height: 0},
  };
}

function inputTextReasonValidation(textAreaHasError, multiline) {
  return {
    borderWidth: textAreaHasError && multiline ? 1 : 0.1,
    borderColor: textAreaHasError && multiline ? 'red' : 'transparent',
    shadowRadius: textAreaHasError && multiline ? 0 : 5,
  };
}

const styles = StyleSheet.create({
  textInputStyles: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    color: theme.fontColor,
    fontFamily: theme.inputFont,
    backgroundColor: theme.white,
    fontSize: 18,
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  validationOnStyle: {
    left: -1,
    height: 53,
    width: '101%',
    borderWidth: 1,
    borderColor: 'red',
  },
  inputParent: {
    height: 52,
    paddingHorizontal: 1,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: theme.white,
  },
});
export default TextInput;

import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

import theme from '../theme/Style';

export class RegularText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Text
        onPress={this.props.onPress}
        style={[styles.regularText, this.props.style]}>
        {this.props.text}
      </Text>
    );
  }
}

export class MediumText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Text style={[styles.mediumText, this.props.style]}>
        {this.props.text}
      </Text>
    );
  }
}

export class SemiBoldText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Text style={[styles.semiboldText, this.props.style]}>
        {this.props.text}
      </Text>
    );
  }
}

export class BoldText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Text style={[styles.boldText, this.props.style]}>{this.props.text}</Text>
    );
  }
}

export class LightText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Text style={[styles.lightText, this.props.style]}>
        {this.props.text}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  lightText: {
    fontFamily: theme.themeFontLight,
    fontSize: theme.baseFontSize,
    lineHeight: 18,
    color: theme.fontColor,
  },
  regularText: {
    fontFamily: theme.themeFontRegular,
    fontSize: theme.fontSizeRegular,
    lineHeight: 18,
    color: theme.fontColor,
  },
  mediumText: {
    fontFamily: theme.themeFontMedium,
    fontSize: theme.fontSizeMedium,
    lineHeight: 22,
    color: theme.fontDark,
  },
  semiboldText: {
    fontFamily: theme.themeFontSemiBold,
    fontSize: theme.fontSizeSemiBold,
    lineHeight: 24,
  },
  boldText: {
    fontFamily: theme.themeFontBold,
    fontSize: theme.fontSizeBold,
    lineHeight: 28,
  },
});

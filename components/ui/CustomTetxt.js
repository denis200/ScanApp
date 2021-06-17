import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const CustomText = (props) => (
  <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  default: {
    fontFamily: 'RobotoCondensed-Italic',
  },
});

export default CustomText;

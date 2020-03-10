import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../Colors';

const MyText = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: Colors.dark,
    fontSize: 14,
  },
});

export default MyText;

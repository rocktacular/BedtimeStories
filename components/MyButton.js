import React from 'react';
import {StyleSheet, Button, TouchableOpacity} from 'react-native';
import Colors from '../Colors';
import MyText from './MyText';

const MyButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress} title={title}>
      <MyText style={[styles.text]}>Search</MyText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
  },
  text: {
    fontSize: 16,
  },
});

export default MyButton;

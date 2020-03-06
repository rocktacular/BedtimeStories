import React from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, View, TextInput} from 'react-native';
import MyText from './MyText';
import Colors from '../Colors';

const MyTextInput = ({onTextChange}) => {
  return (
    <View style={styles.container}>
      <MyText style={styles.label}>Search Term</MyText>
      <TextInput
        style={styles.input}
        onChangeText={onTextChange && onTextChange()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 12,
  },
  input: {
    width: '100%',
    height: 24,
    backgroundColor: Colors.bright,
    color: Colors.dark,
    paddingHorizontal: 5,
  },
});

MyTextInput.propTypes = {
  onTextChange: PropTypes.func.isRequired,
};
export default MyTextInput;

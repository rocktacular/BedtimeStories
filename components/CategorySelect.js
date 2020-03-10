import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import Colors from '../Colors';
import MyText from './MyText';

const CategorySelect = ({active, categories, setCategory}) => {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => setCategory(index)}
            style={[
              styles.selectOption,
              active === index ? styles.activeSelectOption : null,
            ]}>
            <MyText style={styles.text}>{categories[index]}</MyText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  selectOption: {
    flex: 1,
    padding: 5,
  },
  activeSelectOption: {
    backgroundColor: Colors.highlight,
  },
  text: {
    textAlign: 'center',
  },
});

export default CategorySelect;

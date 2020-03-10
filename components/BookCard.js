import React from 'react';
import {View, StyleSheet} from 'react-native';

import MyText from './MyText';

const BookCard = ({book}) => {
  // only render if title and author
  if (!book.title || !book.author_name) return null;
  return (
    <View>
      <MyText>
        {book.title} ({book.author_name && book.author_name[0]})
      </MyText>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BookCard;

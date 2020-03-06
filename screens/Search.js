import React, {useState} from 'react';
import {
  View,
  Button,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import MyText from '../components/MyText';
import MyTextInput from '../components/MyTextInput';
import MyButton from '../components/MyButton';

import OpenLibraryService from '../services/OpenLibraryService';

// Make own component
const Result = ({book}) => {
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

// Make own component
const CategorySelect = ({category, setCategory}) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setCategory('author')}>
        <MyText>Author {category === 'author' ? 'X' : null}</MyText>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setCategory('title')}>
        <MyText>Title {category === 'title' ? 'X' : null}</MyText>
      </TouchableWithoutFeedback>
    </View>
  );
};

const Search = ({navigation}) => {
  // STATE
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('title');
  const [results, setResults] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  // HANDLERS
  const search = (query, category) => {
    setLoadingSearch(true);
    OpenLibraryService.search(query, category).then(results => {
      console.log('results', results);
      setResults(results);
      setLoadingSearch(false);
    });
  };
  const onTextChange = () => str => {
    setSearchTerm(str);
  };
  const onCategoryChange = () => setVal => {
    setSearchCategory(setVal);
  };
  return (
    <ScreenContainer loading={loadingSearch}>
      <CategorySelect
        category={searchCategory}
        setCategory={onCategoryChange()}
      />
      <MyTextInput onTextChange={onTextChange} />
      <MyButton
        title="Search"
        onPress={() => search(searchTerm, searchCategory)}
      />
      <FlatList
        data={results}
        renderItem={({item}) => <Result book={item} />}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});

export default Search;

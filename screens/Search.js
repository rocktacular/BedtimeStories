import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';

import OpenLibraryService from '../services/OpenLibraryService';

// Make own component
const Result = ({book}) => {
  // only render if title and author
  if (!book.title || !book.author_name) return null;
  return (
    <View>
      <Text>
        {book.title} ({book.author_name && book.author_name[0]})
      </Text>
    </View>
  );
};

// Make own component
const CategorySelect = ({category, setCategory}) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setCategory('author')}>
        <Text>Author {category === 'author' ? 'X' : null}</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setCategory('title')}>
        <Text>Title {category === 'title' ? 'X' : null}</Text>
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
      <Text>Search</Text>
      <TextInput
        style={{width: 100, height: 20, backgroundColor: 'white'}}
        onChangeText={onTextChange()}
      />
      <CategorySelect
        category={searchCategory}
        setCategory={onCategoryChange()}
      />
      <Button
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

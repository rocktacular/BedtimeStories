import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import MyText from '../components/MyText';
import MyTextInput from '../components/MyTextInput';
import MyButton from '../components/MyButton';
import CategorySelect from '../components/CategorySelect';

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

const categories = ['Author', 'Title'];

const Search = ({navigation}) => {
  // STATE
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState(1);
  const [results, setResults] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  // HANDLERS
  const search = (query, categoryIndex) => {
    setLoadingSearch(true);
    const category = categories[categoryIndex].toLowerCase();
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
        active={searchCategory}
        categories={categories}
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

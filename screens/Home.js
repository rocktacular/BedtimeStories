import React from 'react';
import {Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <Button
      title="Go to About Page"
      onPress={() => navigation.navigate('About', {name: 'Jane'})}
    />
  );
};

export default Home;

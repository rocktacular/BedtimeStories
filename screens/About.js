import React from 'react';
import {View, Text, Button} from 'react-native';
import {get} from 'lodash';

const About = props => {
  console.log('props', props);
  const {navigation} = props;
  const name = get(props, 'route.params.name');
  console.log('name', name);
  return (
    <View>
      <Text>{name}</Text>
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default About;

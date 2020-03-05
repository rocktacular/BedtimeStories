import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ScreenContainer = ({children, loading}) => {
  return (
    <View style={styles.container}>
      {children}
      {loading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccccc',
    position: 'relative',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: '#800080',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {},
});

export default ScreenContainer;

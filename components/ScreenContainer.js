import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../Colors';

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
    backgroundColor: Colors.primary,
    position: 'relative',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 24,
  },
});

export default ScreenContainer;

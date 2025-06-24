import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WatchList from '../components/WatchList';

const WatchListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Watch List</Text>
      <WatchList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 24,
    marginBottom: 24
  }
});

export default WatchListScreen;

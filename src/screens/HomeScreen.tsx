import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, 'Home'> {}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Walmart Barcode Scanner</Text>
      <Button title="Scan Product" onPress={() => navigation.navigate('Scan')} />
      <Button title="Watch List" onPress={() => navigation.navigate('WatchList')} />
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

export default HomeScreen;

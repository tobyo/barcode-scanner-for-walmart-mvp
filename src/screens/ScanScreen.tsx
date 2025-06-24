import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BarcodeScanner from '../components/BarcodeScanner';

const ScanScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan a Product</Text>
      <BarcodeScanner />
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

export default ScanScreen;

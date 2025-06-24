import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

const BarcodeScanner: React.FC = () => {
  const onBarCodeRead = (e: any) => {
    // Handle barcode read logic here
    console.log('Barcode value is', e.data);
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        onBarCodeRead={onBarCodeRead}
        captureAudio={false}
      />
      <Text style={styles.instruction}>Align the barcode within the frame</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  instruction: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff',
    padding: 10,
    borderRadius: 5
  }
});

export default BarcodeScanner;

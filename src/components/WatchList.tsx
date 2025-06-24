import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const WatchList: React.FC = () => {
  const items = [
    { id: '1', name: 'Item 1', price: '$10' },
    { id: '2', name: 'Item 2', price: '$20' }
  ];

  const renderItem = ({ item }: { item: { id: string; name: string; price: string } }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  itemName: {
    fontSize: 18
  },
  itemPrice: {
    fontSize: 18
  }
});

export default WatchList;

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const PlatformManagement = () => {
  const [platforms] = useState([
    { id: '1', name: 'Platform 1' },
    { id: '2', name: 'Platform 2' },
    { id: '3', name: 'Platform 3' },
  ]);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Platform Management Screen
      </Text>

      <FlatList
        data={platforms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name}
          </Text>
        )}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },

  item: {
    fontSize: 18,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#F5F6FA',
    borderRadius: 8,
    width: '100%',
  },
});

export default PlatformManagement;
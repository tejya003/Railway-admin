import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';

const PassengerManagement = () => {
    const [passengers, setPassengers] = useState([
    
  ]);

const [newPassenger, setNewPassenger] = useState('');

  const addPassenger = () => {
    if (newPassenger.trim() === '') return;
    setPassengers([...passengers, { id: Date.now().toString(), name: newPassenger }]);
    setNewPassenger('');
  };

  const deletePassenger = (id) => {
    setPassengers(passengers.filter(p => p.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Passenger Management Screen</Text>

<TextInput
        style={styles.title}
        placeholder="Enter passenger name"
        value={newPassenger}
        onChangeText={setNewPassenger}
      />
      <Button title="Add Passenger" onPress={addPassenger} />

   <FlatList
        data={passengers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.row}>
          <Text style={styles.item}>{item.name}</Text>
           <Button title="Delete" onPress={() => deletePassenger(item.id)} />
        </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },

  list: {
    width: '100%',
    marginTop: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#F5F6FA',
    borderRadius: 8,
  },

  item: {
    fontSize: 17,
    color: '#333',
    flex: 1,
  },
});

export default PassengerManagement;

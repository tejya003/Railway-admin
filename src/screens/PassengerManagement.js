import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';

const PassengerManagement = () => {
    const [passengers, setPassengers] = useState([
    { id: '1', name: 'Rahul Patil' },
    { id: '2', name: 'Sneha Joshi' },
    { id: '3', name: 'Amit Deshmukh' },
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
        style={styles.input}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default PassengerManagement;

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';

const StaffManagement = () => {
   const [staff, setStaff] = useState([
        
    ]);

    const [newName, setNewName] = useState('');
    const [newRole, setNewRole] = useState('');

    const addStaff = () => {
        if (newName.trim() === '' || newRole.trim() === '') return;
        setStaff([...staff, { id: Date.now().toString(), name: newName, role: newRole }]);
        setNewName('');
        setNewRole('');
    };

    const deleteStaff = (id) => {
        setStaff(staff.filter(s => s.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Staff Management Screen</Text>

            <TextInput style={styles.input} placeholder="Enter staff name" value={newName} onChangeText={setNewName} />
            <TextInput style={styles.input} placeholder="Enter staff role" value={newRole} onChangeText={setNewRole} />
            <Button title="Add Staff" onPress={addStaff} />

            <FlatList
                data={staff}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text style={styles.item}>{item.name} - {item.role}</Text>
                        <Button title="Delete" onPress={() => deleteStaff(item.id)} />
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

export default StaffManagement;

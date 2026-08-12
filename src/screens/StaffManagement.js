import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';

const StaffManagement = () => {
   const [staff, setStaff] = useState([
        { id: '1', name: 'Suresh Pawar', role: 'Ticket Collector' },
        { id: '2', name: 'Meena Kulkarni', role: 'Station Master' },
        { id: '3', name: 'Vikas Shinde', role: 'Guard' },
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

export default StaffManagement;

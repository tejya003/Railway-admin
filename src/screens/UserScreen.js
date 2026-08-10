import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const UserScreen = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        User Management
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+ Add User</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>✏️ Edit User</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🔍 Search User</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🗑️ Delete User</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 20,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#1E88E5',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default UserScreen;
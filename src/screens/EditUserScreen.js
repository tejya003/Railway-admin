import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const EditUserScreen = () => {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdateUser = () => {
    if (
      userId.trim() === '' ||
      name.trim() === '' ||
      email.trim() === ''
    ) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    Alert.alert(
      'Success',
      'User updated successfully!'
    );

    setUserId('');
    setName('');
    setEmail('');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Edit User
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter user name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleUpdateUser}
      >
        <Text style={styles.buttonText}>
          ✏️ Update User
        </Text>
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

  input: {
    backgroundColor: '#fff',
    height: 52,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#1E88E5',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default EditUserScreen;
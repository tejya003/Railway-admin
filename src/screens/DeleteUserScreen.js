import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const DeleteUserScreen = () => {
  const [userId, setUserId] = useState('');

  const handleDeleteUser = () => {
    if (userId.trim() === '') {
      Alert.alert('Error', 'Please enter User ID');
      return;
    }

    Alert.alert(
      'Delete User',
      'Are you sure you want to delete User ' + userId + '?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            Alert.alert(
              'Success',
              'User deleted successfully!'
            );
            setUserId('');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Delete User
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleDeleteUser}
      >
        <Text style={styles.buttonText}>
          🗑️ Delete User
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

export default DeleteUserScreen;
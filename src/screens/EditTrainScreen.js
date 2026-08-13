import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const EditTrainScreen = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [trainName, setTrainName] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSave = () => {
    if (
      trainNumber.trim() === '' ||
      trainName.trim() === '' ||
      from.trim() === '' ||
      to.trim() === ''
    ) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    Alert.alert(
      'Success',
      'Train details updated successfully'
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Edit Train
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Train Number"
        value={trainNumber}
        onChangeText={setTrainNumber}
        keyboardType="number-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Train Name"
        value={trainName}
        onChangeText={setTrainName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter From Station"
        value={from}
        onChangeText={setFrom}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter To Station"
        value={to}
        onChangeText={setTo}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>
          Save Changes
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
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#1E88E5',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default EditTrainScreen;
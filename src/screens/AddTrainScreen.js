import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

const AddTrainScreen = ({ navigation }) => {
  const [trainNumber, setTrainNumber] = useState('');
  const [trainName, setTrainName] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  const handleAddTrain = () => {
    if (
      trainNumber === '' ||
      trainName === '' ||
      from === '' ||
      to === '' ||
      departure === '' ||
      arrival === ''
    ) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    Alert.alert('Success', 'Train added successfully');

    navigation.goBack();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Add Train</Text>

      <TextInput
        placeholder="Enter Train Number"
        style={styles.input}
        value={trainNumber}
        onChangeText={setTrainNumber}
        keyboardType="number-pad"
      />

      <TextInput
        placeholder="Enter Train Name"
        style={styles.input}
        value={trainName}
        onChangeText={setTrainName}
      />

      <TextInput
        placeholder="Enter From Station"
        style={styles.input}
        value={from}
        onChangeText={setFrom}
      />

      <TextInput
        placeholder="Enter To Station"
        style={styles.input}
        value={to}
        onChangeText={setTo}
      />

      <TextInput
        placeholder="Departure Time"
        style={styles.input}
        value={departure}
        onChangeText={setDeparture}
      />

      <TextInput
        placeholder="Arrival Time"
        style={styles.input}
        value={arrival}
        onChangeText={setArrival}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddTrain}
      >
        <Text style={styles.buttonText}>Add Train</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: '#F5F6FA',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#222',
  },

  input: {
    height: 52,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    elevation: 2,
  },

  button: {
    backgroundColor: '#1E88E5',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddTrainScreen;
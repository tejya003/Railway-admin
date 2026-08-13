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

import { useLanguage } from './LanguageContext';

const AddTrainScreen = ({ navigation, route }) => {

  const { t } = useLanguage();

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
      Alert.alert(
        t.error,
        t.fillAllFields
      );
      return;
    }

    const newTrain = {
  number: trainNumber,
  name: trainName,
  from: from,
  to: to,
  departure: departure,
  arrival: arrival,
};

    route.params?.onAddTrain(newTrain);

    Alert.alert(
      t.success,
      t.trainAddedSuccessfully
    );

    navigation.goBack();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >

      {/* Title */}
      <Text style={styles.title}>
        {t.addTrain}
      </Text>

      {/* Train Number */}
      <TextInput
        placeholder={t.enterTrainNumber}
        style={styles.input}
        value={trainNumber}
        onChangeText={setTrainNumber}
        keyboardType="number-pad"
      />

      {/* Train Name */}
      <TextInput
        placeholder={t.enterTrainName}
        style={styles.input}
        value={trainName}
        onChangeText={setTrainName}
      />

      {/* From Station */}
      <TextInput
        placeholder={t.enterFromStation}
        style={styles.input}
        value={from}
        onChangeText={setFrom}
      />

      {/* To Station */}
      <TextInput
        placeholder={t.enterToStation}
        style={styles.input}
        value={to}
        onChangeText={setTo}
      />

      {/* Departure */}
      <TextInput
        placeholder={t.departureTime}
        style={styles.input}
        value={departure}
        onChangeText={setDeparture}
      />

      {/* Arrival */}
      <TextInput
        placeholder={t.arrivalTime}
        style={styles.input}
        value={arrival}
        onChangeText={setArrival}
      />

      {/* Add Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleAddTrain}
      >
        <Text style={styles.buttonText}>
          {t.addTrain}
        </Text>
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
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const CancelBookingScreen = () => {
  const [bookingId, setBookingId] = useState('');

  const handleCancel = () => {
    if (bookingId.trim() === '') {
      Alert.alert('Error', 'Please enter Booking ID');
      return;
    }

    Alert.alert(
      'Booking Cancelled',
      'Booking ' + bookingId + ' has been cancelled.'
    );

    setBookingId('');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Cancel Booking
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Booking ID"
        value={bookingId}
        onChangeText={setBookingId}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleCancel}
      >
        <Text style={styles.buttonText}>
          ❌ Cancel Booking
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

export default CancelBookingScreen;
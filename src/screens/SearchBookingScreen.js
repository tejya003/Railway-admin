import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SearchBookingScreen = () => {
  const [bookingId, setBookingId] = useState('');

  const handleSearch = () => {
    if (bookingId.trim() === '') {
      alert('Please enter Booking ID');
      return;
    }

    alert('Searching Booking: ' + bookingId);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Search Booking
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Booking ID"
        value={bookingId}
        onChangeText={setBookingId}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSearch}
      >
        <Text style={styles.buttonText}>
          🔍 Search
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

export default SearchBookingScreen;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ReportScreen = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Reports
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📊 Booking Report</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🚆 Train Report</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>👥 User Report</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>💰 Revenue Report</Text>
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

export default ReportScreen;
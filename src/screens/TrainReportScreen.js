import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrainReportScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚆 Train Report</Text>

      <Text style={styles.text}>
        Total Trains: 25
      </Text>

      <Text style={styles.text}>
        Active Trains: 25
      </Text>

      <Text style={styles.text}>
        Cancelled Trains: 00
      </Text>
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
    marginBottom: 30,
    color: '#222',
  },

  text: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 17,
    color: '#222',
  },
});

export default TrainReportScreen;
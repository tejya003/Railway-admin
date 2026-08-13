import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserReportScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👥 User Report</Text>

      <Text style={styles.text}>
        Total Users: 00
      </Text>

      <Text style={styles.text}>
        Active Users: 00
      </Text>

      <Text style={styles.text}>
        New Users: 00
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

export default UserReportScreen;
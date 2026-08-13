import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RevenueReportScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💰 Revenue Report</Text>

      <Text style={styles.text}>
        Total Revenue: ₹0
      </Text>

      <Text style={styles.text}>
        Today's Revenue: ₹0
      </Text>

      <Text style={styles.text}>
        Monthly Revenue: ₹0
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

export default RevenueReportScreen;
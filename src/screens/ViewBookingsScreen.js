import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const ViewBookingsScreen = () => {

  const bookings = [
    {
      id: '1',
      passenger: 'Rahul Patil',
      train: '12001 - Rajdhani Express',
      from: 'Mumbai',
      to: 'Delhi',
    },
    {
      id: '2',
      passenger: 'Sneha Joshi',
      train: '12123 - Deccan Queen',
      from: 'Mumbai',
      to: 'Pune',
    },
    {
      id: '3',
      passenger: 'Amit Deshmukh',
      train: '11010 - Sinhagad Express',
      from: 'Pune',
      to: 'Mumbai',
    },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        View Bookings
      </Text>

      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text style={styles.passenger}>
              Passenger: {item.passenger}
            </Text>

            <Text style={styles.train}>
              Train: {item.train}
            </Text>

            <Text style={styles.route}>
              {item.from} → {item.to}
            </Text>

          </View>
        )}
      />

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
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },

  passenger: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },

  train: {
    fontSize: 15,
    color: '#444',
    marginBottom: 6,
  },

  route: {
    fontSize: 15,
    color: '#666',
  },

});

export default ViewBookingsScreen;
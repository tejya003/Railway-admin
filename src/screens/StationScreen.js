import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Station Management
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PlatformManagement')}
      >
        <Text style={styles.buttonText}>
          Platform Management
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PassengerManagement')}
      >
        <Text style={styles.buttonText}>
          Passenger Management
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StaffManagement')}
      >
        <Text style={styles.buttonText}>
          Staff Management
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AnnouncementManagement')}
      >
        <Text style={styles.buttonText}>
          Announcement Management
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ComplaintFeedback')}
      >
        <Text style={styles.buttonText}>
          Complaint/Feedback
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

export default StationScreen;
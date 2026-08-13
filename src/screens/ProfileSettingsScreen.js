import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Profile Settings</Text>

      <Text style={styles.text}>
        Manage your profile information
      </Text>

      <Text style={styles.text}>
        Name: Admin
      </Text>

      <Text style={styles.text}>
        Email: admin@gmail.com
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
    color: '#222',
    marginBottom: 30,
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

export default ProfileSettingsScreen;
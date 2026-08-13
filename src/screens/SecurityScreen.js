import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const SecurityScreen = () => {

  const handleChangePassword = () => {
    Alert.alert(
      'Security',
      'Change Password option selected'
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        🔒 Security
      </Text>

      <Text style={styles.text}>
        Manage your account security
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleChangePassword}
      >
        <Text style={styles.buttonText}>
          🔑 Change Password
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
    marginBottom: 30,
  },

  text: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 17,
    color: '#222',
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

export default SecurityScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const NotificationsScreen = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        🔔 Notifications
      </Text>

      <View style={styles.row}>
        <Text style={styles.text}>
          Enable Notifications
        </Text>

        <Switch
          value={enabled}
          onValueChange={setEnabled}
        />
      </View>

      <Text style={styles.status}>
        Notifications are {enabled ? 'ON' : 'OFF'}
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

  row: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    fontSize: 17,
    color: '#222',
  },

  status: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
});

export default NotificationsScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
const AnnouncementManagement = () => {
    const [announcements, setAnnouncements] = useState([
    { id: '1', message: 'Train delayed by 30 minutes' },
    { id: '2', message: 'Platform change: Train 123 → Platform 2' },
    { id: '3', message: 'New train added to schedule' },
  ]);

const [newAnnouncement, setNewAnnouncement] = useState('');

  const addAnnouncement = () => {
    if (newAnnouncement.trim() === '') return;
    setAnnouncements([...announcements, { id: Date.now().toString(), message: newAnnouncement }]);
    setNewAnnouncement('');
  };

  const deleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter(a => a.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter announcement"
        value={newAnnouncement}
        onChangeText={setNewAnnouncement}
      />
    
    <TextInput style={styles.input} placeholder="Enter announcement" value={newAnnouncement} onChangeText={setNewAnnouncement}/>
      <Button title="Add Announcement" onPress={addAnnouncement} />
    
    <FlatList
        data={announcements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.row}>
          <Text style={styles.item}>{item.message}</Text>
          <Button title="Delete" onPress={() => deleteAnnouncement(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default AnnouncementManagement;

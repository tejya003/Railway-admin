import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
const AnnouncementManagement = () => {
    const [announcements, setAnnouncements] = useState([
   
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
    backgroundColor: '#fff',
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },

  list: {
    width: '100%',
    marginTop: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#F5F6FA',
    borderRadius: 8,
  },

  item: {
    fontSize: 17,
    color: '#333',
    flex: 1,
  },
});

export default AnnouncementManagement;

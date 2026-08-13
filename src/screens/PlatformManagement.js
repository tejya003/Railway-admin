import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from 'react-native';

const PlatformManagement = () => {
  const [platforms, setPlatforms] = useState([
   
  ]);

  const [newPlatform, setNewPlatform] = useState('');

  const addPlatform = () => {
    if (newPlatform.trim() === '') {
      return;
    }

    setPlatforms([
      ...platforms,
      {
        id: Date.now().toString(),
        name: newPlatform,
      },
    ]);

    setNewPlatform('');
  };

  const deletePlatform = (id) => {
    setPlatforms(
      platforms.filter((platform) => platform.id !== id)
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Platform Management
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter platform name"
        value={newPlatform}
        onChangeText={setNewPlatform}
      />

      <Button
        title="Add Platform"
        onPress={addPlatform}
      />

      <FlatList
        style={styles.list}
        data={platforms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>

            <Text style={styles.item}>
              {item.name}
            </Text>

            <Button
              title="Delete"
              onPress={() => deletePlatform(item.id)}
            />

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

export default PlatformManagement;
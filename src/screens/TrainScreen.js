import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


import { useLanguage } from './LanguageContext';

const trains = [
  {
    number: '12001',
    name: 'Rajdhani Express',
    from: 'Mumbai',
    to: 'Delhi',
  },
  {
    number: '12002',
    name: 'Shatabdi Express',
    from: 'Delhi',
    to: 'Bhopal',
  },
  {
    number: '12201',
    name: 'Duronto Express',
    from: 'Mumbai',
    to: 'Nagpur',
  },
  {
    number: '12123',
    name: 'Deccan Queen',
    from: 'Mumbai',
    to: 'Pune',
  },
  {
    number: '12124',
    name: 'Intercity Express',
    from: 'Pune',
    to: 'Mumbai',
  },
  {
    number: '11010',
    name: 'Sinhagad Express',
    from: 'Pune',
    to: 'Mumbai',
  },
  {
    number: '11029',
    name: 'Koyna Express',
    from: 'Mumbai',
    to: 'Kolhapur',
  },
  {
    number: '11030',
    name: 'Koyna Express',
    from: 'Kolhapur',
    to: 'Mumbai',
  },
  {
    number: '12115',
    name: 'Siddheshwar Express',
    from: 'Mumbai',
    to: 'Solapur',
  },
  {
    number: '12116',
    name: 'Siddheshwar Express',
    from: 'Solapur',
    to: 'Mumbai',
  },
  {
    number: '12627',
    name: 'Karnataka Express',
    from: 'Bengaluru',
    to: 'Delhi',
  },
  {
    number: '12628',
    name: 'Karnataka Express',
    from: 'Delhi',
    to: 'Bengaluru',
  },
  {
    number: '12951',
    name: 'Mumbai Rajdhani',
    from: 'Mumbai',
    to: 'Delhi',
  },
  {
    number: '12952',
    name: 'Mumbai Rajdhani',
    from: 'Delhi',
    to: 'Mumbai',
  },
  {
    number: '12809',
    name: 'Howrah Mail',
    from: 'Mumbai',
    to: 'Howrah',
  },
  {
    number: '12810',
    name: 'Howrah Mail',
    from: 'Howrah',
    to: 'Mumbai',
  },
  {
    number: '12295',
    name: 'Sanghamitra Express',
    from: 'Bengaluru',
    to: 'Patna',
  },
  {
    number: '12296',
    name: 'Sanghamitra Express',
    from: 'Patna',
    to: 'Bengaluru',
  },
  {
    number: '11019',
    name: 'Konark Express',
    from: 'Mumbai',
    to: 'Bhubaneswar',
  },
  {
    number: '11020',
    name: 'Konark Express',
    from: 'Bhubaneswar',
    to: 'Mumbai',
  },
  {
    number: '12137',
    name: 'Punjab Mail',
    from: 'Mumbai',
    to: 'Firozpur',
  },
  {
    number: '12138',
    name: 'Punjab Mail',
    from: 'Firozpur',
    to: 'Mumbai',
  },
  {
    number: '11077',
    name: 'Jhelum Express',
    from: 'Pune',
    to: 'Jammu',
  },
  {
    number: '11078',
    name: 'Jhelum Express',
    from: 'Jammu',
    to: 'Pune',
  },
  {
    number: '11040',
    name: 'Maharashtra Express',
    from: 'Gondia',
    to: 'Kolhapur',
  },
];

const TrainScreen = ({ navigation }) => {
  const [trainList, setTrainList] = useState(trains);

   useFocusEffect(
    React.useCallback(() => {
      const saveTrainCount = async () => {
        await AsyncStorage.setItem(
          'trainCount',
          trainList.length.toString()
        );
      };

      saveTrainCount();
    }, [trainList])
  );

  const [mode, setMode] = useState(null);

  const [searchText, setSearchText] = useState('');

  const [editingTrain, setEditingTrain] = useState(null);

  const [editNumber, setEditNumber] = useState('');
  const [editName, setEditName] = useState('');
  const [editFrom, setEditFrom] = useState('');
  const [editTo, setEditTo] = useState('');

  const { t } = useLanguage();

  // =========================
  // ADD TRAIN
  // =========================

  const handleAddTrain = () => {
    navigation.navigate('AddTrain', {
      onAddTrain: (newTrain) => {
        setTrainList((prev) => [...prev, newTrain]);
      },
    });
  };

  // =========================
  // SEARCH TRAIN
  // =========================

  const filteredTrains = trainList.filter((train) => {
    const search = searchText.toLowerCase();

    return (
      train.number.toLowerCase().includes(search) ||
      train.name.toLowerCase().includes(search) ||
      train.from.toLowerCase().includes(search) ||
      train.to.toLowerCase().includes(search)
    );
  });

  // =========================
  // EDIT TRAIN
  // =========================

  const startEdit = (train) => {
    setEditingTrain(train);

    setEditNumber(train.number);
    setEditName(train.name);
    setEditFrom(train.from);
    setEditTo(train.to);
  };

  const saveEdit = () => {
    if (
      editNumber.trim() === '' ||
      editName.trim() === '' ||
      editFrom.trim() === '' ||
      editTo.trim() === ''
    ) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    setTrainList((prev) =>
      prev.map((train) =>
        train.number === editingTrain.number
          ? {
            number: editNumber,
            name: editName,
            from: editFrom,
            to: editTo,
          }
          : train
      )
    );

    setEditingTrain(null);

    Alert.alert('Success', 'Train updated successfully.');
  };

  // =========================
  // DELETE TRAIN
  // =========================

  const deleteTrain = (train) => {
    Alert.alert(
      'Delete Train',
      `Are you sure you want to delete ${train.name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setTrainList((prev) =>
              prev.filter(
                (item) => item.number !== train.number
              )
            );
          },
        },
      ]
    );
  };

  // =========================
  // BUTTON MODE
  // =========================

  const handleEditButton = () => {
    setMode(mode === 'edit' ? null : 'edit');
    setEditingTrain(null);
  };

  const handleSearchButton = () => {
    setMode(mode === 'search' ? null : 'search');
    setSearchText('');
    setEditingTrain(null);
  };

  const handleDeleteButton = () => {
    setMode(mode === 'delete' ? null : 'delete');
    setEditingTrain(null);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={true}
    >

      {/* TITLE */}

      <Text style={styles.title}>
        {t.trainManagement}
      </Text>

      {/* ADD TRAIN */}

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddTrain}
      >
        <Text style={styles.buttonText}>
          ➕ {t.addTrain}
        </Text>
      </TouchableOpacity>

      {/* EDIT TRAIN */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EditTrain')}
      >
        <Text style={styles.buttonText}>
          ✏️ {t.editTrain}
        </Text>
      </TouchableOpacity>

      {/* SEARCH TRAIN */}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSearchButton}
      >
        <Text style={styles.buttonText}>
          🔍 {t.searchTrain}
        </Text>
      </TouchableOpacity>

      {/* DELETE TRAIN */}

      <TouchableOpacity
        style={styles.button}
        onPress={handleDeleteButton}
      >
        <Text style={styles.buttonText}>
          🗑️ {t.deleteTrain}
        </Text>
      </TouchableOpacity>

      {/* SEARCH BOX */}

      {mode === 'search' && (
        <TextInput
          style={styles.input}
          placeholder="Search train number, name or station"
          value={searchText}
          onChangeText={setSearchText}
        />
      )}

      {/* TOTAL TRAINS */}

      <Text style={styles.listTitle}>
        {t.totalTrains}: {filteredTrains.length}
      </Text>

      {/* TRAIN LIST */}

      {filteredTrains.map((train) => (
        <View
          key={train.number}
          style={styles.trainCard}
        >

          <Text style={styles.trainName}>
            {train.number} - {train.name}
          </Text>

          <Text style={styles.route}>
            {train.from} → {train.to}
          </Text>

          {/* EDIT BUTTON */}

          {mode === 'edit' && editingTrain === null && (
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => startEdit(train)}
            >
              <Text style={styles.actionText}>
                ✏️ Edit
              </Text>
            </TouchableOpacity>
          )}

          {/* DELETE BUTTON */}

          {mode === 'delete' && (
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTrain(train)}
            >
              <Text style={styles.actionText}>
                🗑️ Delete
              </Text>
            </TouchableOpacity>
          )}

        </View>
      ))}

      {/* EDIT FORM */}

      {editingTrain && (
        <View style={styles.editBox}>

          <Text style={styles.editTitle}>
            Edit Train
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Train Number"
            value={editNumber}
            onChangeText={setEditNumber}
          />

          <TextInput
            style={styles.input}
            placeholder="Train Name"
            value={editName}
            onChangeText={setEditName}
          />

          <TextInput
            style={styles.input}
            placeholder="From"
            value={editFrom}
            onChangeText={setEditFrom}
          />

          <TextInput
            style={styles.input}
            placeholder="To"
            value={editTo}
            onChangeText={setEditTo}
          />

          <TouchableOpacity
            style={styles.saveButton}
            onPress={saveEdit}
          >
            <Text style={styles.buttonText}>
              💾 Save Changes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setEditingTrain(null)}
          >
            <Text style={styles.buttonText}>
              Cancel
            </Text>
          </TouchableOpacity>

        </View>
      )}

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
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

  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 15,
    marginBottom: 15,
  },

  trainCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },

  trainName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
  },

  route: {
    fontSize: 15,
    color: '#666',
    marginTop: 7,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 15,
  },

  editButton: {
    backgroundColor: '#FFA000',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },

  deleteButton: {
    backgroundColor: '#D32F2F',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  editBox: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 30,
    elevation: 3,
  },

  editTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#222',
  },

  saveButton: {
    backgroundColor: '#2E7D32',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  cancelButton: {
    backgroundColor: '#757575',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

});

export default TrainScreen;
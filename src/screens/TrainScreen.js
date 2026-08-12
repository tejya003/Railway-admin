import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

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

  const { t } = useLanguage();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={true}
    >

      {/* Title */}
      <Text style={styles.title}>
        {t.trainManagement}
      </Text>

      {/* Add Train */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('AddTrain', {
            onAddTrain: (newTrain) => {
              setTrainList(prev => [...prev, newTrain]);
            },
          })
        }
      >
        <Text style={styles.buttonText}>
          ➕ {t.addTrain}
        </Text>
      </TouchableOpacity>

      {/* Edit Train */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          ✏️ {t.editTrain}
        </Text>
      </TouchableOpacity>

      {/* Search Train */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          🔍 {t.searchTrain}
        </Text>
      </TouchableOpacity>

      {/* Delete Train */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          🗑️ {t.deleteTrain}
        </Text>
      </TouchableOpacity>

      {/* Total Trains */}
      <Text style={styles.listTitle}>
        {t.totalTrains}: {trainList.length}
      </Text>

      {/* Train List */}
      {trainList.map((train, index) => (
        <View key={index} style={styles.trainCard}>

          <Text style={styles.trainName}>
            {train.number} - {train.name}
          </Text>

          <Text style={styles.route}>
            {train.from} → {train.to}
          </Text>

        </View>
      ))}

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
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

  content: {
    padding: 20,
    paddingBottom: 40,
  },

});

export default TrainScreen;
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useLanguage } from './LanguageContext';

const DashboardScreen = ({ navigation }) => {

const [trainCount, setTrainCount] = useState(25);

useFocusEffect(
  React.useCallback(() => {
    const loadTrainCount = async () => {
      const count = await AsyncStorage.getItem('trainCount');

      if (count !== null) {
        setTrainCount(Number(count));
      }
    };

    loadTrainCount();
  }, [])
);

  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={true}
      >

        {/* Dashboard Title */}
        <Text style={styles.title}>
          {t.dashboard}
        </Text>

        {/* Welcome */}
        <Text style={styles.welcome}>
          {t.welcome}
        </Text>

        {/* Cards */}
        <View style={styles.cardContainer}>

          {/* Total Trains */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Train')}
          >
            <Text style={styles.cardNumber}>
              {trainCount}
            </Text>

            <Text style={styles.cardTitle}>
              {t.totalTrains}
            </Text>
          </TouchableOpacity>

          {/* Total Users */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('User')}
          >
            <Text style={styles.cardNumber}>
              00
            </Text>

            <Text style={styles.cardTitle}>
              {t.totalUsers}
            </Text>
          </TouchableOpacity>

          {/* Total Bookings */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Booking')}
          >
            <Text style={styles.cardNumber}>
              00
            </Text>

            <Text style={styles.cardTitle}>
              {t.totalBookings}
            </Text>
          </TouchableOpacity>

        </View>

        {/* Management */}
        <View style={styles.managementContainer}>

          <Text style={styles.sectionTitle}>
            {t.management}
          </Text>

          {/* Row 1 */}
          <View style={styles.managementRow}>

            <TouchableOpacity
              style={styles.managementButton}
              onPress={() => navigation.navigate('Train')}
            >
              <Text style={styles.managementText}>
                {t.trainManagement}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.managementButton}
              onPress={() => navigation.navigate('Station')}
            >
              <Text style={styles.managementText}>
                {t.stationManagement}
              </Text>
            </TouchableOpacity>

          </View>

          {/* Row 2 */}
          <View style={styles.managementRow}>

            <TouchableOpacity
              style={styles.managementButton}
              onPress={() => navigation.navigate('Booking')}
            >
              <Text style={styles.managementText}>
                {t.bookingManagement}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.managementButton}
              onPress={() => navigation.navigate('User')}
            >
              <Text style={styles.managementText}>
                {t.userManagement}
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomContainer}>

          {/* Reports */}
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() => navigation.navigate('Report')}
          >
            <Text style={styles.bottomText}>
              📊 {t.reports}
            </Text>
          </TouchableOpacity>

          {/* Settings */}
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() => navigation.navigate('Settings')}
          >
            <Text style={styles.bottomText}>
              ⚙️ {t.settings}
            </Text>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.logoutText}>
              🚪 {t.logout}
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
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
  },

  welcome: {
    fontSize: 20,
    color: '#666666',
    marginTop: 8,
  },

  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },

  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E88E5',
  },

  cardTitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },

  managementContainer: {
    marginTop: 30,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
  },

  managementRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  managementButton: {
    backgroundColor: '#1E88E5',
    padding: 15,
    borderRadius: 8,
    width: '48%',
  },

  managementText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  bottomContainer: {
    marginTop: 20,
  },

  bottomButton: {
    backgroundColor: '#1E88E5',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  logoutButton: {
    backgroundColor: '#f00000',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  bottomText: {
    color: '#0e0101',
    fontSize: 17,
    fontWeight: 'bold',
  },

  logoutText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  content: {
    paddingBottom: 20,
  },

});

export default DashboardScreen;
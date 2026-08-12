import React from 'react';
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
  const { language } = useLanguage();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={true}
      >

        {/* Title */}
        <Text style={styles.title}>
          {language === 'en'
            ? 'Railway Admin Dashboard'
            : language === 'mr'
            ? 'रेल्वे ॲडमिन डॅशबोर्ड'
            : 'रेलवे एडमिन डैशबोर्ड'}
        </Text>

        {/* Welcome */}
        <Text style={styles.welcome}>
          {language === 'en'
            ? 'Welcome Admin'
            : language === 'mr'
            ? 'स्वागत आहे ॲडमिन'
            : 'स्वागत है एडमिन'}
        </Text>

        {/* Cards */}
        <View style={styles.cardContainer}>

          {/* Total Trains */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Train')}
          >
            <Text style={styles.cardNumber}>25</Text>

            <Text style={styles.cardTitle}>
              {language === 'en'
                ? 'Total Trains'
                : language === 'mr'
                ? 'एकूण ट्रेन'
                : 'कुल ट्रेन'}
            </Text>
          </TouchableOpacity>

          {/* Total Users */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('User')}
          >
            <Text style={styles.cardNumber}>150</Text>

            <Text style={styles.cardTitle}>
              {language === 'en'
                ? 'Total Users'
                : language === 'mr'
                ? 'एकूण वापरकर्ते'
                : 'कुल उपयोगकर्ता'}
            </Text>
          </TouchableOpacity>

          {/* Total Bookings */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Booking')}
          >
            <Text style={styles.cardNumber}>320</Text>

            <Text style={styles.cardTitle}>
              {language === 'en'
                ? 'Total Bookings'
                : language === 'mr'
                ? 'एकूण बुकिंग'
                : 'कुल बुकिंग'}
            </Text>
          </TouchableOpacity>

        </View>

        {/* Management */}
        <View style={styles.managementContainer}>

          <Text style={styles.sectionTitle}>
            {language === 'en'
              ? 'Management'
              : language === 'mr'
              ? 'व्यवस्थापन'
              : 'प्रबंधन'}
          </Text>

          {/* Row 1 */}
          <View style={styles.managementRow}>

            <TouchableOpacity
              style={styles.managementButton}
              onPress={() => navigation.navigate('Train')}
            >
              <Text style={styles.managementText}>
                {language === 'en'
                  ? 'Train Management'
                  : language === 'mr'
                  ? 'ट्रेन व्यवस्थापन'
                  : 'ट्रेन प्रबंधन'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.managementButton}
              onPress={() => navigation.navigate('Station')}
            >
              <Text style={styles.managementText}>
                {language === 'en'
                  ? 'Station Management'
                  : language === 'mr'
                  ? 'स्टेशन व्यवस्थापन'
                  : 'स्टेशन प्रबंधन'}
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
                {language === 'en'
                  ? 'Booking Management'
                  : language === 'mr'
                  ? 'बुकिंग व्यवस्थापन'
                  : 'बुकिंग प्रबंधन'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.managementButton}
              onPress={() => navigation.navigate('User')}
            >
              <Text style={styles.managementText}>
                {language === 'en'
                  ? 'User Management'
                  : language === 'mr'
                  ? 'वापरकर्ता व्यवस्थापन'
                  : 'उपयोगकर्ता प्रबंधन'}
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
              📊 {language === 'en'
                ? 'Reports'
                : language === 'mr'
                ? 'अहवाल'
                : 'रिपोर्ट'}
            </Text>
          </TouchableOpacity>

          {/* Settings */}
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() => navigation.navigate('Settings')}
          >
            <Text style={styles.bottomText}>
              ⚙️ {language === 'en'
                ? 'Settings'
                : language === 'mr'
                ? 'सेटिंग्ज'
                : 'सेटिंग्स'}
            </Text>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.logoutText}>
              🚪 {language === 'en'
                ? 'Logout'
                : language === 'mr'
                ? 'लॉगआउट'
                : 'लॉगआउट'}
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
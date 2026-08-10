import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={true}
    >

      <Text style={styles.title}>
        Railway Admin Dashboard
      </Text>

      <Text style={styles.welcome}>
        Welcome Admin
      </Text>
      <View style={styles.cardContainer}>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>25</Text>
          <Text style={styles.cardTitle}>Total Trains</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>150</Text>
          <Text style={styles.cardTitle}>Total Users</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>320</Text>
          <Text style={styles.cardTitle}>Total Bookings</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>₹45K</Text>
          <Text style={styles.cardTitle}>Revenue</Text>
        </View>

      </View>

      <View style={styles.managementContainer}>

        <Text style={styles.sectionTitle}>
          Management
        </Text>

        <View style={styles.managementRow}>

          <TouchableOpacity
            style={styles.managementButton}
            onPress={() => navigation.navigate('Train')}
          >
            <Text style={styles.managementText}>Train Management</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.managementButton}
            onPress={() => navigation.navigate('Station')}
          >
            <Text style={styles.managementText}>Station Management</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.managementRow}>

          <TouchableOpacity
            style={styles.managementButton}
            onPress={() => navigation.navigate('Booking')}
          >
            <Text style={styles.managementText}>Booking Management</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.managementButton}
            onPress={() => navigation.navigate('User')}
          >
            <Text style={styles.managementText}>User Management</Text>
          </TouchableOpacity>

        </View>
        

      </View>
      <View style={styles.bottomContainer}>

  <TouchableOpacity
    style={styles.bottomButton}
    onPress={() => navigation.navigate('Report')}
  >
    <Text style={styles.bottomText}>📊 Reports</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.bottomButton}
    onPress={() => navigation.navigate('Settings')}
  >
    <Text style={styles.bottomText}>⚙️ Settings</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.logoutButton}
    onPress={() => navigation.navigate('Login')}
  >
    <Text style={styles.bottomText}>🌏Logout</Text>
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
content: {
  paddingBottom: 20,
},
});

export default DashboardScreen;
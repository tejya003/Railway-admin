import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useLanguage } from './LanguageContext';

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.container}>

      {/* Logo */}
      <Image
        source={require('../assets/images/railway-logo.png')}
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>
        RAILWAY ADMIN
      </Text>

      {/* Email */}
      <TextInput
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder={t.enterEmail}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#999"
      />

      {/* Password */}
      <TextInput
        placeholder={t.enterPassword}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholderTextColor="#999"
      />

      {/* Forgot Password */}
      <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text style={styles.forgotPassword}>
          {t.forgotPassword}
        </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        onPress={() => {

          if (email === '' || password === '') {

            Alert.alert(
              t.error,
              t.enterEmailPassword
            );

          } else {

            navigation.navigate('Dashboard');

          }

        }}
        style={styles.loginButton}
      >
        <Text style={styles.loginButtonText}>
          {t.loginToContinue}
        </Text>
      </TouchableOpacity>

      {/* OR */}
      <View style={styles.dividerContainer}>

        <View style={styles.divider} />

        <Text style={styles.orText}>
          {t.or}
        </Text>

        <View style={styles.divider} />

      </View>

      {/* Register */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.registerText}>
          {t.noAccountRegister}
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
  },

  input: {
    width: '90%',
    borderWidth: 2,
    borderColor: '#0a0202',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
    backgroundColor: '#F5F5F5',
    color: '#1686e8',
  },

  loginButton: {
    width: '90%',
    backgroundColor: '#651abb',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    elevation: 7,
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  forgotPassword: {
    width: '90%',
    textAlign: 'right',
    color: '#1E88E5',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18,
  },

  registerText: {
    marginTop: 25,
    color: '#0e0101',
    fontSize: 20,
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },

  dividerContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },

  orText: {
    marginHorizontal: 10,
    color: '#888',
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },

});
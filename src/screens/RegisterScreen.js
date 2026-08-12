import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import { useLanguage } from './LanguageContext';

const RegisterScreen = ({ navigation }) => {

  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >

      {/* Title */}
      <Text style={styles.title}>
        {t.createAccount}
      </Text>

      {/* Name */}
      <TextInput
        placeholder={t.enterName}
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      {/* Email */}
      <TextInput
        placeholder={t.enterEmail}
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Get OTP */}
      <TouchableOpacity
        style={styles.otpButton}
        onPress={async () => {

          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (email.trim() === '') {

            Alert.alert(
              t.error,
              t.enterEmail
            );

          } else if (!emailPattern.test(email.trim())) {

            Alert.alert(
              t.error,
              t.validEmail
            );

          } else {

            try {

              const response = await fetch(
                'http://192.168.1.10:5000/api/auth/send-otp',
                {
                  method: 'POST',

                  headers: {
                    'Content-Type': 'application/json',
                  },

                  body: JSON.stringify({
                    email: email.trim(),
                  }),
                }
              );

              const data = await response.json();

              console.log('OTP API Response:', data);

              if (response.ok) {

                setOtpSent(true);

                Alert.alert(
                  t.success,
                  t.otpSent
                );

              } else {

                Alert.alert(
                  t.error,
                  data.message || 'Failed to send OTP'
                );

              }

            } catch (error) {

              console.log('OTP Error:', error);

              Alert.alert(
                t.error,
                'Unable to connect to server'
              );

            }
          }
        }}
      >
        <Text style={styles.buttonText}>
          {t.getOtp}
        </Text>
      </TouchableOpacity>

      {/* OTP Section */}
     {otpSent && (
  <>
    <TextInput
      placeholder={t.enterOtp}
      style={styles.input}
      value={otp}
      onChangeText={setOtp}
      keyboardType="number-pad"
      maxLength={6}
    />

    {!otpVerified && (
      <TouchableOpacity
        style={styles.otpButton}
        onPress={async () => {

          if (otp === '') {

            Alert.alert(
              t.error,
              t.enterOtp
            );

            return;
          }

          try {

            const response = await fetch(
              'http://192.168.1.10:5000/api/auth/verify-otp',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email: email.trim(),
                  otp: otp.trim(),
                }),
              }
            );

            const data = await response.json();

            console.log('Verify OTP Response:', data);

            if (response.ok) {

              setOtpVerified(true);

              Alert.alert(
                t.success,
                t.otpVerified
              );

            } else {

              Alert.alert(
                t.error,
                data.message || 'Invalid OTP'
              );

            }

          } catch (error) {

            console.log('Verify OTP Error:', error);

            Alert.alert(
              t.error,
              'Unable to connect to server'
            );

          }
        }}
      >
        <Text style={styles.buttonText}>
          {t.verifyOtp}
        </Text>
      </TouchableOpacity>
    )}

    {otpVerified && (
      <Text
        style={{
          color: 'green',
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 15,
        }}
      >
        ✓ {t.otpVerified}
      </Text>
    )}
  </>
)}

      {/* Password */}
      <TextInput
        placeholder={t.enterPassword}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      {/* Confirm Password */}
      <TextInput
        placeholder={t.confirmPassword}
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />

      {/* Register */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => {

          if (
            name === '' ||
            email === '' ||
            password === '' ||
            confirmPassword === ''
          ) {

            Alert.alert(
              t.error,
              t.fillAllFields
            );

          } else if (!otpVerified) {

            Alert.alert(
              t.error,
              t.verifyEmailOtp
            );

          } else if (password !== confirmPassword) {

            Alert.alert(
              t.error,
              t.passwordMismatch
            );

          } else {

            Alert.alert(
              t.success,
              t.registrationSuccessful
            );

            navigation.goBack();
          }
        }}
      >
        <Text style={styles.buttonText}>
          {t.register}
        </Text>
      </TouchableOpacity>

      {/* Login */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.loginText}>
          {t.alreadyAccountLogin}
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 35,
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  otpButton: {
    backgroundColor: '#1E88E5',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },

  registerButton: {
    backgroundColor: '#1E88E5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  loginText: {
    textAlign: 'center',
    marginTop: 25,
    color: '#1E88E5',
    fontSize: 14,
  },

});

export default RegisterScreen;
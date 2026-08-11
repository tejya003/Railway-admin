import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
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

      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Enter Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      /* Get OTP Button */
      <TouchableOpacity
        style={styles.otpButton}
        onPress={() => {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (email.trim() === '') {
            alert('Please enter email');
          } else if (!emailPattern.test(email.trim())) {
            alert('Please enter a valid email address');
          } else {
            setOtpSent(true);
            alert('OTP sent to your email');
          }
        }}
      >
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>

      {/* OTP Section */}
      {otpSent && (
        <>
          <TextInput
            placeholder="Enter OTP"
            style={styles.input}
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            maxLength={6}
          />

          <TouchableOpacity
            style={styles.otpButton}
            onPress={() => {
              if (otp === '') {
                alert('Please enter OTP');
              } else {
                setOtpVerified(true);
                alert('OTP Verified');
              }
            }}
          >
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}

      <TextInput
        placeholder="Enter Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />

      {/* Register Button */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => {
          if (
            name === '' ||
            email === '' ||
            password === '' ||
            confirmPassword === ''
          ) {
            alert('Please fill all fields');
          } else if (!otpVerified) {
            alert('Please verify your email OTP');
          } else if (password !== confirmPassword) {
            alert('Passwords do not match');
          } else {
            alert('Registration Successful');
            navigation.goBack();
          }
        }}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.loginText}>
          Already have an account? Login
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
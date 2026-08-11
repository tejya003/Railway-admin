import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Reset Password</Text>

      {/* Email */}
      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Get OTP */}
      {!otpVerified && (
        <TouchableOpacity
          style={styles.button}
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
      )}

      {/* OTP */}
      {otpSent && !otpVerified && (
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
            style={styles.button}
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

      {/* New Password */}
      {otpVerified && (
        <>
          <TextInput
            placeholder="Enter New Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <TextInput
            placeholder="Confirm New Password"
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (password === '' || confirmPassword === '') {
                alert('Please fill all fields');
              } else if (password !== confirmPassword) {
                alert('Passwords do not match');
              } else {
                alert('Password reset successful');
                navigation.navigate('Login');
              }
            }}
          >
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Back to Login */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginText}>
          Back to Login
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  button: {
    backgroundColor: '#1E88E5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#1E88E5',
    fontSize: 15,
  },
});

export default ForgotPasswordScreen;
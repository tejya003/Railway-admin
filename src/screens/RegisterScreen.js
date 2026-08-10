import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>

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
                <Text style={styles.loginText}>Already have an account? Login</Text>
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
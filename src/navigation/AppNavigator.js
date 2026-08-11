import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TrainScreen from '../screens/TrainScreen';
import StationScreen from '../screens/StationScreen';
import BookingScreen from '../screens/BookingScreen';
import UserScreen from '../screens/UserScreen';
import ReportScreen from '../screens/ReportScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import AddTrainScreen from '../screens/AddTrainScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                />

                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ title: 'Create Account' }}
                />

                <Stack.Screen
                    name="Train"
                    component={TrainScreen}
                />

                <Stack.Screen
                    name="Station"
                    component={StationScreen}
                />

                <Stack.Screen
                    name="Booking"
                    component={BookingScreen}
                />

                <Stack.Screen
                    name="User"
                    component={UserScreen}
                />
                <Stack.Screen
                    name="Report"
                    component={ReportScreen}
                />

                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPasswordScreen}
                    options={{ title: 'Forgot Password' }}
                />
                <Stack.Screen
                    name="AddTrain"
                    component={AddTrainScreen}
                    options={{ title: 'Add Train' }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
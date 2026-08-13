import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TrainScreen from '../screens/TrainScreen';
import StationScreen from '../screens/StationScreen';
import BookingScreen from '../screens/BookingScreen';
import ViewBookingsScreen from '../screens/ViewBookingsScreen';
import SearchBookingScreen from '../screens/SearchBookingScreen';
import CancelBookingScreen from '../screens/CancelBookingScreen';
import UserScreen from '../screens/UserScreen';
import AddUserScreen from '../screens/AddUserScreen';
import EditUserScreen from '../screens/EditUserScreen';
import SearchUserScreen from '../screens/SearchUserScreen';
import DeleteUserScreen from '../screens/DeleteUserScreen';
import ReportScreen from '../screens/ReportScreen';
import BookingReportScreen from '../screens/BookingReportScreen';
import TrainReportScreen from '../screens/TrainReportScreen';
import UserReportScreen from '../screens/UserReportScreen';
import RevenueReportScreen from '../screens/RevenueReportScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileSettingsScreen from '../screens/ProfileSettingsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SecurityScreen from '../screens/SecurityScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import AddTrainScreen from '../screens/AddTrainScreen';
import EditTrainScreen from '../screens/EditTrainScreen';

import PlatformManagement from '../screens/PlatformManagement';
import PassengerManagement from '../screens/PassengerManagement';
import AnnouncementManagement from '../screens/AnnouncementManagement';
import StaffManagement from '../screens/StaffManagement';
import ComplaintFeedback from '../screens/ComplaintFeedback';



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
                    name="ViewBookings"
                    component={ViewBookingsScreen}
                    options={{ title: 'View Bookings' }}
                />
                <Stack.Screen
                    name="SearchBooking"
                    component={SearchBookingScreen}
                    options={{ title: 'Search Booking' }}
                />
                <Stack.Screen
                    name="CancelBooking"
                    component={CancelBookingScreen}
                    options={{ title: 'Cancel Booking' }}
                />

                <Stack.Screen
                    name="User"
                    component={UserScreen}
                />
                <Stack.Screen
                    name="AddUser"
                    component={AddUserScreen}
                    options={{ title: 'Add User' }}
                />
                <Stack.Screen
                    name="EditUser"
                    component={EditUserScreen}
                    options={{ title: 'Edit User' }}
                />

                <Stack.Screen
                    name="SearchUser"
                    component={SearchUserScreen}
                    options={{ title: 'Search User' }}
                />

                <Stack.Screen
                    name="DeleteUser"
                    component={DeleteUserScreen}
                    options={{ title: 'Delete User' }}
                />
                <Stack.Screen
                    name="Report"
                    component={ReportScreen}
                />
                <Stack.Screen
                    name="BookingReport"
                    component={BookingReportScreen}
                    options={{ title: 'Booking Report' }}
                />

                <Stack.Screen
                    name="TrainReport"
                    component={TrainReportScreen}
                    options={{ title: 'Train Report' }}
                />

                <Stack.Screen
                    name="UserReport"
                    component={UserReportScreen}
                    options={{ title: 'User Report' }}
                />

                <Stack.Screen
                    name="RevenueReport"
                    component={RevenueReportScreen}
                    options={{ title: 'Revenue Report' }}
                />

                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                />
                <Stack.Screen
                    name="ProfileSettings"
                    component={ProfileSettingsScreen}
                    options={{ title: 'Profile Settings' }}
                />

                <Stack.Screen
                    name="Notifications"
                    component={NotificationsScreen}
                    options={{ title: 'Notifications' }}
                />

                <Stack.Screen
                    name="Security"
                    component={SecurityScreen}
                    options={{ title: 'Security' }}
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
                <Stack.Screen
                    name="EditTrain"
                    component={EditTrainScreen}
                    options={{ title: 'Edit Train' }}
                />


                <Stack.Screen name="PlatformManagement"
                    component={PlatformManagement}
                    options={{ title: 'PlatformManagement' }} />

                <Stack.Screen name="PassengerManagement"
                    component={PassengerManagement}
                    options={{ title: 'PassengerManagement' }} />

                <Stack.Screen name="AnnouncementManagement"
                    component={AnnouncementManagement}
                    options={{ title: 'AnnouncementManagement' }} />

                <Stack.Screen name="StaffManagement"
                    component={StaffManagement}
                    options={{ title: 'StaffManagement' }} />

                <Stack.Screen name="ComplaintFeedback"
                    component={ComplaintFeedback}
                    options={{ title: 'ComplaintFeedback' }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

import BottomTabs from "./BottomTabs";
import SelectConcernScreen from '../screens/SelectConcernScreen';
import DoctorListScreen from '../screens/DoctorListScreen';
import ChooseConsultationScreen from '../screens/ChooseConsultationScreen';
import ChooseDateScreen from '../screens/ChooseDateScreen';
import ChooseTimeSlotScreen from '../screens/ChooseTimeSlotScreen';
import ConcernDetailsScreen from '../screens/ConcernDetailsScreen';
import BasicInfoScreen from '../screens/BasicInfoScreen';
import AppointmentSummaryScreen from '../screens/AppointmentSummaryScreen';
import PaymentSuccessScreen from '../screens/PaymentSuccessScreen';
import MyBookingsScreen from '../screens/MyBookingsScreen';
import AppointmentDetailsScreen from '../screens/AppointmentDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="DoctorList" component={DoctorListScreen} />
      <Stack.Screen name="ChooseConsultation" component={ChooseConsultationScreen} />
      <Stack.Screen name="ChooseDate" component={ChooseDateScreen} />
      <Stack.Screen name="ChooseTimeSlot" component={ChooseTimeSlotScreen} />
      <Stack.Screen name="ConcernDetails" component={ConcernDetailsScreen} />
      <Stack.Screen name="BasicInfo" component={BasicInfoScreen} />
      <Stack.Screen name="AppointmentSummary" component={AppointmentSummaryScreen} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetailsScreen} />
    </Stack.Navigator>

    </NavigationContainer>
  );
}

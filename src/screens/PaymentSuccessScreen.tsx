import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useBooking } from "../context/BookingContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PaymentSuccessScreen() {
  const navigation = useNavigation<any>();
  const { booking, reset } = useBooking();


  // Animation setup
  const scaleAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, []);
  const saveBookingToStorage = async () => {
    const saved = await AsyncStorage.getItem("appointments");
    const arr = saved ? JSON.parse(saved) : [];
    arr.push(booking);
    await AsyncStorage.setItem("appointments", JSON.stringify(arr));
  };

  const handleViewAppointment = async () => {
    await saveBookingToStorage();
    reset();
    navigation.navigate("MyBookings");
  };


  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, { transform: [{ scale: scaleAnim }] }]}>
        <Text style={styles.checkmark}>✔</Text>
      </Animated.View>

      <Text style={styles.title}>Payment Successful!</Text>
      <Text style={styles.message}>
        Your appointment has been confirmed.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleViewAppointment}>
        <Text style={styles.buttonText}>View Appointment →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 70,
    backgroundColor: "#C8E6C9",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  checkmark: {
    fontSize: 55,
    color: "#2E6C3E",
    fontWeight: "700",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 6,
    color: "#2E6C3E",
    textAlign: "center",
  },
  message: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
    maxWidth: 250,
  },
  button: {
    backgroundColor: "#2E6C3E",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

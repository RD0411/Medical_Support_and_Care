import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useBooking } from "../context/BookingContext";

export default function AppointmentSummaryScreen() {
  const navigation = useNavigation<any>();
  const { booking } = useBooking();

  const handleConfirm = () => {
    navigation.navigate("PaymentSuccess");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Appointment Summary</Text>

      {/* Concern */}
      <View style={styles.card}>
        <Text style={styles.label}>Health Concern</Text>
        <Text style={styles.value}>{booking.concernName}</Text>
        <Text style={styles.subText}>{booking.concernText}</Text>
      </View>

      {/* Doctor */}
      <View style={styles.card}>
        <Text style={styles.label}>Doctor</Text>
        <Text style={styles.value}>{booking.doctorId ? `Dr. ${booking.doctorId}` : "Selected Doctor"}</Text>
      </View>

      {/* Consultation Type */}
      <View style={styles.card}>
        <Text style={styles.label}>Consultation Type</Text>
        <Text style={styles.value}>
          {booking.consultationType === "video"
            ? "Video Consultation"
            : booking.consultationType === "phone"
            ? "Phone Call"
            : "Chat Consultation"}
        </Text>
      </View>

      {/* Date & Time */}
      <View style={styles.card}>
        <Text style={styles.label}>Date & Time</Text>
        <Text style={styles.value}>{booking.date}, {booking.time}</Text>
      </View>

      {/* Personal Details */}
      <View style={styles.card}>
        <Text style={styles.label}>Patient Information</Text>
        <Text style={styles.value}>
          {booking.gender} | {booking.age} yrs | {booking.height} cm | {booking.weight} kg
        </Text>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm & Proceed →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#F8F8F8",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    color: "#777",
    marginBottom: 3,
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2E6C3E",
  },
  subText: {
    fontSize: 14,
    marginTop: 4,
    color: "#555",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#2E6C3E",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

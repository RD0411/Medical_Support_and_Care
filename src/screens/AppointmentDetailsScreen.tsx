import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BookingState } from "../context/BookingContext";

export default function AppointmentDetailsScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const booking: BookingState = route.params?.booking;

  if (!booking) return null;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Appointment Details</Text>

      {/* Doctor Section */}
      <View style={styles.card}>
        <Text style={styles.label}>Doctor</Text>
        <Text style={styles.value}>Dr. {booking.doctorId}</Text>
      </View>

      {/* Consultation */}
      <View style={styles.card}>
        <Text style={styles.label}>Consultation Type</Text>
        <Text style={styles.value}>{
          booking.consultationType === "video" 
            ? "Video Consultation"
            : booking.consultationType === "phone"
            ? "Phone Call"
            : "Chat Consultation"
        }</Text>
      </View>

      {/* Date & Time */}
      <View style={styles.card}>
        <Text style={styles.label}>Scheduled Time</Text>
        <Text style={styles.value}>{booking.date} • {booking.time}</Text>
      </View>

      {/* Concern */}
      <View style={styles.card}>
        <Text style={styles.label}>Health Concern</Text>
        <Text style={styles.value}>{booking.concernName}</Text>
        <Text style={styles.subText}>{booking.concernText}</Text>
        <Text style={styles.subText}>Severity: {(booking.severity || 0) * 10}/10</Text>
        <Text style={styles.subText}>Since: {booking.durationValue} {booking.durationUnit}</Text>
      </View>

      {/* Patient Info */}
      <View style={styles.card}>
        <Text style={styles.label}>Patient Information</Text>
        <Text style={styles.value}>
          {booking.gender} | {booking.age} yrs | {booking.height} cm | {booking.weight} kg
        </Text>
      </View>

      {/* Back to bookings */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to My Bookings</Text>
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
    marginBottom: 25,
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
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 4,
    color: "#2E6C3E",
  },
  subText: {
    marginTop: 3,
    color: "#555",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#2E6C3E",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

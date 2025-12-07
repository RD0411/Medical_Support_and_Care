import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useBooking } from "../context/BookingContext";

const timeSlots = ["10:05 AM", "11:30 AM", "1:45 PM", "3:00 PM", "5:15 PM"];

export default function ChooseTimeSlotScreen() {
  const navigation = useNavigation<any>();
  const { setAppointmentTime } = useBooking();
  const [selectedTime, setSelectedTime] = useState("");

  const handleSelect = (slot: string) => {
    setSelectedTime(slot);
    setAppointmentTime(slot);
    navigation.navigate("ConcernDetails");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Time Slot</Text>

      {timeSlots.map((slot) => (
        <TouchableOpacity
          key={slot}
          style={[styles.slot, selectedTime === slot && styles.active]}
          onPress={() => handleSelect(slot)}
        >
          <Text style={styles.text}>{slot}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  slot: {
    padding: 18,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
    marginBottom: 12,
  },
  active: { backgroundColor: "#A5D6A7" },
  text: { fontSize: 16 },
});

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useBooking } from "../context/BookingContext";

const dates = ["Today", "Tomorrow", "Wed", "Thu", "Fri"];

export default function ChooseDateScreen() {
  const navigation = useNavigation<any>();
  const { setAppointmentDate } = useBooking();
  const [active, setActive] = useState("Today");

  const handleSelect = (date: string) => {
    setActive(date);
    setAppointmentDate(date);
    navigation.navigate("ChooseTimeSlot");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Date</Text>

      {dates.map((d) => (
        <TouchableOpacity
          key={d}
          style={[styles.card, active === d && styles.active]}
          onPress={() => handleSelect(d)}
        >
          <Text style={styles.label}>{d}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    padding: 18,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
    marginBottom: 12,
  },
  active: { backgroundColor: "#C8E6C9" },
  label: { fontSize: 16 },
});

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { BookingState } from "../context/BookingContext";

export default function MyBookingsScreen() {
  const navigation = useNavigation<any>();
  const [bookings, setBookings] = useState<BookingState[]>([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const saved = await AsyncStorage.getItem("appointments");
    if (saved) setBookings(JSON.parse(saved));
  };

  const renderItem = ({ item }: { item: BookingState }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("AppointmentDetails", { booking: item })}
    >
      <Text style={styles.doctor}>Dr. {item.doctorId}</Text>
      <Text style={styles.type}>{item.consultationType?.toUpperCase()} CONSULTATION</Text>
      <Text style={styles.date}>{item.date} • {item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Appointments</Text>

      {bookings.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>No appointments yet</Text>
        </View>
      ) : (
        <FlatList data={bookings} renderItem={renderItem} keyExtractor={(_, i) => i.toString()} />
      )}
    </View>
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
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#F8F8F8",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  doctor: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2E6C3E",
  },
  type: {
    color: "#777",
    marginVertical: 5,
  },
  date: {
    fontWeight: "500",
  },
  emptyBox: {
    marginTop: 50,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#777",
  },
});

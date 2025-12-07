import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { useBooking } from "../context/BookingContext";

type Props = NativeStackScreenProps<RootStackParamList, "ChooseConsultation">;

export default function ChooseConsultationScreen({ navigation }: Props) {
  const { setConsultationType } = useBooking();

  const handleSelect = (type: "phone" | "video" | "chat") => {
    setConsultationType(type);
    navigation.navigate("ChooseDate");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Consultation</Text>
      <Text style={styles.subtitle}>Pick a suitable mode</Text>

      <TouchableOpacity style={styles.option} onPress={() => handleSelect("video")}>
        <Text style={styles.optionText}>📹 Video Consultation</Text>
        <Text style={styles.fee}>₹15/min</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => handleSelect("phone")}>
        <Text style={styles.optionText}>📞 Phone Call</Text>
        <Text style={styles.fee}>₹10/min</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => handleSelect("chat")}>
        <Text style={styles.optionText}>💬 Chat Only</Text>
        <Text style={styles.fee}>₹5/min</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 20 },
  option: {
    padding: 20,
    backgroundColor: "#E8F5E9",
    borderRadius: 14,
    marginBottom: 16,
  },
  optionText: { fontSize: 16, fontWeight: "600" },
  fee: { fontSize: 13, marginTop: 6, color: "#2E6C3E" },
});

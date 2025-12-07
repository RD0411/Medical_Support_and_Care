import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useBooking } from "../context/BookingContext";

export default function BasicInfoScreen() {
  const navigation = useNavigation<any>();
  const { booking, updateBooking } = useBooking();

  const [gender, setGender] = useState(booking.gender || "");
  const [age, setAge] = useState(booking.age || "");
  const [height, setHeight] = useState(booking.height || "");
  const [weight, setWeight] = useState(booking.weight || "");

  const genderOptions = ["Male", "Female", "Other"];

  const handleContinue = () => {
    updateBooking({ gender, age, height, weight });
    navigation.navigate("AppointmentSummary");
  };

  const isValid = gender && age && height && weight;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About You</Text>

      {/* Gender */}
      <Text style={styles.label}>Gender</Text>
      <View style={styles.genderRow}>
        {genderOptions.map((g) => (
          <TouchableOpacity
            key={g}
            style={[styles.genderButton, gender === g && styles.genderActive]}
            onPress={() => setGender(g)}
          >
            <Text
              style={[
                styles.genderText,
                gender === g && styles.genderTextActive,
              ]}
            >
              {g}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Age */}
      <Text style={styles.label}>Age</Text>
      <TextInput
        placeholder="Enter your age"
        keyboardType="numeric"
        style={styles.input}
        value={age}
        onChangeText={setAge}
      />

      {/* Height */}
      <Text style={styles.label}>Height (cm)</Text>
      <TextInput
        placeholder="e.g. 170"
        keyboardType="numeric"
        style={styles.input}
        value={height}
        onChangeText={setHeight}
      />

      {/* Weight */}
      <Text style={styles.label}>Weight (kg)</Text>
      <TextInput
        placeholder="e.g. 65"
        keyboardType="numeric"
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
      />

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.button, !isValid && styles.disabled]}
        disabled={!isValid}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 6,
  },
  genderRow: {
    flexDirection: "row",
    gap: 10,
  },
  genderButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  genderActive: {
    backgroundColor: "#C8E6C9",
    borderColor: "#2E6C3E",
  },
  genderText: {
    fontSize: 14,
    color: "#555",
  },
  genderTextActive: {
    color: "#2E6C3E",
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#F5F5F5",
    padding: 12,
    borderRadius: 10,
  },
  button: {
    marginTop: "auto",
    backgroundColor: "#2E6C3E",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  disabled: {
    backgroundColor: "#9EBFA1",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

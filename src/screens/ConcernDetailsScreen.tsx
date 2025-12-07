import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";
import { useBooking } from "../context/BookingContext";

export default function ConcernDetailsScreen() {
  const navigation = useNavigation<any>();
  const { updateBooking, booking } = useBooking();

  const [symptoms, setSymptoms] = useState(booking.concernText || "");
  const [severity, setSeverity] = useState(booking.severity || 0.5);
  const [durationValue, setDurationValue] = useState(
    booking.durationValue?.toString() || ""
  );
  const [durationUnit, setDurationUnit] = useState(
    booking.durationUnit || "weeks"
  );

  const durationOptions: Array<"days" | "weeks" | "months" | "years"> = [
  "days",
  "weeks",
  "months",
  "years",
];


  const handleContinue = () => {
    updateBooking({
      concernText: symptoms,
      severity,
      durationValue: Number(durationValue),
      durationUnit,
    });

    navigation.navigate("BasicInfo");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell us about your condition</Text>

      {/* Symptoms Input */}
      <Text style={styles.label}>What brings you here?</Text>
      <TextInput
        placeholder="Describe your symptoms..."
        value={symptoms}
        onChangeText={setSymptoms}
        multiline
        style={styles.textArea}
      />

      {/* Severity Slider */}
      <Text style={styles.label}>How severe is it?</Text>
      <View style={styles.sliderRow}>
        <Text style={styles.sliderScale}>Mild</Text>
        <Text style={styles.sliderScale}>Severe</Text>
      </View>

      <Slider
        style={{ width: "100%", height: 40 }}
        minimumValue={0}
        maximumValue={1}
        value={severity}
        onValueChange={setSeverity}
        step={0.1}
        minimumTrackTintColor="#2E6C3E"
        maximumTrackTintColor="#ccc"
      />

      <Text style={styles.severityValue}>Severity: {(severity * 10).toFixed(1)}/10</Text>

      {/* Duration Input */}
      <Text style={[styles.label, { marginTop: 20 }]}>Since when?</Text>

      <View style={styles.durationRow}>
        <TextInput
          placeholder="1"
          keyboardType="numeric"
          style={styles.durationInput}
          value={durationValue}
          onChangeText={setDurationValue}
        />

        {durationOptions.map((unit) => (
          <TouchableOpacity
            key={unit}
            style={[
              styles.unitButton,
              durationUnit === unit && styles.unitButtonActive,
            ]}
            onPress={() => setDurationUnit(unit)}
          >
            <Text
              style={[
                styles.unitText,
                durationUnit === unit && styles.unitTextActive,
              ]}
            >
              {unit}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.button, !(symptoms && durationValue) && styles.disabled]}
        disabled={!(symptoms && durationValue)}
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
    color: "#555",
    marginBottom: 6,
  },
  textArea: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 12,
    minHeight: 100,
    textAlignVertical: "top",
    marginBottom: 15,
  },
  sliderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  sliderScale: {
    fontSize: 12,
    color: "#777",
  },
  severityValue: {
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "500",
  },
  durationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 20,
    flexWrap: "wrap",
  },
  durationInput: {
    width: 60,
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 8,
    textAlign: "center",
  },
  unitButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  unitButtonActive: {
    backgroundColor: "#C8E6C9",
    borderColor: "#2E6C3E",
  },
  unitText: {
    fontSize: 12,
    color: "#555",
  },
  unitTextActive: {
    fontWeight: "600",
    color: "#2E6C3E",
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

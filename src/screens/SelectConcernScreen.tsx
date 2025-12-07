import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CONCERNS } from '../data/concerns';
import { useBooking } from '../context/BookingContext';

export default function SelectConcernScreen() {
  const navigation = useNavigation<any>();
  const [selectedId, setSelectedId] = useState('hypertension');
  const { updateBooking } = useBooking();

  const handlePress = (item: (typeof CONCERNS)[number]) => {
    setSelectedId(item.id);
    updateBooking({ concernId: item.id, concernName: item.name });
    navigation.navigate('DoctorList', {
      concernId: item.id,
      concernName: item.name,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Concern</Text>
      <Text style={styles.subtitle}>Top Concerns</Text>

      <FlatList
        data={CONCERNS}
        numColumns={3}
        contentContainerStyle={{ paddingBottom: 40 }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const active = item.id === selectedId;
          return (
            <TouchableOpacity
              style={[styles.card, active && styles.cardActive]}
              onPress={() => handlePress(item)}
              activeOpacity={0.85}
            >
              <View style={styles.iconCircle} />
              <Text style={[styles.label, active && styles.labelActive]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7FAF7', paddingTop: 40, paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 8 },
  subtitle: { fontSize: 14, marginBottom: 16 },
  card: {
    width: '30%',
    margin: '1.66%',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
  },
  cardActive: {
    borderWidth: 2,
    borderColor: '#2E6C3E',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E4F1E4',
    marginBottom: 8,
  },
  label: { fontSize: 12, color: '#444' },
  labelActive: { color: '#2E6C3E', fontWeight: '600' },
});

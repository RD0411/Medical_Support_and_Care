import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/types';
import { DOCTORS } from '../data/doctors';
import { useBooking } from '../context/BookingContext';

type Props = NativeStackScreenProps<RootStackParamList, 'DoctorList'>;

export default function DoctorListScreen({ route, navigation }: Props) {
  const { concernId, concernName } = route.params;
  const { updateBooking } = useBooking();

  const doctors = DOCTORS.filter(d => d.concerns.includes(concernId));

  const onSchedule = (doctorId: string) => {
    updateBooking({ doctorId });
    navigation.navigate('ChooseConsultation', { doctorId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{concernName}</Text>

      {/* Filter chips row (static for now) */}
      <View style={styles.filterRow}>
        <Text style={[styles.chip, styles.chipActive]}>All</Text>
        <Text style={styles.chip}>Hair</Text>
        <Text style={styles.chip}>Diabetes</Text>
        <Text style={styles.chip}>Filter</Text>
      </View>

      <FlatList
        data={doctors}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.meta}>{item.speciality}</Text>
                <Text style={styles.meta}>{item.languages}</Text>
                <Text style={styles.meta}>Exp: {item.experienceYears} years</Text>
                <Text style={styles.fee}>₹ {item.feePerMin}/min Free (5min)</Text>
              </View>
              <Text style={styles.rating}>{item.rating.toFixed(1)} ★</Text>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.scheduleBtn} onPress={() => onSchedule(item.id)}>
                <Text style={styles.scheduleText}>Schedule</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.callBtn}>
                <Text style={styles.callText}>Free Call</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7FAF7', paddingTop: 16, paddingHorizontal: 12 },
  header: { fontSize: 20, fontWeight: '600', marginBottom: 12 },
  filterRow: { flexDirection: 'row', marginBottom: 12, alignItems: 'center' },
  chip: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 6,
    fontSize: 12,
  },
  chipActive: {
    borderColor: '#2E6C3E',
    color: '#2E6C3E',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
  },
  row: { flexDirection: 'row', alignItems: 'flex-start' },
  avatar: { width: 56, height: 56, borderRadius: 12, marginRight: 10 },
  name: { fontWeight: '600', fontSize: 14, marginBottom: 2 },
  meta: { fontSize: 11, color: '#555' },
  fee: { fontSize: 11, color: '#C44242', marginTop: 4 },
  rating: { fontSize: 12, fontWeight: '600', marginLeft: 4 },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  scheduleBtn: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2E6C3E',
    marginRight: 8,
    alignItems: 'center',
    paddingVertical: 8,
  },
  scheduleText: { color: '#2E6C3E', fontWeight: '500' },
  callBtn: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#2E6C3E',
    alignItems: 'center',
    paddingVertical: 8,
  },
  callText: { color: '#FFF', fontWeight: '500' },
});

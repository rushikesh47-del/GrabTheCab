import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RideInput({ route }) {
  const { destination, fareDetails } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ride Details</Text>
      <Text style={styles.detailLabel}>Destination: </Text>
      <Text style={styles.detailValue}>Latitude: {destination.latitude}, Longitude: {destination.longitude}</Text>
      
      <Text style={styles.detailLabel}>Fare Details: </Text>
      <Text style={styles.detailValue}>Base Fare: ${fareDetails.baseFare}</Text>
      <Text style={styles.detailValue}>Distance: {fareDetails.distance} km</Text>
      <Text style={styles.detailValue}>Per Km Rate: ${fareDetails.perKmRate}</Text>
      <Text style={styles.detailValue}>Service Fee: ${fareDetails.serviceFee}</Text>
      <Text style={styles.detailValue}>Tax: ${fareDetails.tax.toFixed(2)}</Text>
      <Text style={styles.detailValue}>Total Fare: ${fareDetails.totalFare.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f4f4f4' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  detailLabel: { fontSize: 18, fontWeight: '600', marginBottom: 5 },
  detailValue: { fontSize: 16, marginBottom: 20 },
});

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function RideInProgress({ route }) {
  const defaultDestination = { latitude: 0, longitude: 0 };
  const defaultFareDetails = {
    totalFare: 0,
    distance: 0,
    serviceFee: 0,
    tax: 0,
  };

  const destination = route?.params?.destination ?? defaultDestination;
  const fareDetails = route?.params?.fareDetails ?? defaultFareDetails;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.heading}>Ride In Progress</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Destination:</Text>
            <Text style={styles.text}>
              {destination.latitude.toFixed(4)}, {destination.longitude.toFixed(4)}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Total Fare:</Text>
            <Text style={styles.text}>${fareDetails.totalFare.toFixed(2)}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Distance:</Text>
            <Text style={styles.text}>{fareDetails.distance.toFixed(2)} km</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Service Fee:</Text>
            <Text style={styles.text}>${fareDetails.serviceFee.toFixed(2)}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Tax:</Text>
            <Text style={styles.text}>${fareDetails.tax.toFixed(2)}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 16,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

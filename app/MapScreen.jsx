import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import SearchBar from './SearchBar';
import MapViewStyle from '../constants/MapViewStyle.json';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import { useNavigation } from '@react-navigation/native';

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [marker, setMarker] = useState(null);
  const [route, setRoute] = useState(null);
  const [rideStarted, setRideStarted] = useState(false);
  const mapRef = useRef(null);
  const navigation = useNavigation();
  const [fareDetails, setFareDetails] = useState({
    baseFare: 150.00,
    distance: 0,
    perKmRate: 1.5,
    totalFare: 0,
    serviceFee: 2.00,
    tax: 1.5, 
  });

  const handleLocationSelect = (selectedLocation) => {
    setMarker(selectedLocation);
    setRoute(null);
    setRideStarted(false);

    mapRef.current.animateToRegion({
      latitude: selectedLocation.latitude,
      longitude: selectedLocation.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }, 1000);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Location permission not granted");
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  const handleFareCalculation = (distance) => {
    const totalFare = (fareDetails.baseFare + (fareDetails.perKmRate * distance)) + fareDetails.serviceFee;
    const tax = totalFare * 0.15; // 15% tax
    setFareDetails((prevDetails) => ({
      ...prevDetails,
      distance,
      totalFare: totalFare + tax,
      tax,
    }));
  };

  const handleConfirmRide = () => {
    if (marker && fareDetails.totalFare > 0) {
      setRideStarted(true);
      navigation.navigate('RideInProgress', {
        destination: marker,
        fareDetails: {
          totalFare: fareDetails.totalFare,
          distance: fareDetails.distance,
          serviceFee: fareDetails.serviceFee,
          tax: fareDetails.tax,
        },
      });
    } else {
      console.log("Destination or fare details missing.");
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar onLocationSelect={handleLocationSelect} />
      <MapView
        ref={mapRef}
        style={styles.map}
        showsUserLocation={true}
        customMapStyle={MapViewStyle}
        initialRegion={{
          latitude: location ? location.coords.latitude : 19.0584,
          longitude: location ? location.coords.longitude : 72.8842,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {marker && <Marker coordinate={marker} title="Selected Location" />}
        {location && marker && (
          <MapViewDirections
            origin={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
            destination={marker}
            apikey={'AIzaSyALfaC2MV6Kzz3Y4tYKNoHiTMM-CXKzBWk'} // Replace with your actual API key
            strokeWidth={4}
            strokeColor="black"
            onReady={(result) => {
              setRoute(result);
              handleFareCalculation(result.distance);
            }}
          />
        )}
        {route && <Polyline coordinates={route.coordinates} strokeWidth={4} strokeColor="black" />}
      </MapView>

      <View style={styles.confirmButtonContainer}>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmRide}>
          <Text style={styles.confirmButtonText}>{rideStarted ? "Ride In Progress" : "Confirm Ride"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: '100%', height: '100%' },
  confirmButtonContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
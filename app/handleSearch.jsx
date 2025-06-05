import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import SearchBar from './SearchBar'; // Adjust the path as necessary

const MapScreen = () => {
  const [marker, setMarker] = useState(null); // State to hold marker position

  // Function to handle location selection
  const handleLocationSelect = (location) => {
    setMarker(location); // Update the marker position
  };

  return (
    <View style={styles.container}>
      <SearchBar onLocationSelect={handleLocationSelect} /> {/* Pass the function as a prop */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825, // Set initial latitude
          longitude: -122.4324, // Set initial longitude
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {marker && (
          <Marker coordinate={marker} title="Selected Location" />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;

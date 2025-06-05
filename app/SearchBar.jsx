import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Linking } from 'react-native';

export default function SearchBar({ onLocationSelect }) { // Accept the function as a prop
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Enter destination"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // Call the passed-in function with the selected location details
          if (details) {
            const { lat, lng } = details.geometry.location; // Extract latitude and longitude
            onLocationSelect({ latitude: lat, longitude: lng }); 
            // Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`);
          }
        }}
        query={{
          key: 'AIzaSyALfaC2MV6Kzz3Y4tYKNoHiTMM-CXKzBWk', // Replace with your actual API key
          language: 'en',
        }}
        textInputProps={{
          style: styles.textInput,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    marginVertical: 30,
    padding: 30,
    borderRadius: 10,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#000',
    fontSize: 18,
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 0,
  },
});

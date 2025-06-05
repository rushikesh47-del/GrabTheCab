// auth.js
import app from './firebaseConfig'; // Ensure the path to your firebaseConfig file is correct
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// Initialize Firebase Authentication with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage) // Use AsyncStorage for persistence
});

export { auth }; // Export the auth instance for use in other parts of your app

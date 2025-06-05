import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { auth, db } from '../firbaseconfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const ManageScreen = () => {
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = auth.currentUser .uid;
      const userDocRef = doc(db, 'users', userId);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        setName(userData.name);
        setProfilePicture(userData.profilePicture ? { uri: userData.profilePicture } : null);
      } else {
        Alert.alert('User  data not found!');
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const handleChoosePhoto = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('You\'ve refused to allow this app to access your photos!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePicture({ uri: result.uri });
    }
  };

  const handleSaveChanges = async () => {
    if (!profilePicture) {
      Alert.alert('Please select a profile picture!');
      return;
    }

    const userId = auth.currentUser .uid;
    try {
      const userDocRef = doc(db, 'users', userId);
      await setDoc(userDocRef, {
        name: name,
        profilePicture: profilePicture.uri,
      }, { merge: true });
      Alert.alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error updating profile:', error.message);
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Profile</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      {profilePicture && (
        <Image source={{ uri: profilePicture.uri }} style={styles.image} />
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default ManageScreen;
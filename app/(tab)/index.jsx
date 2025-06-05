import { StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Alert } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';



export default function TabOneScreen() {
  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);  
  const navigation = useNavigation();
  const id = uuidv4();
console.log('Generated UUID:', id);



  useEffect(() => {
    const loadProfile = async () => {
      const savedUsername = await AsyncStorage.getItem('username');
      const savedImage = await AsyncStorage.getItem('profileImage');
      if (savedUsername) setUsername(savedUsername);
      if (savedImage) setImage(savedImage);
    };
    loadProfile();
  }, []);

  const saveProfile = async () => {
    try {
      await AsyncStorage.setItem('username', username);
      if (image) {
        await AsyncStorage.setItem('profileImage', image);
      }
      Alert.alert('Profile Saved', 'Your profile has been updated.');
    } catch (error) {
      Alert.alert('Error', 'There was an error saving your profile.');
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View>
        <Text style={styles.title}>GrabTheCab</Text>
        
        <View style={styles.inputWrapper}>
          <Ionicons name="search" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.text}
            placeholder="Where to ?"
            placeholderTextColor="#000"
            onPressIn={() => navigation.navigate('MapScreen')}
          />
        </View>
        
        <View>
          <View style={styles.line1} />
        </View>

        <View style={styles.searchContainer2}>
          <Ionicons name="time-sharp" size={20} marginLeft={40} />
          <TouchableOpacity>
            <TextInput
              style={styles.text2}
              placeholder="Now"
              placeholderTextColor="#000"
              editable={false}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.suggestionText}>Suggestion</Text>
        <TouchableOpacity onPress={() => navigation.navigate('service')}>
          <Text style={{ flexDirection: 'row', marginHorizontal: 300, width: 300 }}>See more</Text>
        </TouchableOpacity>

        <View style={styles.suggestionsContainer}>
          <TouchableOpacity style={styles.suggestionItem} onPress={() => navigation.navigate('MapScreen')}>
            <View style={styles.suggestionBox}>
              <Image source={require('../../assets/images/Uberimages/UberSelect-White.webp')} style={styles.suggestionImage} />
              <Text style={styles.suggestionLabel}>Trip</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.suggestionItem, { marginLeft: 125, marginTop: -20 }]} onPress={() => navigation.navigate('MapScreen')}>
            <View style={styles.suggestionBox}>
              <Image source={require('../../assets/images/Uberimages/UberBlack.webp')} style={styles.suggestionImage2} />
              <Text style={styles.suggestionLabel}>Intercity</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.suggestionItem, { marginLeft: 250, marginTop: -20 }]}>
            <View style={styles.suggestionBox}>
              <Image source={require('../../assets/images/Uberimages/Comfort_Vehicle_list.webp')} style={styles.suggestionImage3} />
              <Text style={styles.suggestionLabel}>Filter</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    borderColor: 'gray',
    borderRadius: 50,
    padding: 10,
    height: 50,
    width: 320,
    marginLeft: 30,
    marginVertical: 120,
  },
  text: {
    flex: 1,
    fontSize: 18,
    height: 40,
    padding: 0,
    margin: 0,
    fontWeight: '900',
  },
  searchIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: '900',
    position: 'absolute',
    top: 60,
    left: 10,
  },
  line1: {
    flex: 0,
    height: 50,
    width: 3,
    backgroundColor: '#fff',
    marginHorizontal: 230,
    marginVertical: -170,
  },
  searchContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    position: 'absolute',
    top: '50%',
    left: '60%',
    width: 80,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: -300,
  },
  text2: {
    flex: 1,
    fontSize: 15,
    height: 30,
    width: 80,
    marginRight: 10,
    marginLeft: 5,
    padding: 5,
    backgroundColor: 'transparent',
    borderColor: 'gray',
  },
  suggestionsContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 500,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  suggestionText: {
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  suggestionItem: {
    marginVertical: 20,
  },
  suggestionBox: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    height: 100,
    width: 80,
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
  },
  suggestionImage: {
    height: 60,
    width: 100,
    marginTop: 10,
    marginBottom: 5,
  },
  suggestionImage2: {
    height: 80,
    width: 100,
  },
  suggestionImage3: {
    height: 80,
    width: 150,
  },
  suggestionLabel: {
    fontWeight: '700',
    marginTop: 0,
  },
});

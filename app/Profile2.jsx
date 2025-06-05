import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { auth, db } from '../firbaseconfig'; // Ensure this is correctly set up
import { doc, getDoc } from 'firebase/firestore';

export default function Profile2() {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData =async()=>{
    auth.onAuthStateChanged(async(user)=>{
      console.log(user);
      const docRef = doc(db,"users",user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      }else{
        console.log("User is not Login ...");
      }
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/blank-profile-picture.png')} style={styles.profilePicture} />
        <Text style={styles.profileName}>Jon</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 400,
  },
  profilePicture: {
    borderRadius: 50,
    marginTop: 30,
    width: 80,
    height: 80,
    marginBottom: 10,
    marginRight: 30,
  },
  header: {
    justifyContent: 'center', // align content to top
    alignItems: 'center', // center horizontally
    padding: 30, // add some padding to the header
  },
  profileName: {
    fontSize: 25,
    marginRight: 30,
  },
});
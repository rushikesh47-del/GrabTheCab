import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '../firbaseconfig';
import { setDoc,doc } from 'firebase/firestore';



const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email,password);
      const user=auth.currentUser;
      console.log(user);
      if(user){
        await setDoc(doc(db,"Users",user.uid),{
          email:user.email,
          name:name,
          password:password,
        });
      }
      console.log("User Registerd successfully..");
     
      alert('You have successfully Register');
      navigation.navigate('index');
    }catch(error){
      console.log(error.message);

    }
  
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/register.png')} // replace with your logo 
        style={styles.logo}
      />
      <Text style={styles.title}>Register</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  logo: {
    marginTop:20,
    width: 350,
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    borderColor: '#000',
    fontSize: 17,
    padding: 8,
    width: 300,
    textAlign: 'auto',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
  },
  input: {
    height: 40,
    padding:5,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius:10,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign:'center',
  },
});

export default Registration;
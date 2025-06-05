import React, { useState , useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import app from '../firbaseconfig';
//import { auth } from '../auth';
import { signInWithEmailAndPassword ,getAuth} from 'firebase/auth';
import * as Location from 'expo-location';
import { UserLocationContext } from './UserLocationContext';
// import 'react-native-get-random-values';



export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const auth = getAuth(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email,password,);
      console.log("User Logged in Successfully.."); 
       navigation.navigate('(tab)'); // Navigate to Home screen after successful login
       alert('You are Login successfully '); 
    } catch (error) {
      console.log(error.message);
      alert('please check your Email & Password !!');
      
    }
  };
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    <UserLocationContext.Provider 
    value={{location,setLocation}}>
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View>
      <Image source={require('../assets/images/login.png')} style={styles.loginimg} />
      </View>
      <View >
        <Text style={styles.text}>Login</Text>
        <View>
          <View style={{
            marginVertical: 10, padding: 5,marginLeft:10,marginBottom:1,width:335,flexDirection:'row',
            borderRadius: 10, borderWidth: 1, borderColor: '#000',
          }}>
            <Octicons  name="mail" size={20} color='gray' style={{marginRight:10,marginTop:10,marginLeft:10}}/>
            <TextInput
              placeholder='Enter Your Email'
              style={styles.number}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={{
            marginVertical: 20, padding: 5,marginLeft:10,width:335,flexDirection:'row',
            borderRadius: 10, borderWidth: 1, borderColor: '#000',
          }}>
            <Octicons  name="lock" size={20} color='gray' style={{marginRight:10,marginTop:10,marginLeft:10}}/>
            <TextInput
              placeholder='Password'
              style={styles.number}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
            </View>
            {/* <View>
              <TouchableOpacity  onPress={handleSubmit}>
              <Text style={{marginTop:-10,textAlign:'right',marginRight:10,marginBottom:10,}}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View> */}
        </View>
        <View style={{ marginHorizontal: 10 }} >
          <TouchableOpacity style={styles.btn1} onPress={handleSubmit}>
            <Text style={styles.btn1Text}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginHorizontal:100,marginTop:10,}} onPress={() => navigation.navigate('Otp')}>
            <Text>I Don't Have A Account ?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 3, padding: 25 }}>
        <View>
          <View style={styles.line1} />
          <Text style={styles.OrText}>Or</Text>
          <View style={styles.line2} />
        </View>
        {/* <TouchableOpacity style={[styles.btn2, { marginBottom: 10 }]} onPress={() => navigation.navigate('Google')}>
          <Image source={require('../assets/images/google.png')} style={styles.btn2Image} />
          <Text style={styles.btn2Text}> Continue with Google</Text>
        </TouchableOpacity> */}
        
      </View>
    </KeyboardAvoidingView>
    </UserLocationContext.Provider>
    
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  line1: {
    flex: 0,
    height: 1,
    backgroundColor: 'black',
    //marginHorizontal:150,
    marginRight: 170,

  },
  line2: {
    flex: 0,
    top: -20,
    height: 1,
    backgroundColor: 'black',
    //marginHorizontal:150,
    marginLeft: 170,

  },
  OrText: {
    top: -10,
    flexDirection: 'row',
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 1,
  },
  text: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'initial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E5E4E2',
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 90,
    //fontSize:1,
  },
  loginimg:{
    marginTop:50,
    width: 250,
    height:280,
  },
  downIcon: {
    width: 11,
    height: 20,
    marginLeft: 10,
  },
  number: {
    borderColor: '#000',
    fontSize: 17,
    padding: 5,
    textAlign: 'auto',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
  },
  btn1: {
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 10
  },
  btn1Text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  btn2Text: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17
  },
  btn2: {
    backgroundColor: "#E5E4E2",
    padding: 14,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn3: {
    backgroundColor: "#E5E4E2",
    padding: 14,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn4: {
    backgroundColor: "#E5E4E2",
    padding: 14,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn2Image: {
    width: 20,
    height: 20,
    marginRight: 10,
    alignSelf: 'center'
  },
  flag: {
    height: 50,
    width: 50,
  },
});

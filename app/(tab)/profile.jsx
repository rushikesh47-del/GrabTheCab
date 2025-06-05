
import React from 'react';
import { Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Profile2 from '/Users/Rishi/Desktop/projects/my-app/app/Profile2';
//import SettingScreen from './SettingScreen';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text,View } from '@/components/Themed';
import Index from '../index';

export default function Profile() {
  const navigation = useNavigation();
  const handleLogout = () => {
    console.log('User logged out');
     
  };
  return (
    <View style={styles.container}>
      <Profile2/>
      <ScrollView style={{
        flex: 1,
        flexDirection: 'column',
        marginLeft: 5
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('HelpScreen')}
          style={{
            height: 100,
            width: 100,
            marginTop: 10,
            backgroundColor: '#D3D3D3',
            borderRadius: 20,
            flexDirection: 'column',
            marginLeft: 60,
          }}>
          <Ionicons name="settings" size={40} marginLeft={28} marginTop={15}/>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 30,
          }}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')}
          style={{
            height: 100,
            width: 100,
            backgroundColor: '#D3D3D3',
            borderRadius: 20,
            marginTop: -100,
            marginLeft: 220
          }}>
          <Ionicons name="card-outline" size={40} marginLeft={28} marginTop={15}/>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 8,
          }}>Payment</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate('ActivityScreen')}
          style={{
            height: 100,
            width: 100,
            backgroundColor: '#D3D3D3',
            marginLeft: 255,
            borderRadius: 20,
            marginTop: -100
          }}>
          <Image source={require('/Users/Rishi/Desktop/projects/my-app/assets/images/label.png')}
            style={{
              height: 30,
              width: 30,
              marginTop: 23,
              marginLeft: 35
            }} />
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 15,
          }}>Activity</Text>
        </TouchableOpacity> */}
        <View style={styles.line1} />
        {/* <TouchableOpacity 
          style={{
            height: 150,
            width: 340,
            backgroundColor: 'gray',
            marginTop: 30,
            borderRadius: 20
          }}>
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('Setting')}  style={{ height: 45, width: 340, marginTop: 10, borderRadius: 0,flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('/Users/Rishi/Desktop/projects/my-app/assets/images/settings.png')}style={{ height:20,width:20,marginRight:10,marginLeft:0 }}/>
        <Text style={{ fontSize: 20}}>Settings</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')} style={{ flexDirection: 'row', marginTop: 10,alignItems: 'center',width: 340 }}>
        <Image source={require('/Users/Rishi/Desktop/projects/my-app/assets/images/info.png')}style={{ height:20,width:20,marginRight:10 }}/>
          <Text style={{ marginVertical: 10, fontSize: 20}}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ManageScreen')} style={{ flexDirection: 'row', alignItems: 'center',width: 340 }}>
        <Image source={require('/Users/Rishi/Desktop/projects/my-app/assets/images/user.png')}style={{ height:20,width:20,marginRight:10 }}/>
          <Text style={{ marginVertical: 10, fontSize: 20 }}>Manage Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={{
          height: 50,
          width: 140,
          backgroundColor: '#FF6347', 
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}><Text>Log Out</Text></TouchableOpacity>
        <TouchableOpacity disabled={true} >
          <Text style={{ marginTop: 50, fontSize: 20, textAlign: 'center', justifyContent: 'center', height: 30, width: 50, color: '#fff', borderRadius: 10, backgroundColor: 'gray' }}>v 0.1</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  line1: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 15,
    marginBottom: -10,
  },
});

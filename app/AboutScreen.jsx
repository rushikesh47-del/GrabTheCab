import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

const AboutScreen = () => {
  const navigation = useNavigation()
  const handleEmailPress = () => {
    Linking.openURL('mailto:support@grabthecab.com');
  };

  const handleCallPress = () => {
    Linking.openURL('tel:+919324420181');
  };

  return (
    <View>      
      <View>
        <TouchableOpacity style={{backgroundColor:'#fff',height:50,width:50,borderRadius:50,marginTop:25,borderColor:'#000'}} onPress={() => navigation.navigate('profile')}>
        <Feather name="arrow-left" size={30}  style={styles.backIcon}/>
        </TouchableOpacity>        
      </View>
      <Text style={styles.headertext}>GrabTheCab - Seamless Cab Booking Experience</Text>
      <Text style={styles.text}> GrabTheCab, booking a cab is as easy as a few taps. Our intuitive app connects you with reliable drivers in your area, offering a stress-free way to get to your destination. Whether it’s a quick ride across town or a longer journey, GrabTheCab provides transparent pricing, real-time ride tracking, and multiple payment options for your convenience. Safety is our priority-our vetted drivers and in-app safety features ensure that every ride is secure and comfortable. Book your next ride effortlessly with GrabTheCab!</Text>
      <Text style={{textAlign: 'center',}}>
        For any queries or feedback, please email us at{' '}
        <Text style={styles.link} onPress={handleEmailPress}>
          support@grabthecab.com
        </Text>
        {' '}or call our helpline at{' '}
        <Text style={styles.link} onPress={handleCallPress}>
          +919324420181
        </Text>
        .
      </Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backIcon:{
    position:'absolute',
    top:10,
    marginLeft:10,
  },
  headertext:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  text:{
    fontSize: 15,
    fontWeight: '100',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
    marginLeft:10,
    marginRight:10,
    marginBottom:50,
  },
  link: {
    textDecorationLine: 'underline',
    color: '#007AFF',
  },
})
import { StyleSheet ,TouchableOpacity,Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useNavigation } from '@react-navigation/native'


export default function TabOneScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <TouchableOpacity style={[styles.suggestionItem,{marginLeft: 10, marginTop: 100 }]} onPress={() => navigation.navigate('MapScreen')}>
       <View style={styles.suggestionBox}>
         <Image source={require('/Users/Rishi/Desktop/projects/my-app/assets/images/Uberimages/UberSelect-White.webp')} style={styles.suggestionImage} />
         <Text style={styles.suggestionLabel}>Trip</Text>
       </View>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.suggestionItem, { marginLeft: 145, marginTop: -170 }]} onPress={() => navigation.navigate('MapScreen')}>
       <View style={styles.suggestionBox}>
         <Image source={require('/Users/Rishi/Desktop/projects/my-app/assets/images/Uberimages/UberBlack.webp')} style={styles.suggestionImage2} />
         <Text style={styles.suggestionLabel}>Intercity</Text>
       </View>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.suggestionItem, { marginLeft: 280, marginTop: -170 }]}>
       <View style={styles.suggestionBox}>
         <Image source={require('/Users/Rishi/Desktop/projects/my-app/assets/images/Uberimages/Comfort_Vehicle_list.webp')} style={styles.suggestionImage3} />
         <Text style={styles.suggestionLabel}>Filter</Text>
       </View>
     </TouchableOpacity>
    </View>
  //   <View style={styles.suggestionsContainer}>
        
  //   

  //   

  //   
  // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '900',
    position: 'absolute',
    top: 40,
    left: 10,
  },
  suggestionsContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 500,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  suggestionItem: {
    // flex: 1,
    marginVertical: 60,
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
    marginTop:10,
    marginBottom:5,
  },
  suggestionImage2: {
    height: 80,
    width: 100,
  },
  suggestionImage3: {
    height: 80,
    width:150,
  },
  suggestionLabel: {
    fontWeight:'700',
    marginTop: 0,
  },
});

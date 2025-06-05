import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const activities = [
  { id: '1', title: 'Purchase at Store A', date: '2023-10-01', amount: '$20.00' },
  { id: '2', title: 'Purchase at Store B', date: '2023-10-02', amount: '$15.50' },
  { id: '3', title: 'Refund from Store C', date: '2023-10-03', amount: '$5.00' },
  { id: '4', title: 'Purchase at Store D', date: '2023-10-04', amount: '$30.00' },
];

const ActivityScreen = () => {
  const renderActivityItem = ({ item }) => (
    <TouchableOpacity style={styles.activityItem} onPress={() => handleActivityPress(item)}>
      <Text style={styles.activityTitle}>{item.title}</Text>
      <Text style={styles.activityDate}>{item.date}</Text>
      <Text style={styles.activityAmount}>{item.amount}</Text>
    </TouchableOpacity>
  );

  const handleActivityPress = (item) => {
    Alert.alert('Activity Details', `Title: ${item.title}\nDate: ${item.date}\nAmount: ${item.amount}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity Log</Text>
      <FlatList
        data={activities}
        renderItem={renderActivityItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
  activityItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, // For Android shadow
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activityDate: {
    fontSize: 14,
    color: '#666',
  },
  activityAmount: {
    fontSize: 16,
    color: '#007BFF',
    marginTop: 5,
  },
});

export default ActivityScreen;
// HelpScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HelpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Help & Support</Text>
      <Text style={styles.subtitle}>Frequently Asked Questions</Text>
      
      <Text style={styles.question}>1. How do I use the app?</Text>
      <Text style={styles.answer}>
        To use the app, simply navigate to the map screen, select your destination, and confirm your ride.
      </Text>

      <Text style={styles.question}>2. What payment methods are accepted?</Text>
      <Text style={styles.answer}>
        We accept various payment methods including credit cards, debit cards, and mobile wallets.
      </Text>

      <Text style={styles.question}>3. How can I contact support?</Text>
      <Text style={styles.answer}>
        You can contact support by emailing support@example.com or through the contact form in the app.
      </Text>

      {/* Add more questions and answers as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },
  answer: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default HelpScreen;
import { Stack } from "expo-router";
import * as React from 'react';

export default function Layout() {
  return (
    <Stack>
      {/* Index Route */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Other Screens */}
      <Stack.Screen name="Otp" options={{ headerShown: false }} />
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      <Stack.Screen name="Setting" options={{ headerShown: false }} />
      <Stack.Screen name="AboutScreen" options={{ headerShown: false }} />
      <Stack.Screen name="ManageScreen" options={{ headerShown: false }} />
      <Stack.Screen name="HelpScreen" options={{ headerShown: false }} />
      <Stack.Screen name="PaymentScreen" options={{ headerShown: false }} />
      <Stack.Screen name="ActivityScreen" options={{ headerShown: false }} />
      <Stack.Screen name="RiderInput" options={{ headerShown: false }} />
      <Stack.Screen name="RideInProgress" options={{ headerShown: false }} />
      <Stack.Screen name="MapScreen" options={{ headerShown: false }} />
    </Stack>
  );
}

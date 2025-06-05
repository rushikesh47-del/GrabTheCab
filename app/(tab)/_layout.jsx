import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Foundation, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/components/useColorScheme';
import Animated from 'react-native-reanimated';
//import { AnimatedView } from 'react-native-reanimated/lib/typescript/reanimated2/component/View';

const lightTheme = {
  backgroundColor: '#fff',
  textColor: '#663300',
  tabBarIconColor: '#333'
}

const darkTheme = {
  backgroundColor: '#353935',
  textColor: '#FFFF80',
  tabBarIconColor: '#fff'
}

const TabRoot = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (

    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tabs screenOptions={{
        tabBarActiveTintColor: '',
        tabBarStyle: {
          height:60,flexDirection: 'row'
        },
      }}>
        <Tabs.Screen
          name='index'
          options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <Foundation size={30} 
              name="home" 
              color={theme.tabBarIconColor} 
              style={{marginBottom: -15}}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='service'
          options={{
            headerShown: false,
            title: 'Services',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons size={28}
              name="dots-grid" 
              color={theme.tabBarIconColor}
              style={{marginBottom: -15}}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            headerShown: false,
            title: 'Account',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons size={28} 
              name="account" 
              color={theme.tabBarIconColor} 
              style={{marginBottom: -15}}
              />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  )
}

export default TabRoot
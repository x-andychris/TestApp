import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// importing / using icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    // <WelcomePage />
    // Site link to icons: https://icons.expo.fyi/
    <View style={styles.container}>
      <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});
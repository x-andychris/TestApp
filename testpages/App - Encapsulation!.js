import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// importing the custom text view or boxs
import AppText from './src/components/AppText';
// import page from another
import WelcomePage from './src/pages/WelcomePage';
import DisplayImage from './src/pages/DisplayImage';
import ViewImage from './src/pages/ViewImage';

export default function App() {
  return (
    // <WelcomePage />
    <View style={styles.container}>
      <AppText style={styles.fortext}>I love react Native! It makes coding easier for me</AppText>
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
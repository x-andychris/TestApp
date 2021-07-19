import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import page from another
import WelcomePage from './src/pages/WelcomePage';
import DisplayImage from './src/pages/DisplayImage';
import ViewImage from './src/pages/ViewImage';

export default function App() {
  return (
    // <WelcomePage />
    <View style={styles.container}>
      <Text style={styles.fortext}>I love react Native! It makes coding easier for me</Text>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  fortext: {
    fontFamily: "Courier", // the font type; eg., Algerian, Bodoni...
    fontSize: 20, // cmon
    fontStyle: "italic", // too easy
    textTransform: "uppercase", // changing casing
    color: "tomato", // the font color
    textAlign: "center", // the alignment of the text within
    fontWeight: "bold", // too easy
    lineHeight: 40 // the size of the text area (better not use)
  },
});
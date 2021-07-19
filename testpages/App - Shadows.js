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
    <View style={styles.mainview}>
      <View style={styles.viewstyle}>

      </View>
    </View>
  );


}

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  viewstyle: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    // ios start
    shadowColor: "grey",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 10,
    // ios end
    elevation: 20, // needed for android
    // Note: Shadows dosen't really work for android
  }
});
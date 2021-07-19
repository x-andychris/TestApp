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
    justifyContent: "flex-end",
    //alignItems: "center"
  },
  viewstyle: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: 600,
    borderWidth: 2,
    borderTopLeftRadius: 230,
    alignContent: "flex-end",

  }
});
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
      {/* layer 1 */}
      <View style={styles.viewstyle}>
        {/* Layer 2 */}
        <View style={styles.innerview}>

        </View>
      </View>
      <View style={styles.viewstyle2}>

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
    padding: 25,
    marginRight: 0
  },
  innerview: {
    backgroundColor: "gold",
    width: 50,
    height: 50,
  },
  viewstyle2: {
    backgroundColor: "tomato",
    width: 100,
    height: 100,
    marginLeft: 20
  },
});
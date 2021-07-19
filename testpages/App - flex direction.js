import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainview}>
      <View style={styles.view2}>

      </View>
      <View style={styles.view3}>

      </View>
      <View style={styles.view4}>

      </View>
      <View style={styles.view5}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: "row",

    // flexDirection: "row" // Horizontally
    // flexDirection: "column" // Vertically
  },
  view2: {
    height: 100,
    width: 100,
    backgroundColor: "blue"
  },
  view3: {
    height: 100,
    width: 100,
    backgroundColor: "green"
  },
  view4: {
    height: 100,
    width: 100,
    backgroundColor: "yellow"
  },
  view5: {
    height: 100,
    width: 100,
    backgroundColor: "black"
  }
});

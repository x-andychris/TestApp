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
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: "row",
    justifyContent: "center",
    // for the justify content, we have flex-start, flex-end, center, space-around
    alignItems: "center"
  },
  view2:{
    height: 300,
    width: 100,
    backgroundColor: "blue"
  },
  view3:{
    height: 200,
    width: 100,
    backgroundColor: "green"
  },
  view4:{
    height: 100,
    width: 100,
    backgroundColor: "yellow"
  }
});

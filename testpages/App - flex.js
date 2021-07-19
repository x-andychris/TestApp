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
    backgroundColor: 'red'
  },
  view2:{
    flex:0.5,
    backgroundColor: "blue"
  },
  view3:{
    flex:1,
    backgroundColor: "green"
  },
  view4:{
    flex:0.5,
    backgroundColor: "yellow"
  },
  view5:{
    flex:0.5,
    backgroundColor: "black"
  }
});

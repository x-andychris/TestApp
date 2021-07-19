import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// import page from another
import WelcomePage from './src/pages/WelcomePage';

// importing the Ccard item
import Card from './src/components/Card';

export default function App() {
  return (
    // <WelcomePage />
    <View style={styles.cardstyle}>
      <Card title="Red Jacket For Sale" subTitle="$100" image={require("./src/assets/images/clean.jpg")} />

    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardstyle: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100
  }

});
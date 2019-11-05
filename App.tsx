import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meme from './image';
import MuitosOlars from './olar-pessoas';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>OLAR MATHEUS</Text>
      <Meme></Meme>
      <MuitosOlars></MuitosOlars>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

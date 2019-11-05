import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meme from './meme';
import MuitosOlars from './olar-pessoas';
import PiscaPiscaPisca from './pisca-pisca';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>OLAR MATHEUS</Text>
      <Meme></Meme>
      <PiscaPiscaPisca></PiscaPiscaPisca>
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

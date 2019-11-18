import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meme from './meme';
import MuitosOlars from './olar-pessoas';
import MuitosEstilos from './componente-estilizado';
import DimensoesFixas from './componente-dimensionado';
import FlexDirectionBasics from './flex-directions-basics';
import AlignItemsBasics from './align-items-basics';
import PizzaTranslator from './pizza-translator';

export default function App() {
  return (
    <PizzaTranslator text=''></PizzaTranslator>
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

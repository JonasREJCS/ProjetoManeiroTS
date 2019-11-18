import React, { Component } from 'react';
import { View } from 'react-native';

export default class DimensoesFixas extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'pink'}} />
        <View style={{width: 60, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

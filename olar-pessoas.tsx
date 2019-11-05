import React, { Component } from 'react';
import { Text, View } from 'react-native';

interface Props {
    name: string
}
class Olar extends Component<Props> {
    render () {
        return (
            <View style={{ alignItems: 'center'}}>
                <Text>OLAR PESSOA CHAMADA {this.props.name}</Text>
            </View>
        ) ;
    }
}

export default class MuitosOlars extends Component {
    render () {
        return (
            <View style={{alignItems: 'center', top: 50 }}>
                <Olar name='ANDRESSA'/>
                <Olar name='JONAS' />
            </View>
        );
    }
}
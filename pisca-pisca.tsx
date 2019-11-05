import React, { Component } from 'react';
import { Text, View } from 'react-native';

interface Props {
    texto: string
}
interface State {
    taMostrandoTexto: boolean
}
class Pisca extends Component<Props, State> {
    componentDidMount() {
        // Toggle the state every second
        setInterval(() => (
            this.setState(previousSate  => (
                {taMostrandoTexto: !previousSate.taMostrandoTexto}
            ))
        ), 500);
    }
    state = { taMostrandoTexto: true }

    render() {
        if (! this.state.taMostrandoTexto) {
            return null;
        }

        return (
            <Text>{this.props.texto}</Text>
        );
    }

}

export default class PiscaPiscaPisca extends Component {
    render () {
        return (
            <View>
                <Pisca texto='AUMENTE'></Pisca>
                <Pisca texto='SEU'></Pisca>
                <Pisca texto='SORRISO!!!!'></Pisca>
            </View>
        );
    }
}



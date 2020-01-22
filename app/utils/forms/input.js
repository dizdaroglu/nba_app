import React from 'react';
import { View, Text, StyleSheet, TextInput, Picker } from 'react-native';

const input = (props) => {
    let template = null;

    switch (props.type) {
        case "textinput":
            template =
                <TextInput
                    {...props}
                    underlineColorAndroid="transparent"
                    style={[styles.input, props.overrideStyle]}
                />
            break;
        default:
            return template;
    }
    return template;
}
const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderBottomColor: '#eaeaea',
        borderBottomWidth: 1,
        fontSize: 16,
        padding: 5,
        marginTop: 10
    }
})

export default input;

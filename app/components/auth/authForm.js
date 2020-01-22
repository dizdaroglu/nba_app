import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

import Input from '../../utils/forms/input';

export default class AuthForm extends Component {

    state = {
        type: 'Login',
        action: 'Login',
        actionMode: 'I want to register',
        hasErrors: false,
        form: {
            email: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    isRequired: true,
                    isEmail: true
                }
            },
            password: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    isRequired: true,
                    minLength: 6
                }
            },
            confimPassword: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    confirmPass: 'password',
                }
            }
        }
    }
    updateInput = (name, value) => {
        this.setState({ hasErrors: false });

        let formCopy = this.state.form;
        formCopy[name].value = value;

        //rules
        this.setState({
            form: formCopy
        })
    }
    formHasErrors = () => (
        this.state.hasErrors ?
            <View style={styles.errorContainer}>
                <Text style={styles.errorLabel}>Oops, check your info.</Text>
            </View>
            : null
    )
    confirmPassword = () => (
        this.state.type != 'Login' ?
            <Input
                placeholder="Confirm your password"
                placeholderTextColor="#cecece"
                value={this.state.form.confimPassword.value}
                type={this.state.form.confimPassword.type}
                onChangeText={value => this.updateInput('confirmPassword', value)}
                secureTextEntry
            // overrideStyle={}
            />
            : null
    )
    render() {
        return (
            <View>
                <Input
                    placeholder="Enter email"
                    placeholderTextColor="#cecece"
                    autoCapitalize={"none"}
                    value={this.state.form.email.value}
                    type={this.state.form.email.type}
                    keyboardType={"email-address"}
                    onChangeText={value => this.updateInput('email', value)}
                // overrideStyle={}
                />
                <Input
                    placeholder="Enter your password"
                    placeholderTextColor="#cecece"
                    value={this.state.form.password.value}
                    type={this.state.form.password.type}
                    onChangeText={value => this.updateInput('password', value)}
                    secureTextEntry
                // overrideStyle={}
                />

                {this.confirmPassword()}
                {this.formHasErrors()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    errorContainer: {
        marginBottom: 10,
        marginTop: 30,
        padding: 10,
        backgroundColor: '#f44336'
    },
    errorLabel: {
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center'
    }
})
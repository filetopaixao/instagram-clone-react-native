import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableOpacityBase} from 'react-native'

class Register extends Component {
    state = {
        name: '',
        emial: '',
        password: '',
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Nome' autoFocus={true} value={this.state.name} onChangeText={name => this.setState({name})} />
                <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' autoFocus={true} value={this.state.email} onChangeText={email => this.setState({email})} />
                <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} autoFocus={true} value={this.state.password} onChangeText={password => this.setState({password})} />
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText:{
        fontSize:20,
        color: '#fff'
    },
    input:{
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
})

export default Register
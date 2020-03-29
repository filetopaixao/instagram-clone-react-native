import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableOpacityBase} from 'react-native'
import {connect} from 'react-redux'
import { login } from '../store/actions/user'

class Login extends Component{
    state = {
        name:'temporario',
        email: 'aaaaa',
        password:''
    }

    login = () => {
        this.props.onLogin({...this.state})
        this.props.navigation.navigate('Profile')
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput placeholder='Email' style={styles.input} autoFocus={true} keyboardType='email-address' value={this.state.email} onChangeText={ email => this.setState({email}) } />
                <TextInput placeholder='Senha' style={styles.input} autoFocus={true} secureTextEntry={true} value={this.state.password} onChangeText={ password => this.setState({password}) } />
                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Register')}} style={styles.button}>
                    <Text style={styles.textButton}>Criar Conta</Text>
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
    textButton:{
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
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

//export default Login
export default connect(null, mapDispatchToProps)(Login)
import {USER_LOGGED_IN, USER_LOGGED_OUT} from './actionTypes'
import axios from 'axios'

const authBaseUrl = 'https://www.googleapis.com/indentitytoolkit/v3/relyinparty'
const API_KEY = 'AIzaSyBiaPawSckIPoynnBFYx9vrWR2wyov4SbE'

export const login = usuario => {
    return {
        type: USER_LOGGED_IN,
        payload: usuario
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const createUser = user => {
    return dispatch => {
        axios.post(`${authBaseUrl}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(err => console.log(err))
        .then(res => {
            if(res.data.localId){
                axios.put(`/user/${res.data.localId}.json`,{
                    name: user.name,
                    
                })
            }
        })
    }
}
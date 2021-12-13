import axios from "axios";
import {AsyncStorage} from 'react-native';

import {userConstants} from '../constants';

import store from '../store';
import { ENDPOINT } from 'react-native-dotenv';
import authHead from "../helpers/authHead";
import Snackbar from 'react-native-snackbar';

export const userActions = {
    login,
    logout,
    loginSocial,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        axios.post(ENDPOINT+'/user/token', {username,password})
        .then((result)=>{
            dispatch(success(result.data));
        }).catch(err=>{
            console.log(err);
            Snackbar.show({
                text: 'Login Error:' +err,
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
              });
            dispatch(failure(err));
        });

    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) {
        //iosAPNConfig(user._id,user.token)
         return { type: userConstants.LOGIN_SUCCESS, user } 
        }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function loginSocial(user) {
    return dispatch => {
        dispatch({ type: userConstants.SOCIAL_LOGIN_SUCCESS, user });
    };
}

function logout() {
    return dispatch => {
        AsyncStorage.removeItem('user')
        dispatch({ type: userConstants.LOGOUT  });
    };
}

store.dispatch(getAsyncStorage());

import {
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOG_OUT
} from './types';
import Firebase from 'firebase';

export const login = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( {
            type: LOGIN_USER
        } );
        try {
            const user = await Firebase.auth().signInWithEmailAndPassword( email, password );
            dispatchUserSuccess( user, dispatch );
        } catch ( error ) {
            try {
                const newUser = await Firebase.auth().createUserWithEmailAndPassword( email, password );
                dispatchUserSuccess( newUser, dispatch );
            } catch ( error ) {
                console.log( error );
                dispatch( {
                    type: LOGIN_ERROR,
                    payload: error
                } )
            }
        }

    }
}

export const changeEmail = ( email ) => {
    return {
        type: CHANGE_EMAIL,
        payload: email
    }
}

export const changePassword = ( password ) => {
    return {
        type: CHANGE_PASSWORD,
        payload: password
    }
}

const dispatchUserSuccess = ( user, dispatch ) => {
    dispatch( {
        type: LOGIN_SUCCESS,
        payload: user
    } );
}

export const logOut = () => {
    Firebase.auth().signOut();
    return {
        type: LOG_OUT
    }
}
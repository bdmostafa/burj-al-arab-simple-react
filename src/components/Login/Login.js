import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName, email, photoURL} = res.user;
            const signedInUser = {name: displayName, email, photoURL}
            setLoggedInUser(signedInUser)
          }).catch( err => {
            console.log(err.message)
          });
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;
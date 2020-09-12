import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName, email, photoURL} = res.user;
            const signedInUser = {name: displayName, email, photoURL}
            setLoggedInUser(signedInUser);
            history.replace(from)
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
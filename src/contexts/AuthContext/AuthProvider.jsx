import React, { useEffect, useState } from 'react';
import { AuthContxt } from './AuthContext';
import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile
} from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Email/Password Registration
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Email/Password Login
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Google Login
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Update Firebase Profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

    // Track Auth State
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        signInGoogle,
        logOut,
        updateUserProfile
    };

    return (
        <AuthContxt.Provider value={authInfo}>
            {children}
        </AuthContxt.Provider>
    );
};

export default AuthProvider;
